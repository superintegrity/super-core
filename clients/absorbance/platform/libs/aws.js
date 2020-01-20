const { keyBy, some, startsWith } = require('lodash')
const { CloudFront, CloudFormation, Route53 } = require('aws-sdk')
const uuidv4 = require('uuid/v4')
const assert = require('assert')
const { makeExec } = require('./effects/exec')
const { DOMAIN, SSL_CERTIFICATE_ARN, IS_MAIN_CLOUDFRONT } = require('./config')

/**
 * @param {object} input
 * @param {import('./logger').ILogger} input.logger
 */
function makeAws({ logger }) {
  const exec = makeExec({ logger })
  return {
    deploy: makeDeploy({ exec }),
    undeploy: makeUndeploy({ exec }),
  }
}

/**
 *
 * @param {object} input
 * @param {ReturnType<typeof makeExec>} input.exec
 */
const makeDeploy = ({ exec }) =>
  /**
   *
   * @param {object} input
   * @param {string} input.realm
   * @param {string} input.env
   */
  async ({ realm, env }) => {
    assert(DOMAIN, 'DOMAIN must be defined.')
    assert(SSL_CERTIFICATE_ARN, 'SSL_CERTIFICATE_ARN must be defined.')

    if (!(await isDomainExists({ domainName: DOMAIN || '' }))) {
      throw new Error(`${DOMAIN} does not exist.`)
    }

    const stackName = `si-${realm}-${env}-absorbance`
    await exec([
      'sam',
      'deploy',
      '--no-fail-on-empty-changeset',
      '--template-file',
      require.resolve('../template.yaml'),
      '--stack-name',
      stackName,
      `--parameter-overrides`,
      `DomainName=${DOMAIN}`,
      `AcmCertificateArn=${SSL_CERTIFICATE_ARN}`,
      `Env=${env}`,
      `IsMainCloudfront=${IS_MAIN_CLOUDFRONT === 'true' ? '1' : '0'}`,
    ])

    await exec([
      'aws',
      's3',
      'sync',
      'public/',
      `s3://absorbance-${env}.${DOMAIN}`,
    ])

    await invalidateCloudfront({ stackName })
  }

/**
 *
 * @param {object} input
 * @param {string} input.domainName
 */
async function isDomainExists({ domainName }) {
  const route53 = new Route53()
  const { HostedZones } = await route53
    .listHostedZonesByName({
      DNSName: domainName,
    })
    .promise()

  return some(HostedZones, zone => startsWith(zone.Name, domainName))
}

/**
 *
 * @param {object} input
 * @param {string} input.stackName
 */
async function invalidateCloudfront({ stackName }) {
  const cloudFormation = new CloudFormation()
  const { Stacks: stacks } = await cloudFormation
    .describeStacks({
      StackName: stackName,
    })
    .promise()

  if (!stacks || stacks.length !== 1) {
    throw new Error(`Cannot find stack ${stackName}`)
  }

  const distributionId = keyBy(stacks[0].Outputs, 'OutputKey')
    .CloudfrontDistributionId.OutputValue

  if (!distributionId) {
    throw new Error(`Cannot get distribution ID from stack ${stackName}`)
  }

  const cloudFront = new CloudFront()
  const invalidatingItems = ['/*']

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
    .promise()
}

/**
 *
 * @param {object} input
 * @param {ReturnType<typeof makeExec>} input.exec
 */
const makeUndeploy = ({ exec }) =>
  /**
   *
   * @param {object} input
   * @param {string} input.realm
   * @param {string} input.env
   */
  async ({ realm, env }) => {
    await exec([
      'aws',
      'cloudformation',
      'delete-stack',
      '--stack-name',
      `si-${realm}-${env}-absorbance`,
    ])
  }

module.exports = { makeAws }
