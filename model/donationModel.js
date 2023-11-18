import mongoose from "mongoose";

const donorSchema = mongoose.Schema(
    {
        receiptNo: { type: Number, required: true },
        name: { type: String, required: true },
        address: { type: String, required: true },
        phoneNo: { type: String },
        email: { type: String },
        mode: { type: String, required: true },
        amount: { type: Number, required: true },
        panNo: { type: String },
        receiptDate: { type: String, required: true },
        eventName: { type: String, required: true },
    }
);

const Donation = mongoose.model("donor", donorSchema);
export default Donation;