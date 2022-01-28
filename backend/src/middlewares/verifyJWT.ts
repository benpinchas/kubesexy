import { NextFunction, Request, Response } from "express"

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
   // "Do not implement authentication." :)
   
   // extract userId from decoded jwt..
   // assign user id to the Request object..
   req.userId = "user_101"

   next()
}

