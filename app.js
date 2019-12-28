const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// creating node app
const app = express();

// parse body of all request and conver it to json
app.use(bodyParser.json());

// url strings we getting in or passing out do not incontain things like spaces
app.use(bodyParser.urlencoded({ extended: true }));

// allows using cross-origin-requests
app.use(cors());

////////////////////////////////////////////////////////////////////////////////
// compress all responsee bodies
app.use(compression());

if (process.env.NODE_ENV === "production") {
  // serving static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // on request to any route that is not covered
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = app;
