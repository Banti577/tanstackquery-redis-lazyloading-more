import dbConnect from "./db";

export async function handler() {

    await dbConnect();

}