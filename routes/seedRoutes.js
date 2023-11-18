import express from "express";
import data from "../data/data.js";
import User from "../model/userModel.js";
import Donation from "../model/donationModel.js";
import Event from "../model/eventModel.js";

const seedRouter = express.Router();

seedRouter.get('/donations', async (req, res) => {
    await Donation.deleteMany({});
    const createDonations = await Donation.insertMany(data.donations);
    res.send({ createDonations });
});

seedRouter.get('/events', async (req, res) => {
    await Event.deleteMany({});
    const createEvents = await Event.insertMany(data.events);
    res.send({ createEvents });
});

seedRouter.get('/users', async (req, res) => {
    await User.deleteMany({});
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
});

export default seedRouter;