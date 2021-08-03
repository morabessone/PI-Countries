const { Router } = require('express');
const router = Router();
const { Activity } = require("../db");
require("dotenv").config();
const { Sequelize } = require("sequelize");

router.post("/", async (req, res, next) => {
    const { id, name, difficulty, duration, season, countries } = req.body;
    try {
        let activ = await Activity.create({id, name, difficulty, duration, season});
        console.log(activ);
        await activ.setCountries(countries)
    } catch (error) {
        next(error);
    }
    // const { activity } = req.body;
    // try {
    //     let act = await Activity.create({
    //         where: {
    //             id: activity.id,
    //             name: activity.name,
    //             difficulty: activity.difficulty,
    //             duration: activity.duration,
    //             season: activity.season,
    //         }
    //     })
    //     console.log(act);
    //     await act.setCountries(activity.countries)
    //     return res.json(act);
    // } catch (error) {
    //     next(error);
    // }
})

module.exports = router;