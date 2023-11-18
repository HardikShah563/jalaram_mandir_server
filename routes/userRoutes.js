import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../model/userModel.js";

const userRouter = express.Router();

userRouter.post(
    "/login",
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({ message: "success", user: user });
                return;
            }
            res.send({ message: "Incorrect password!" });
        }
        res.send({ message: "Email Does not exist" });
    })
);

export default userRouter;