import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionModel as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListModel as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateApiextensionsV1CustomResourceDefinitionParams,
  DeleteApiextensionsV1CollectionCustomResourceDefinitionParams,
  DeleteApiextensionsV1CustomResourceDefinitionParams,
  ListApiextensionsV1CustomResourceDefinitionParams,
  PatchApiextensionsV1CustomResourceDefinitionParams,
  PatchApiextensionsV1CustomResourceDefinitionStatusParams,
  ReadApiextensionsV1CustomResourceDefinitionParams,
  ReadApiextensionsV1CustomResourceDefinitionStatusParams,
  ReplaceApiextensionsV1CustomResourceDefinitionParams,
  ReplaceApiextensionsV1CustomResourceDefinitionStatusParams,
  WatchApiextensionsV1CustomResourceDefinitionListParams,
  WatchApiextensionsV1CustomResourceDefinitionParams,
} from './types';

export class ApiextensionsV1Api extends BaseApi {
  async createApiextensionsV1CustomResourceDefinition(
    params: CreateApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions');

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
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async deleteApiextensionsV1CollectionCustomResourceDefinition(
    params: DeleteApiextensionsV1CollectionCustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async deleteApiextensionsV1CustomResourceDefinition(
    params: DeleteApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async getApiextensionsV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/');

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

  async listApiextensionsV1CustomResourceDefinition(
    params?: ListApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList(result);
  }

  async patchApiextensionsV1CustomResourceDefinition(
    params: PatchApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async patchApiextensionsV1CustomResourceDefinitionStatus(
    params: PatchApiextensionsV1CustomResourceDefinitionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async readApiextensionsV1CustomResourceDefinition(
    params: ReadApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async readApiextensionsV1CustomResourceDefinitionStatus(
    params: ReadApiextensionsV1CustomResourceDefinitionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async replaceApiextensionsV1CustomResourceDefinition(
    params: ReplaceApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async replaceApiextensionsV1CustomResourceDefinitionStatus(
    params: ReplaceApiextensionsV1CustomResourceDefinitionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition(result);
  }

  async watchApiextensionsV1CustomResourceDefinition(
    params: WatchApiextensionsV1CustomResourceDefinitionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }

  async watchApiextensionsV1CustomResourceDefinitionList(
    params?: WatchApiextensionsV1CustomResourceDefinitionListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }
}

export default ApiextensionsV1Api;
