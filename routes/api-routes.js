const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
console.log(body);
Workout.create(body, (err, data) => {
    if (err) {
        throw err;
    } else {
        res.json(data);
    }
});
});

app.get("/api/workouts", (req, res) => {
  Workout.find({}, 
    (err, data) => {
    if (err) {
        throw err;
    } else {
        return res.json(data);
    }
  });
});

app.get("/api/workouts/range", (req, res) => {
	Workout.find({}, (err, data) => {
		if (err) {
			throw err;
		} else {
			return res.json(data);
		}
	})
		.limit(7)
		.sort({ day: -1 });
});
  
app.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body)
	db.Workout.findByIdAndUpdate(
        { _id: params.id },
        
		{ 
            $push: { exercises: body } 
        },
		(err, data) => {
			if (err) {
				throw err;
			} else {
				res.json(data);
			}
		}
	);
});
  module.exports = router;