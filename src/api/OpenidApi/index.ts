import { AxiosRequestConfig } from 'axios';
import {} from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class OpenidApi extends BaseApi {
  async getServiceAccountIssuerOpenIDKeyset(options?: Partial<AxiosRequestConfig>): Promise<string> {
    const url = this.buildUrl('/openid/v1/jwks/');

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

export default OpenidApi;
