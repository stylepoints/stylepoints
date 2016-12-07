#!/bin/bash

ENV=${1:-staging}
BUILD_DIR=./build

#make sure that awscli is installed exists
command -v aws s3 >/dev/null 2>&1 || { printf >&2 "AWS Command line interface not found. Aborting.\nSee https://aws.amazon.com/cli/ for more information \n"; exit 1; }

case $ENV in
	production) S3_BUCKET='s3://app.stylepoints.com' ;;
 	*) S3_BUCKET='s3://app.staging.stylepoints.com' ;;
esac

#Do preprocessing. Minification etc
echo "creating build in $BUILD_DIR"
#clear the build dir
rm -Rf build
mkdir build

#copy required files to /build
cp index.html $BUILD_DIR/index.html
cp scripts.js $BUILD_DIR/scripts.js
cp bliss.js $BUILD_DIR/bliss.js
cp styles.css $BUILD_DIR/styles.css
cp -r images $BUILD_DIR/

echo "deploying build to $S3_BUCKET"
aws s3  --profile 'stylepoints' sync ./build $S3_BUCKET --delete --exclude 'deploy.sh' --exclude '.DS_Store'
