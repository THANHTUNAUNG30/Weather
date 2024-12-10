import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const api_key ="98327fe1021290dd0fda32792fea0f53";