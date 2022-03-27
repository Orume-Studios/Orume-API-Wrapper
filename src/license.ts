import OrumeAPI from ".";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LicenseByKeyData {}
export default class LicenseAPI {
    private readonly OrumeAPI: OrumeAPI;

    constructor(OrumeAPI: OrumeAPI) {
        this.OrumeAPI = OrumeAPI;
    }

    public async getLicenseByKey(key: string): Promise<LicenseByKeyData> {
        const response = await this.OrumeAPI.fetchURL(`license/key/${key}`, "GET");
        return await response.json();
    }
}