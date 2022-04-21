import { RequestInit } from "node-fetch";
import LicenseAPI from "./license";
export interface OrumeAPIData {
    code: string;
    error: boolean;
    data: unknown;
}
export declare type HTTPMethod = "GET" | "POST";
export default class OrumeAPI {
    readonly apiURL: string;
    readonly apiKey: string;
    readonly license: LicenseAPI;
    constructor(url: string, apiKey?: string);
    _fetchURL(pathURL: string, method: HTTPMethod, init?: RequestInit): Promise<any>;
}
