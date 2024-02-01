import { AxiosRequestConfig } from 'axios';
import { IoK8sApimachineryPkgVersionInfoModel as IoK8sApimachineryPkgVersionInfo } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class VersionApi extends BaseApi {
  async getCodeVersion(options?: Partial<AxiosRequestConfig>): Promise<IoK8sApimachineryPkgVersionInfo> {
    const url = this.buildUrl('/version/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgVersionInfo(result);
  }
}

export default VersionApi;
