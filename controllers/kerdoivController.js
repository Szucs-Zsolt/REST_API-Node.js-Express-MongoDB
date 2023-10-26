const createKerdoiv = (req, res) => {
    const { minoseg, gyorsasag, ar } = req.body;
    if (!minoseg || !gyorsasag || !ar) {
        res.status(400).json({
            "message": "Hiányzó adat(ok)!"
        });
    }
    if (minoseg < 1 || minoseg > 5 || gyorsasag < 1 || gyorsasag > 5 || ar < 1 || ar > 5) {
        res.status(400).json({
            "message": "Hibás adatok (érvényes érték: 1-5 között))!"
        });
    }
    res.status(200).json({ "message": "createKerdoiv rendben lefutott!!!" });
};

module.exports = { createKerdoiv };
