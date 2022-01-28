export abstract class CustomError extends Error {  
   abstract statusCode: number
   
   constructor (message: string) {
     super(message)

     Error.captureStackTrace(this, this.constructor);
     this.name = this.constructor.name
   }
 }
 