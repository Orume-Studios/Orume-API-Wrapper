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
  private readonly OrumeAPI: OrumeAPI;

  constructor(OrumeAPI: OrumeAPI) {
    this.OrumeAPI = OrumeAPI;
  }

  public async verifyLicenseKey(key: string): Promise<OrumeAPIData> {
    const response = await this.OrumeAPI._fetchURL(`license/verify/${key}`, "GET");
    return await response.json();
  }
}
