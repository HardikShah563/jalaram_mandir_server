import express from "express";
import Event from "../model/eventModel.js";

const eventRouter = express.Router();

eventRouter.get('/all', async (req, res) => {
    res.status(200).send(await Event.find());
});

eventRouter.post('/new', async (req, res) => {
    const event = await Event.find({ date: req.body.date });
    if (event.length === 0) {
        if (await Event.create({
            name: req.body.name,
            time: req.body.time,
            date: req.body.date
        })) {
            res.send({ message: "success" });
            return;
        }
        res.send({ message: "Some unexpected error occured. Try again later" });
    }
    else {
        res.send({ message: "Event on this day exists" });
    }
});

export default eventRouter;