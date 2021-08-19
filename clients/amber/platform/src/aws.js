const { keyBy, some, startsWith } = require('lodash');
const { CloudFront, CloudFormation, Route53 } = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const assert = require('assert');
const { getConfig } = require('./config');
const { promise: exec } = require('exec-sh');

const { DOMAIN, SSL_CERTIFICATE_ARN } = getConfig(process.env.ENV);

/**
 *
 * @param {object} input
 * @param {string} input.realm
 * @param {string} input.env
 */
const deploy = async ({ realm, env }) => {
  assert(DOMAIN, 'DOMAIN must be defined.');
  assert(SSL_CERTIFICATE_ARN, 'SSL_CERTIFICATE_ARN must be defined.');

  if (!(await isDomainExists({ domainName: DOMAIN || '' }))) {
    throw new Error(`${DOMAIN} does not exist.`);
  }

  const stackName = `si-${realm}-${env}-amber`;
  await exec(
    [
      'sam',
      'deploy',
      '--no-fail-on-empty-changeset',
      `--capabilities CAPABILITY_IAM`,
      '--template-file',
      require.resolve('./template.yaml'),
      '--stack-name',
      stackName,
      `--parameter-overrides`,
      `DomainName=${DOMAIN}`,
      `AcmCertificateArn=${SSL_CERTIFICATE_ARN}`,
      `Env=${env}`,
    ].join(' '),
  );

  await exec(
    ['aws', 's3', 'sync', 'out/', `s3://amber-${env}.${DOMAIN}`].join(' '),
  );

  await invalidateCloudfront({ stackName });
};

/**
 *
 * @param {object} input
 * @param {string} input.domainName
 */
async function isDomainExists({ domainName }) {
  const route53 = new Route53();
  const { HostedZones } = await route53
    .listHostedZonesByName({
      DNSName: domainName,
    })
    .promise();

  return some(HostedZones, (zone) => startsWith(zone.Name, domainName));
}

/**
 *
 * @param {object} input
 * @param {string} input.stackName
 */
async function invalidateCloudfront({ stackName }) {
  const cloudFormation = new CloudFormation();
  const { Stacks: stacks } = await cloudFormation
    .describeStacks({
      StackName: stackName,
    })
    .promise();

  if (!stacks || stacks.length !== 1) {
    throw new Error(`Cannot find stack ${stackName}`);
  }

  const distributionId = keyBy(stacks[0].Outputs, 'OutputKey')
    .CloudfrontDistributionId.OutputValue;

  if (!distributionId) {
    throw new Error(`Cannot get distribution ID from stack ${stackName}`);
  }

  const cloudFront = new CloudFront();
  const invalidatingItems = ['/*'];

  await cloudFront
    .createInvalidation({
      DistributionId: distributionId,
      InvalidationBatch: {
        CallerReference: uuidv4(),
        Paths: {
          Quantity: invalidatingItems.length,
          Items: invalidatingItems,
        },
      },
    })
    .promise();
}

/**
 *
 * @param {object} input
 * @param {string} input.realm
 * @param {string} input.env
 */
const undeploy = async ({ realm, env }) => {
  const stackName = `si-${realm}-${env}-amber`;
  console.log('Deleting stack', stackName);

  await exec(
    ['aws', 'cloudformation', 'delete-stack', '--stack-name', stackName].join(
      ' ',
    ),
  );
};

module.exports = { deploy, undeploy };
