import { TokenId, AccessToken, UserId } from "../types"


let tokensList: Array<AccessToken> = [];


export const insertAccessToken = async (tokenData: AccessToken): Promise<void> => {
   tokensList.push(tokenData)
}

export const updateAccessToken = async (AccessToken: AccessToken): Promise<void> => {
   tokensList = tokensList.map(currAccessToken => {
      if (currAccessToken.id == AccessToken.id) { // Replace the matched one
         return AccessToken
      }
      return currAccessToken
   })
}

export const getAccessTokenById = async (tokenId: TokenId): Promise<AccessToken | null> => {
   const accessToken = tokensList.find(tokenData => tokenData.id === tokenId)

   return accessToken
}

export const getUserAccessTokens = async (userId: UserId) => {
   const userAccessTokens = tokensList
                                 .filter(accessToken => accessToken.userId == userId)
                                 .map(accessToken => {
                                    const idLength = accessToken.id.length // 10
                                    const obscureId = accessToken.id.slice(idLength-4)
                                    
                                    const minimalAccessToken = {
                                       isActive: accessToken.isActive,
                                       lastUsedAt: accessToken.lastUsedAt,
                                       id: obscureId
                                    }

                                    return minimalAccessToken
                                 })
   
   return userAccessTokens
}