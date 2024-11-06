// Made by: Daniel
import { DawaResponse } from "../types";

const DAWA_API_URL = "https://api.dataforsyningen.dk/adgangsadresser/autocomplete"

export async function getAddresses(query: string): Promise<DawaResponse> {
    const response = await fetch(`${DAWA_API_URL}?q=${query}`)
    .then(async (res) => await res.json() as DawaResponse);
    return response
}
