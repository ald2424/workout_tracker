const mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    
    exercises: [
                {
                    type: {
                        type: String,
                        trim: true,
                        required: "Type is Required"
                    },
                    
                    name: {
                        type: String,
                        trim: true,
                        required: "Name is Required"
                    },
                    
                    duration: {
                        type: Number,
                        required: "Duration is Required"
                    },
        
                    weight: Number,
                    reps: Number,
                    sets: Number,
                    distance: Number
                }
            ],
              
});


  
  WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

