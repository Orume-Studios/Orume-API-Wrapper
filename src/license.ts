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
  private readonly OrumeAPI: OrumeAPI;

  constructor(OrumeAPI: OrumeAPI) {
    this.OrumeAPI = OrumeAPI;
  }

  public async getLicenseByKey(key: string): Promise<OrumeAPIData> {
    const response = await this.OrumeAPI._fetchURL(`license/key/${key}`, "GET");
    return await response.json();
  }
}
