import { AxiosRequestConfig } from 'axios';
import { IoK8sApimachineryPkgApisMetaV1APIGroupListModel as IoK8sApimachineryPkgApisMetaV1APIGroupList } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class ApisApi extends BaseApi {
  async getAPIVersions(options?: Partial<AxiosRequestConfig>): Promise<IoK8sApimachineryPkgApisMetaV1APIGroupList> {
    const url = this.buildUrl('/apis/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1APIGroupList(result);
  }
}

export default ApisApi;
