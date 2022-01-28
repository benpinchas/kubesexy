import { NextFunction, Request, Response, Router } from "express";
import { Permissions } from "../types";
import { verifyJWT } from "../middlewares/verifyJWT";
import * as tokenService from "./token.service"


const router = Router();

router.post("/", verifyJWT, async (req: Request, res: Response) => {
   const permissions = req.body.permissions as Permissions
   const userId = req.userId

   // Issue token
   const tokenId = await tokenService.issueAccessToken(userId, permissions)
   // Prepare response
   const response = {
      API_TOKEN: tokenId
   }
   // Resolve Success
   res.status(200).send(response)
})

router.post("/authenticate", verifyJWT, async (req: Request, res: Response) => {
   const userId = req.userId
   const tokenId = req.body.API_TOKEN

   // Get signed JWT
   const jwt = await tokenService.exchangeTokenWithJWT(userId, tokenId)
   // Prepare response
   const response = { jwt }
   // Resolve Success
   res.status(200).send(response)
})

router.delete("/:id", verifyJWT, async (req: Request, res: Response) => {
   const token = req.params.id
   const userId = req.userId

   // Revoke token
   await tokenService.revokeAccessToken(userId, token)
   // Resolve Success
   res.status(200).send({ message: "Access Token has been disabled" })
})

router.get("/", verifyJWT, async (req: Request, res: Response) => {
   const userId = req.userId

   // Get tokens
   const userAccessTokens = await tokenService.getUserTokens(userId)
   // Resolve Success
   res.status(200).send(userAccessTokens)
})

export { router as tokenRouter }