#!/bin/bash

ENV=${1:-staging}
BUILD_DIR=./build

#make sure that awscli is installed exists
command -v aws s3 >/dev/null 2>&1 || { printf >&2 "AWS Command line interface not found. Aborting.\nSee https://aws.amazon.com/cli/ for more information \n"; exit 1; }

case $ENV in
	production) S3_BUCKET='s3://app.stylepoints.com' ;;
 	*) S3_BUCKET='s3://app.staging.stylepoints.com' ;;
esac

#create a build
npm run build-production

echo "deploying build to $S3_BUCKET"
aws s3  --profile 'stylepoints' sync ./build $S3_BUCKET --exclude 'deploy.sh' --exclude '.DS_Store' --delete

# if production, invalidate key files in cloudfront
if [ $ENV = 'production' ]
then
	echo "creating cloudfront invalidations"
	aws configure --profile 'stylepoints' set preview.cloudfront true
	aws cloudfront --profile 'stylepoints' create-invalidation --distribution-id ESLF5DK9C4OE9 \
	  --paths /multiple_choice.js \
			/index.html \
			/article.html
fi
