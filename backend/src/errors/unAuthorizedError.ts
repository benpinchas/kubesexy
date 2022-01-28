import { CustomError } from "./customError";

export class UnAuthorizedError extends CustomError {
   statusCode = 401;

   constructor(message){
      super(message);

      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name
   }
}