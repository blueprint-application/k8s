import { AxiosRequestConfig } from 'axios';
import { IoK8sApimachineryPkgApisMetaV1APIGroupModel as IoK8sApimachineryPkgApisMetaV1APIGroup } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class BatchApi extends BaseApi {
  async getBatchAPIGroup(options?: Partial<AxiosRequestConfig>): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
    const url = this.buildUrl('/apis/batch/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1APIGroup(result);
  }
}

export default BatchApi;
