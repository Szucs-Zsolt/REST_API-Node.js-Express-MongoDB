const express = require("express");
const router = express.Router();
const { createKerdoiv } = require("../controllers/kerdoivController");

//@desc Kitöltött kérdőív beküldése
//@route POST /kerdoiv/bekuldes
//@access public
//TODO Beküldött kérdőív lementése az adatbázisba.
router.post("/bekuldes", createKerdoiv);

module.exports = router;