"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const license_1 = __importDefault(require("./license"));
class OrumeAPI {
    constructor(url, apiKey) {
        this.apiURL = url;
        this.apiKey = apiKey;
        this.license = new license_1.default(this);
    }
    _fetchURL(pathURL, method, init) {
        return __awaiter(this, void 0, void 0, function* () {
            if (init == undefined) {
                init = {};
            }
            if (init.headers == undefined) {
                init.headers = {};
            }
            if (this.apiKey != undefined) {
                init.headers["Authorization"] = `Bearer ${this.apiKey}`;
            }
            init.headers["User-Agent"] = "Orume Studios/Orume API Wrapper v1";
            init.method = method;
            if (init.body != undefined) {
                init.headers["Content-Type"] = "application/json";
                init.body = JSON.stringify(init.body);
            }
            return yield (0, node_fetch_1.default)(this.apiURL + "/" + pathURL, init);
        });
    }
}
exports.default = OrumeAPI;
