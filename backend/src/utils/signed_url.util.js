module.exports.signedUrl = (Bucket, Key, expires) => {
    return storage.s3.getSignedUrl("getObject", {
        Key,
        Bucket,
        Expires: expires || 900, // S3 default is 900 seconds (15 minutes)
        ResponseContentType: 'event.params.querystring.contentType',
    });
}
