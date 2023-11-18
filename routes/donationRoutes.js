import express from "express";
import mongoose from "mongoose";
import expressAsyncHandler from "express-async-handler";
import Donation from "../model/donationModel.js";

const donationRouter = express.Router();

donationRouter.get('/all', async (req, res) => {
    res.status(200).send(await Donation.find());
});

donationRouter.get('/max-receipt-no', async (req, res) => {
    res.send(await Donation.findOne({}).sort({ receiptNo: -1 }));
});

donationRouter.post(
    "/new",
    expressAsyncHandler(async (req, res) => {
        const receiptNo = req.body.receiptNo;
        const name = req.body.name;
        const address = req.body.address;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;
        const mode = req.body.mode;
        const amount = req.body.amount;
        const panNo = req.body.panNo;
        const eventName = req.body.eventName;
        if (await Donation.create({
            receiptNo: receiptNo,
            name: name,
            address: address,
            phoneNo: phoneNo,
            email: email,
            mode: mode,
            amount: amount,
            panNo: panNo,
            receiptDate: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear(),
            eventName: eventName
        })) {
            const donation = await Donation.find({ receiptNo: receiptNo })
            res.send({ message: "success", donation: donation });
        }
        else {
            res.send({ message: "Some unexpected error occured" });
        }
    })
);

export default donationRouter;