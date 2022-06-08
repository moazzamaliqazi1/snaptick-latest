const roleModel = {
  users: models.Users,
};
router.use((req, res, next)=>{
  let isChecked = 0;
  for (let route in roleModel) {
    if (req.path.search(`${route}/`) != -1 && !isChecked) {
      req.roleModel = roleModel[route];
      isChecked = 1;
    }
  }
  if (req.path.search("/login") > -1) {
    next();
  } else {
    if (req.path.search("auth/") > -1 || req.path.search("public/") > -1) {
      next();
      return;
    }
    else {
      passport.authenticate(
        "jwt",
        { session: false },
        (err, user, info)=>{
          if (err || !user) {
            let errMsg = info ? info.message : err.message;
            if (errMsg.toLowerCase() == "jwt expired".toLowerCase()) {
              errMsg = messages.sessionExpiry;
            }
            next(createError(203, errMsg));
          }
          else if (user.jwt_token == null){
            let errMsg = messages.sessionExpiry;
            next(createError(203, errMsg));
          }
          else {
            req.user = user;
            next();
          }
        }
      )(req, res, next);
    }
  }
});
