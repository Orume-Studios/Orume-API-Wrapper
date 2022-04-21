import OrumeAPI, { OrumeAPIData } from ".";
export interface LicenseByKeyDefaultData extends OrumeAPIData {
    code: string;
    error: boolean;
    data: {
        project_authors: string[];
        project_name: string;
        project_version: string;
        features: string[];
        featuresLimit: [featureName: number];
    };
}
export default class LicenseAPI {
    private readonly OrumeAPI;
    constructor(OrumeAPI: OrumeAPI);
    getLicenseByKey(key: string): Promise<OrumeAPIData>;
}
