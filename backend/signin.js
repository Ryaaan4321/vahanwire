import express from 'express';
import user from './schema.js';
import bcryptjs from 'bcryptjs';
import { z } from 'zod';

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const signin = async (req, res) => {
    console.log("req body = ", req.body);
    try {
        try {
            console.log("inide the try inside the try");
            await userLoginSchema.parseAsync(req.body);
        } catch (e) {
            console.log(e.message);
            return res.status(501).json(e.message);
        }
        const { email, password } = req.body;

        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(404).json("user not found");
        }
        const isPasswordCorrect = bcryptjs.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json("invalid credentails");
        }
        return res.status(200).json("user is logged in");

    } catch (e) {
        console.log(e.message);
        return res.status(400).json(e.message || "Not authorized");
    }
};
