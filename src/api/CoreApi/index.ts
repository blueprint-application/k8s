import { AxiosRequestConfig } from 'axios';
import { IoK8sApimachineryPkgApisMetaV1APIVersionsModel as IoK8sApimachineryPkgApisMetaV1APIVersions } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class CoreApi extends BaseApi {
  async getCoreAPIVersions(options?: Partial<AxiosRequestConfig>): Promise<IoK8sApimachineryPkgApisMetaV1APIVersions> {
    const url = this.buildUrl('/api/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1APIVersions(result);
  }
}

export default CoreApi;
