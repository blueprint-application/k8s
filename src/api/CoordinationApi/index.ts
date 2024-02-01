import { AxiosRequestConfig } from 'axios';
import { IoK8sApimachineryPkgApisMetaV1APIGroupModel as IoK8sApimachineryPkgApisMetaV1APIGroup } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class CoordinationApi extends BaseApi {
  async getCoordinationAPIGroup(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
    const url = this.buildUrl('/apis/coordination.k8s.io/');

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

export default CoordinationApi;
