export type UserId = string;
export type TokenId = string;

export type Permissions = Array<"read" | "write" | "edit">

export interface AccessToken {
   id: TokenId;
   userId: UserId;
   permissions: Permissions;
   lastUsedAt: number;
   isActive: boolean;
}


// Augment type defintions
declare global {
   namespace Express {
      interface Request {
         userId: UserId;
      }
   }
}