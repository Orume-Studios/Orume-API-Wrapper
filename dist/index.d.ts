import { RequestInit } from "node-fetch";
import { HTTPMethod } from "./typings/method";
export default class OrumeAPI {
    readonly apiURL: string;
    readonly apiKey: string;
    constructor(url: string, apiKey?: string);
    fetchURL(pathURL: string, method: HTTPMethod, init?: RequestInit): Promise<any>;
}
