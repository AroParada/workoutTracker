const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
		type: Date,
		default: Date.now()
    },
    exercises:[
        {
             type: {
                type: String,
				trim: true,
				required: "Please choose a workout type",
             },
             name: {
				type: String,
				trim: true,
                required: "Please enter a workout name",
             },
             duration: { type: Number, },
             weight: { type: Number },
             reps: { type: Number },
             sets: { type: Number },
             distance: { type: Number },
        },
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;