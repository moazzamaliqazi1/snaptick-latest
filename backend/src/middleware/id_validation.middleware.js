exports.validateId = (req, res, next) => {
  const { _id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)){
    utils.response.response(res, messages.invalidId, false, 200, null)
  }
  else{
    next();
  }
};
exports.validateIdGetRequest = (req, res, next) => {
  const { _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)){
    utils.response.response(res, messages.invalidId, false, 200, null)
  }
  else{
    next();
  }
};
