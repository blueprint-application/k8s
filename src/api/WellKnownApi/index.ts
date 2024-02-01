import { AxiosRequestConfig } from 'axios';
import {} from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class WellKnownApi extends BaseApi {
  async getServiceAccountIssuerOpenIDConfiguration(options?: Partial<AxiosRequestConfig>): Promise<string> {
    const url = this.buildUrl('/.well-known/openid-configuration/');

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
  }
}

export default WellKnownApi;
