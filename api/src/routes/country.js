const { Router } = require('express');
const router = Router();
const { Country, Activity } = require("../db");
require("dotenv").config();
const { API_URL } = process.env;
const { Sequelize, Op } = require("sequelize");
const axios = require("axios");

router.get("/", async (req, res, next) => {
    const { name } = req.query;
    if (!name) {
        try {
            let api = await axios.get(`${API_URL}`);
            // Promise.all([db, api])
            // .then((res) => {
            //     const [database, apiData] = res;
            //     const response = database.concat(apiData.data)
            //     res.send(response);
            // })
            api.data.forEach(async (e) => {
                await Country.findOrCreate({
                    where: {
                        name: e.name,
                        id: e.alpha3Code,
                        flag_image: e.flag,
                        continent: e.region,
                        capital: e.capital,
                        sub_region: e.subregion,
                        area: e.area,
                        population: e.population,
                    }, defaults: {
                        name: e.name
                    }
                })
            })
            let allData = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: {
                        include: ["name", "id"]
                    },
                    through: {
                        attributes: []
                    }
                }
            })
            return res.send(allData);
        } catch (err) {
            next(err);
        }
        console.log("entre a allData")
        console.log(allData);
    } else {
        try {
            let database = await Country.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%`}
                },
                include: {
                    model: Activity,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            console.log("estoy respondiendo bien")
            console.log(database);
            return res.send(database);
        } catch (err) {
            next(err);
            console.log(err);
        }
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    if (id) {
        try {
            Country.findAll({
                where: {id: id},
                include: {
                    model: Activity,
                    attributes: ["name", "id", "difficulty", "duration", "season"],
                    through: {
                        attributes: []
                    }
                }
            })
            .then(resp => res.send(resp));
        } catch (err) {
            next(err);
        }
    //     try {
    //         const countries = await axios.get(`${API_URL}`);
    //         const country = countries.data.find(c => c.alpha3Code == id);
    //         res.json(country);
    //     } catch (err) {
    //         next(err);
    //     }
    // } else {
    //     try {
    //         Country.findAll({
    //             include: {
    //                 model: Activity,
    //                 attributes: ["name"],
    //                 through: {
    //                     attributes: []
    //                 }
    //             }
    //         })
    //         .then(resp => res.send(resp));
    //     } catch (err) {
    //         next(err);
    //     }
    }
})

module.exports = router;