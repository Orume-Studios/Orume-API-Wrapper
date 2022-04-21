import OrumeAPI, { OrumeAPIData } from ".";
export interface LicenseByKeyDefaultData extends OrumeAPIData {
    code: string;
    error: boolean;
    data: {
        features: string[];
        project_authors: string[];
        project_name: string;
    };
}
export default class LicenseAPI {
    private readonly OrumeAPI;
    constructor(OrumeAPI: OrumeAPI);
    getLicenseByKey(key: string): Promise<OrumeAPIData>;
}
