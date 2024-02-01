import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAuthorizationV1LocalSubjectAccessReviewModel as IoK8sApiAuthorizationV1LocalSubjectAccessReview,
  IoK8sApiAuthorizationV1SelfSubjectAccessReviewModel as IoK8sApiAuthorizationV1SelfSubjectAccessReview,
  IoK8sApiAuthorizationV1SelfSubjectRulesReviewModel as IoK8sApiAuthorizationV1SelfSubjectRulesReview,
  IoK8sApiAuthorizationV1SubjectAccessReviewModel as IoK8sApiAuthorizationV1SubjectAccessReview,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAuthorizationV1NamespacedLocalSubjectAccessReviewParams,
  CreateAuthorizationV1SelfSubjectAccessReviewParams,
  CreateAuthorizationV1SelfSubjectRulesReviewParams,
  CreateAuthorizationV1SubjectAccessReviewParams,
} from './types';

export class AuthorizationV1Api extends BaseApi {
  async createAuthorizationV1NamespacedLocalSubjectAccessReview(
    params: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthorizationV1LocalSubjectAccessReview> {
    const url = this.buildUrl('/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews', {
      params: params.path,
      required: ['namespace'],
    });

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
    return new IoK8sApiAuthorizationV1LocalSubjectAccessReview(result);
  }

  async createAuthorizationV1SelfSubjectAccessReview(
    params: CreateAuthorizationV1SelfSubjectAccessReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthorizationV1SelfSubjectAccessReview> {
    const url = this.buildUrl('/apis/authorization.k8s.io/v1/selfsubjectaccessreviews');

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
    return new IoK8sApiAuthorizationV1SelfSubjectAccessReview(result);
  }

  async createAuthorizationV1SelfSubjectRulesReview(
    params: CreateAuthorizationV1SelfSubjectRulesReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthorizationV1SelfSubjectRulesReview> {
    const url = this.buildUrl('/apis/authorization.k8s.io/v1/selfsubjectrulesreviews');

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
    return new IoK8sApiAuthorizationV1SelfSubjectRulesReview(result);
  }

  async createAuthorizationV1SubjectAccessReview(
    params: CreateAuthorizationV1SubjectAccessReviewParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthorizationV1SubjectAccessReview> {
    const url = this.buildUrl('/apis/authorization.k8s.io/v1/subjectaccessreviews');

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
    return new IoK8sApiAuthorizationV1SubjectAccessReview(result);
  }

  async getAuthorizationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/authorization.k8s.io/v1/');

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

export default AuthorizationV1Api;
