// Made by: Daniel
import type { SallingResponse } from "../types";
const SALLING_API_URL = "https://api.sallinggroup.com/v1/food-waste/"

export async function getProducts(): Promise<SallingResponse> {
    const response = await fetch(
        `${SALLING_API_URL}?zip=8000`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.REACT_APP_SALLING_GROUP_API_KEY,
            },
        }
    ).then(async (res) => await res.json() as SallingResponse);
    return response
}
