#!/bin/bash

PACKAGE_PATH=node_modules/@storybook/addon-svelte-csf

BACKUP_FILE=$PACKAGE_PATH/package-backup.json

if [ ! -f "$BACKUP_FILE" ]; then
  cp $PACKAGE_PATH/package.json $PACKAGE_PATH/package-backup.json
fi

sed 's/"dist\/preset.js"/"index.js"/g' $PACKAGE_PATH/package-backup.json > $PACKAGE_PATH/package.json

