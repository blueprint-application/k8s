import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAuthenticationV1SelfSubjectReviewModel as IoK8sApiAuthenticationV1SelfSubjectReview,
  IoK8sApiAuthenticationV1TokenReviewModel as IoK8sApiAuthenticationV1TokenReview,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
} from '../../models';
import { BaseApi } from '../base';
import { CreateAuthenticationV1SelfSubjectReviewParams, CreateAuthenticationV1TokenReviewParams } from './types';

export class AuthenticationV1Api extends BaseApi {
  async createAuthenticationV1SelfSubjectReview(
    params: CreateAuthenticationV1SelfSubjectReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthenticationV1SelfSubjectReview> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1/selfsubjectreviews');

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
    return new IoK8sApiAuthenticationV1SelfSubjectReview(result);
  }

  async createAuthenticationV1TokenReview(
    params: CreateAuthenticationV1TokenReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthenticationV1TokenReview> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1/tokenreviews');

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
    return new IoK8sApiAuthenticationV1TokenReview(result);
  }

  async getAuthenticationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1/');

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

export default AuthenticationV1Api;
