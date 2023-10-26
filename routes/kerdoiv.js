const express = require("express");
const router = express.Router();

//@desc Kitöltött kérdőív beküldése
//@route POST /kerdoiv/kitoltes
//@access public
//TODO Beküldött kérdőív lementése az adatbázisba.
router.post("/bekuldes", (req, res) => {
    let elegedettseg = req.body.elegedettseg;

    // Hiba: érvénytelen az adat
    if (!elegedettseg || elegedettseg<"1" || elegedettseg >"5") {
        res.status(400).json({
            "message": "Hiányzó, vagy hibás adat (érvényes érték: 1-5 között))!"
        });
    }
    // OK: egyelőre csak visszaküldjük a kapott adatot
    res.status(200).json({
        "message": "TODO Beküldött kérdőív lementése az adatbázisba.",
        "elegedettseg": elegedettseg
    });
});


//@desc Kitöltött kérdőív beküldése
//@route GET /kerdoiv/osszesites
//@access public
//TODO Adatbázisban lévő kérdőívek összesítése.
router.get("/osszesites", (req, res) => {
    res.status(200).send("TODO Adatbázisban lévő kérdőívek összesítése.");
});

module.exports = router;