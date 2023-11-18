import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: String, required: true },
    }
);

const Event = mongoose.model("events", eventSchema);
export default Event;