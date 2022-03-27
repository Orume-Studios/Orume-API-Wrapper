import fetch, { RequestInit } from "node-fetch";
import { HTTPMethod } from "../typings/method";

export default class OrumeAPI {
    public readonly apiURL: string;
    public readonly apiKey: string;

    constructor(url: string, apiKey?: string) {
        this.apiURL = url;
        this.apiKey = apiKey;
    }

    async fetchURL(pathURL: string, method: HTTPMethod, init?: RequestInit) {
        if(init == undefined) {
            init = {};
        }
    
        if(init.headers == undefined) {
            init.headers = {};
        }
    
        
        if(this.apiKey != undefined) {
            init.headers["Authorization"] = `Bearer ${this.apiKey}`;
        }
    
        init.headers["User-Agent"] = "Orume Studios/Orume API Wrapper v1"
        init.method = method;
    
    
        if(init.body != undefined) {
            init.headers["Content-Type"] = "application/json"
            init.body = JSON.stringify(init.body);
        }
        
    
        return await fetch(this.apiURL + "/" + pathURL, init);
    }
}