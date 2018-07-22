import boto3
import io
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-west-2:241141206517:DeployPortfolioTopic')
    try:
        s3=boto3.resource('s3')  
        portfolio_bucket = s3.Bucket('portfolio.donshults.work')
        build_bucket = s3.Bucket('portfoliobuild.donshults.work')
        build_bucket.download_file('portfolioBuild.zip','/tmp/portfolioBuild.zip')
        portfolio_zip = io.BytesIO()
        
        build_bucket.download_fileobj('portfolioBuild.zip',portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        
        print("Job Done!")
        topic.publish(Subject='Portfolio Deployed', Message='Portfolio deployed successfully')
    except:
        topic.publish(Subject='Portfolio Deploy Failed', Message='Portfolio was not deployed successfully!')
        raise
    
    
    return 'Hello from Lambda'
