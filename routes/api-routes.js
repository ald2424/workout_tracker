var express = require("express");
var router = express.Router();

const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    })
})

router.put("/api/workouts/:id", function(req, res){
    Workout.findByIdAndUpdate(req.params.id, {$push:{ exercises: req.body}})
    .then(results => {
        res.json(results);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;