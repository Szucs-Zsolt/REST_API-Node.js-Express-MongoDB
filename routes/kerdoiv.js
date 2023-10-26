const express = require("express");
const router = express.Router();

//@desc Kitöltött kérdőív beküldése
//@route POST /kerdoiv/kitoltes
//@access public
//TODO Beküldött kérdőív lementése az adatbázisba.
router.post("/bekuldes", (req, res)=>{
    res.status(200).send("TODO Beküldött kérdőív lementése az adatbázisba.");
});

//@desc Kitöltött kérdőív beküldése
//@route GET /kerdoiv/osszesites
//@access public
//TODO Adatbázisban lévő kérdőívek összesítése.
router.get("/osszesites", (req, res)=>{
    res.status(200).send("TODO Adatbázisban lévő kérdőívek összesítése.");
});

module.exports = router;