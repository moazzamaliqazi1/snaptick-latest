const { Strategy: JwtStrategy, ExtractJwt } = passportJWT;
const { JWTSECRET } = process.env;
const roleModel = {
  users: models.Users,
};
ExtractJwt.fromBodyField("token");
const opts = { passReqToCallback: true, secretOrKey: JWTSECRET };

module.exports = function () {
  opts.jwtFromRequest = function (request) {
    var token = null;
    if (request.header("authorization")) {
      token = request.header("authorization").trim().split(" ").pop();
    } else if (request.query.jwtToken) {
      token = request.query.jwtToken;
    }
    request.jwtToken = token;
    return token;
  };

  passport.use(
    new JwtStrategy(opts, async (req, jwt_payload, done) => {
      try {
        if (!jwt_payload._id) {
          process.nextTick(function () {
            done({ status: 401, message: messages.InvalidToken }, null);
          });
        } else {
          let customError = {
            message: "Invalid Token",
            status: 401,
          };
          let model = req.roleModel;
          if (jwt_payload.role && !model) {
            model = roleModel[jwt_payload.role];
          }
          else{
            let user = await models.Users.aggregate([
              {
                $match: {
                  _id: mongoose.Types.ObjectId(jwt_payload._id)
                }
              },
              {
                $lookup: {
                  from: "carts",
                  localField: "_id",
                  foreignField: "user_id",
                  as: "carts_data"
                }
              }
            ])
            user = user[0] ? user[0]: null
            user = {
              ...user,
              _doc: user
            }
            user ? done(null, user) : done(customError, false);
          }
        }
      } catch (error) {
        done(error, false);
      }
    })
  );
};



