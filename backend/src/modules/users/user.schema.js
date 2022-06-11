const { isEmail, isStrongPassword } = validator;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: null,
    },
    user_name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.matches(value, dataConstraint.USERNAME)) {
          throw new Error("From DB Schema -> User Name Not Valid");
        }
      },
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate(value) {
        if (!isEmail(value, { domain_specific_validation: true })) {
          throw new Error("From DB Schema -> Email Format Not Valid");
        }
      }
    },
    password: {
      type: String,
      trim: true,
      default: null,
      validate(value) {
        if (!isStrongPassword(value)) {
          throw new Error("From DB Schema -> Password Not Strong");
        }
      },
    },
    jwt_token: {
      type: String,
      default: null,
    },
    email_verify: {
      type: Boolean,
      default: false
    },
    stripe_customer_id: {
      type: String,
      unique: true,
      default: null
    },
    user_type: {
      type: String,
      required: true,
      enum: ['user', 'admin']
    },
    verification_code: {
      type: String,
      default: null
    },
    expire_date: {
      type: Date,
      trim: true,
      default: null,
    },
    profile_image: {
      type: String,
      default: null
    },
    profile_image_object: {
      type: Object,
      default: null
    },
    bio: {
      type: String,
      default: null
    },
    phone_number: {
      type: String,
      default: null
    },
    phone_info: {
      type: Object,
      default: null
    },
    social: {
      type: Object,
      default: null
    },
    setting: {
      type: Object,
      default: {
        email_visible: true,
        number_visible: true,
        profile_visible: true,
        social_visible: true
      }
    },
    payment_cards: [
      {
        cvc: {
          type: String,
        },
        expiry: {
          type: String,
        },
        name: {
          type: String,
        },
        number: {
          type: String,
        },
        stripe_card_id: {
          type: String
        },
        brand: {
          type: String
        }
      }
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.verifyPassword = (pwd) => {
  return this.password == utils.hash.makeHashValue(pwd);
};

userSchema.methods.getJWTToken = () => {
  const payload = {
    name: this.name,
    email: this.email,
    _id: this._id,
    model: "users",
  };
  return JWT.sign(payload, process.env.JWTSECRET, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });
};

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return _.omit(obj, [
    "password",
    "verification_code",
    "isVerified",
    "expire_date",
  ]);
};

module.exports = mongoose.model("Users", userSchema);
