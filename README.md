# github-actions-custom-actions
Example from the "GitHub Actions - The Complete Guide" course. Link: https://www.udemy.com/course/github-actions-the-complete-guide/  

## Used Commands
```
nvm use 16.16.0

Inside github-actions-custom-actions/.github/actions/deploy-s3-javascript I had to run:
npm init -y

npm install @actions/core @actions/github @actions/exec
```
## Bucket Policy Example
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::gha-custom-action-hosting-brs/*"
        }
    ]
}
```
