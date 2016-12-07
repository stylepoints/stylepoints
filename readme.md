#Deployment#
Note: requires the [AWS command line interface](https://aws.amazon.com/cli/) to be installed and properly configured.  
###Staging###  
Run `./deploy.sh` from projects root directory.  
This will create a build in the `/build` dir and then sync that to [staging s3 bucket](app.staging.stylepoints.com)  
###Production###  
Run `./deploy.sh production` from projects root directory.  
This will create a build in the `/build` dir and then sync that to [production s3 bucket](app.stylepoints.com)  