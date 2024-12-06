"use server"

// import { connectToDatabase } from "../mongodb";


export async function requestADemoAction(state: any, formData: FormData) {
    // const db = await connectToDatabase();
    console.log(formData);
    return "You have successfully requested for a demo"
}