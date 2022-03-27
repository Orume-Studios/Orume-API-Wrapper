import OrumeAPI from ".";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LicenseByKeyData {
}
export default class LicenseAPI {
    private readonly OrumeAPI;
    constructor(OrumeAPI: OrumeAPI);
    getLicenseByKey(key: string): Promise<LicenseByKeyData>;
}
