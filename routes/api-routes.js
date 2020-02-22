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
    console.log("**************************** Router.Put***********************************************")
    console.log(req.body);
    console.log("****************************")
    Workout.findByIdAndUpdate(req.params.id, {$push:{ exercises: [req.body]}})
    .then(results => {
        res.json(results);
    })
    .catch(err => {
        res.json(err);
    })
})

// create a workout
router.post("/api/workouts", ({body}, res) =>{
    console.log("**************************** router.post ***********************************************")
    console.log({body});
    console.log("****************************")
    Workout.create({body})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    })
} )

module.exports = router;