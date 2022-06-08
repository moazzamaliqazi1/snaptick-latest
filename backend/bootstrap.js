"use strict";

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});

require("./src/global-package");

require("./src/utils");

require("./src/libs");

require("./config/db");

require("./src/server");

require("./bin/www");