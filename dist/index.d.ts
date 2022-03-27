import { RequestInit } from "node-fetch";
import { HTTPMethod } from "../typings/method";
import LicenseAPI from "./license";
export default class OrumeAPI {
    readonly apiURL: string;
    readonly apiKey: string;
    readonly license: LicenseAPI;
    constructor(url: string, apiKey?: string);
    _fetchURL(pathURL: string, method: HTTPMethod, init?: RequestInit): Promise<any>;
}
