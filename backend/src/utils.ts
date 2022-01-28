import randomstring from "randomstring"

export const generateRnadomString = (length: number) => {
   return randomstring.generate(length);
}