import { TokenId, AccessToken, Permissions, UserId } from "../types"
import * as tokenDataAccess from "./token.dataAccess"
import jwt from "jsonwebtoken"
import * as utils from "../utils"
import { NotFoundError } from "../errors/notFoundError"
import { UnAuthorizedError } from "../errors/unAuthorizedError"



// Issue an access Token
export const issueAccessToken = async (userId: UserId, permissions: Permissions) => {
   // Generate token id
   const tokenId = utils.generateRnadomString(10)

   // Build AccessToken
   const accessToken: AccessToken = {
      id: tokenId,
      userId,
      permissions,
      lastUsedAt: null,
      isActive: true
   }

   // Insert AccessToken
   await tokenDataAccess.insertAccessToken(accessToken)

   return tokenId
}


// "Exchange" an AccessToken with signed JWT
export const exchangeTokenWithJWT = async (userId: UserId, tokenId: TokenId) => {
   // validate that it is 
   const accessToken = await tokenDataAccess.getAccessTokenById(tokenId)
   if (!accessToken) {
      throw new NotFoundError("token does not exist")
   }

   // validate that it is belongs to the user
   const isAuthorizedToUseToken = accessToken.userId == userId // maybe the key belongs to a differnt user
   if (!isAuthorizedToUseToken) {
      throw new UnAuthorizedError("unauthorized - this access token is not yours")
   }

   // validate that it is still active
   if (!accessToken.isActive) {
      throw new UnAuthorizedError("unauthorized - access token is not active")
   }

   const AccessTokenToUpdate: AccessToken = {
      ...accessToken,
      lastUsedAt: Date.now() // update lastUsedAt
   }

   await tokenDataAccess.updateAccessToken(AccessTokenToUpdate)


   const JWTPayload = {
      userId: accessToken.userId,
      permissions: accessToken.permissions
   } 

   return jwt.sign(
      JWTPayload, // JWT payload
      process.env.JWT_SECRET // secret
   )
}


// Revoke access Token
export const revokeAccessToken = async (userId: UserId, tokenId: TokenId) => {
   const accessToken = await tokenDataAccess.getAccessTokenById(tokenId)
   if (!accessToken) {
      throw new NotFoundError("token does not exist")
   }

   const isAuthorizedToRevokeToken = accessToken.userId == userId // maybe the key belongs to a differnt user
   if (!isAuthorizedToRevokeToken) {
      throw new UnAuthorizedError("unauthorized - this access token is not yours")
   }


   // Turn isActive to false..
   const revokedAccessToken = {
      ...accessToken,
      isActive: false
   }

   await tokenDataAccess.updateAccessToken(revokedAccessToken)

   return revokedAccessToken
}


// Get user's all access tokens
export const getUserTokens = async (userId: UserId) => {
   const userAccessTokens = await tokenDataAccess.getUserAccessTokens(userId)

   return userAccessTokens
}