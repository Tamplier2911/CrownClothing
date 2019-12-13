// if not in production - import dotenv
// if (process.env.NODE_ENV !== "production") require("dotenv").config();
require("dotenv").config();

// handle uncaught exceptions
process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

const app = require("./app");

// SERVER

// defining port
const port = process.env.PORT || 5000;
// running server
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}/ ...`);
});

// handle unhandled rejections
process.on("unhandledRejection", err => {
  console.log("UNDANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// handle sigterm termination
process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated...");
  });
});
