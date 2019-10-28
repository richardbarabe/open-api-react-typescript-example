#!/usr/bin/env bash

openapi-generator generate -i userApi.yaml -g typescript-fetch -o generated-sources/openapi --additional-properties=\"typescriptThreePlus=true\" 
mkdir -p src/generated/user-api
cp -R generated-sources/openapi/src/* src/generated/user-api
rm -rf generated-sources