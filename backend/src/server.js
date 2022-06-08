// these are express setting set
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const session = require("express-session");
app.use(session({ secret: "SECRET", resave: false, saveUninitialized: false }));
app.use(passport.initialize());

const staticPath = path.join(__dirname, './static/');
app.use('/static', express.static(staticPath));

const corsOptions = {
  origin: [process.env.FRONTEND_URL, process.env.FRONTEND_LANDING_URL, "http://localhost:3000", "*"],
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
global.messages = require("../config/messages");
global.dataConstraint = require("../config/data_constraints");



require("./services");
require("./middleware");
require("./modules");
require("../config/strategies");

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


// error handler on next(err)
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ status: err.status, is_success: false, message: err.message, data: {} });
});
console.log(`new Date => ${new Date}`)