import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
   statusCode = 404;

   constructor(message){
      super(message);

      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name
   }
}