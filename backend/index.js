

// Dependencies
const offerRouter = require('./src/routes/offerRouter');
const express = require('express');
const db = require("./src/db/db");
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes');
const patientRouter = require('./src/routes/patientRouter');
const { verifyAccessToken } = require('./src/config/tokenGenerator');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const cookieParser = require('cookie-parser');
require('dotenv').config();



// Environment variables
const PORT = process.env.PORT || 3001;


// Connect the database
db.connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err.message);
  });


const app = express();


const allowedOrigins = ["https://health-care-nine-beta.vercel.app"]; 
app.use(
    cors({
        origin: function (origin, callback) {
            if (
                !origin || 
                allowedOrigins.includes(origin)  
            ) {
                callback(null, true); 
            } else {
                callback(new Error("Not allowed by CORS")); 
            }
        },
        credentials: true, 
        optionsSuccessStatus: 200 
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// user auth routes


app.use("/api/v1/u/", userRouter);
app.use("/api/v1/u/",offerRouter);
app.use("/api/v1/u/",patientRouter);






// Protected route
app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello Im a protected route');
})

// // 404 Not Found middleware
app.use(notFoundMiddleware);

// Error Handling Middleware
app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

