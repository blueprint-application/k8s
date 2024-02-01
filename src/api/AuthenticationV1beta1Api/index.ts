import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAuthenticationV1beta1SelfSubjectReviewModel as IoK8sApiAuthenticationV1beta1SelfSubjectReview,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
} from '../../models';
import { BaseApi } from '../base';
import { CreateAuthenticationV1beta1SelfSubjectReviewParams } from './types';

export class AuthenticationV1beta1Api extends BaseApi {
  async createAuthenticationV1beta1SelfSubjectReview(
    params: CreateAuthenticationV1beta1SelfSubjectReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthenticationV1beta1SelfSubjectReview> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1beta1/selfsubjectreviews');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAuthenticationV1beta1SelfSubjectReview(result);
  }

  async getAuthenticationV1beta1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1beta1/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1APIResourceList(result);
  }
}

export default AuthenticationV1beta1Api;
