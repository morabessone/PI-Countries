const {Router} = require("express");
require("dotenv").config();
const router = Router();
const { Activity } = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const db = await Activity.findAll()
        return res.send(db)
    } catch (err) {
        next(err)
    }
})

module.exports = router;