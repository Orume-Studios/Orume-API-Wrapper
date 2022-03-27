import OrumeAPI from ".";
import { JSONBodyRequest } from "../typings/http";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LicenseByKeyResponse extends JSONBodyRequest {
  data: LicenseByKeyDefaultData;
}

export interface LicenseByKeyDefaultData {
  features: string[];
  project_authors: string[];
  project_name: string;
}

export default class LicenseAPI {
  private readonly OrumeAPI: OrumeAPI;

  constructor(OrumeAPI: OrumeAPI) {
    this.OrumeAPI = OrumeAPI;
  }

  public async getLicenseByKey(key: string): Promise<LicenseByKeyResponse | JSONBodyRequest> {
    const response = await this.OrumeAPI._fetchURL(`license/key/${key}`, "GET");
    return await response.json();
  }
}
