const express = require("express");
const router = express.Router();
const { kerdoivBekuldese, kerdoivekLetoltese } = require("../controllers/kerdoivController");

//@desc Kitöltött kérdőív beküldése
//@route POST /kerdoiv/bekuldes
//@access public
//TODO Beküldött kérdőív lementése az adatbázisba.
router.post("/bekuldes", kerdoivBekuldese);
router.get("/letoltes", kerdoivekLetoltese);


module.exports = router;