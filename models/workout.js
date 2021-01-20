const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
		type: Date,
		default: Date.now,
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
             duration: Number,
             weight: { 
                type: Number,
                default:0 
                    },
             reps: { 
                type: Number,
                default:0
            },
             sets: { 
                type: Number,
                default:0
            },
             distance: { 
                type: Number,
                default:0 
            },
             Duration: {
                type: Number,
                default:0
            }
        },
    ],
    totalDuration: {
        type: Number,
        default: 0,
    },
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;