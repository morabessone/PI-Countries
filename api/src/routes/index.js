const { Router } = require('express');
const country = require("./country");
const activity = require("./activity");
const search = require("./searchAct");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", country);
router.use("/activity", activity);
router.use("/searchActiv", search);

module.exports = router;
