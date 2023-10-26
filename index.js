const express = require("express");
const dotenv = require("dotenv").config();
const kerdoivRoute = require("./routes/kerdoiv");

const PORT = process.env.SERVER_PORT || 12345;

const app = express();
app.use(express.json());
app.use("/kerdoiv", kerdoivRoute);

app.listen(PORT, () => {
    console.log(`Server port: ${PORT}`);
});