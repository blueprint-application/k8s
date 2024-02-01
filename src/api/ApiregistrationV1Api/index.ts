import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModel as IoK8sKubeAggregatorPkgApisApiregistrationV1APIService,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListModel as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateApiregistrationV1APIServiceParams,
  DeleteApiregistrationV1APIServiceParams,
  DeleteApiregistrationV1CollectionAPIServiceParams,
  ListApiregistrationV1APIServiceParams,
  PatchApiregistrationV1APIServiceParams,
  PatchApiregistrationV1APIServiceStatusParams,
  ReadApiregistrationV1APIServiceParams,
  ReadApiregistrationV1APIServiceStatusParams,
  ReplaceApiregistrationV1APIServiceParams,
  ReplaceApiregistrationV1APIServiceStatusParams,
  WatchApiregistrationV1APIServiceListParams,
  WatchApiregistrationV1APIServiceParams,
} from './types';

export class ApiregistrationV1Api extends BaseApi {
  async createApiregistrationV1APIService(
    params: CreateApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices');

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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async deleteApiregistrationV1APIService(
    params: DeleteApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}', {
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

  async deleteApiregistrationV1CollectionAPIService(
    params: DeleteApiregistrationV1CollectionAPIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices');

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

  async getApiregistrationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/');

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

  async listApiregistrationV1APIService(
    params?: ListApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList(result);
  }

  async patchApiregistrationV1APIService(
    params: PatchApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async patchApiregistrationV1APIServiceStatus(
    params: PatchApiregistrationV1APIServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}/status', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async readApiregistrationV1APIService(
    params: ReadApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async readApiregistrationV1APIServiceStatus(
    params: ReadApiregistrationV1APIServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}/status', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async replaceApiregistrationV1APIService(
    params: ReplaceApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async replaceApiregistrationV1APIServiceStatus(
    params: ReplaceApiregistrationV1APIServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/apiservices/{name}/status', {
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
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIService(result);
  }

  async watchApiregistrationV1APIService(
    params: WatchApiregistrationV1APIServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/watch/apiservices/{name}', {
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

  async watchApiregistrationV1APIServiceList(
    params?: WatchApiregistrationV1APIServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apiregistration.k8s.io/v1/watch/apiservices');

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

export default ApiregistrationV1Api;
