exports.status = (req, res, next) => {
    if(req.user.email_verify){
        next()
    }
    else{
        utils.response.response(res, messages.emailNotVerify, false, 201, null)
    }
};
