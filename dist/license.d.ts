import OrumeAPI from ".";
import { JSONBodyRequest } from "../typings/http";
export interface LicenseByKeyResponse extends JSONBodyRequest {
    data: LicenseByKeyDefaultData;
}
export interface LicenseByKeyDefaultData {
    features: string[];
    project_authors: string[];
    project_name: string;
}
export default class LicenseAPI {
    private readonly OrumeAPI;
    constructor(OrumeAPI: OrumeAPI);
    getLicenseByKey(key: string): Promise<LicenseByKeyResponse | JSONBodyRequest>;
}
