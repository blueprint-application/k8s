import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAuthenticationV1alpha1SelfSubjectReviewModel as IoK8sApiAuthenticationV1alpha1SelfSubjectReview,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
} from '../../models';
import { BaseApi } from '../base';
import { CreateAuthenticationV1alpha1SelfSubjectReviewParams } from './types';

export class AuthenticationV1alpha1Api extends BaseApi {
  async createAuthenticationV1alpha1SelfSubjectReview(
    params: CreateAuthenticationV1alpha1SelfSubjectReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthenticationV1alpha1SelfSubjectReview> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1alpha1/selfsubjectreviews');

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
    return new IoK8sApiAuthenticationV1alpha1SelfSubjectReview(result);
  }

  async getAuthenticationV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/authentication.k8s.io/v1alpha1/');

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

export default AuthenticationV1alpha1Api;
