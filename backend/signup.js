import bcryptjs from 'bcryptjs'
import express from 'express';
import user from './schema.js';
import z from 'zod';

const userLoginSchema = z.object({
   email: z.string().email(),
   password: z.string(),
   name: z.string()
});

export const signup = async (req, res) => {
   try {
      console.log("signup function got called");
      try {
         console.log("inide the try inside the try");
         await userLoginSchema.parseAsync(req.body);
      } catch (e) {
         console.log(e.message);
         return res.status(501).json(e.message);
      }
      const { email, name, password } = req.body;

      const hashedpassword = bcryptjs.hashSync(password, 10);

      const isuser = await user.findOne({ email: email });
      if (isuser) {
         return res.status(409).json("user exists alreadyyy");
      }

      const newuser = new user({ email, password: hashedpassword, name });
      await newuser.save();
      return res.status(200).json("new user is createddd");

   } catch (e) {
      console.log(e.message);
      return res.status(500).json(e.message);
   }
};
