const express = require("express");
const router = express.Router();

router.get('/people', (req, res) => {
    res.send('Hello World!')
  })
  
router.get('/planets', (req, res) => {
      res.send('Hello World!')
    })

// const peopleRouter = require()
// router.use('/people',peopleRouter);
// router.use('/planets', planetsRouter);

module.exports = router;