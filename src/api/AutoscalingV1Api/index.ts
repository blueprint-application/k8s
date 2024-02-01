import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAutoscalingV1HorizontalPodAutoscalerModel as IoK8sApiAutoscalingV1HorizontalPodAutoscaler,
  IoK8sApiAutoscalingV1HorizontalPodAutoscalerListModel as IoK8sApiAutoscalingV1HorizontalPodAutoscalerList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerParams,
  DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesParams,
  ListAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  PatchAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
  ReadAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
  ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
  ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
  WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesParams,
  WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListParams,
  WatchAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
} from './types';

export class AutoscalingV1Api extends BaseApi {
  async createAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers', {
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(
    params: DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers', {
      params: params.path,
      required: ['namespace'],
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

  async deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async getAutoscalingV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/autoscaling/v1/');

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

  async listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(
    params?: ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscalerList> {
    const url = this.buildUrl('/apis/autoscaling/v1/horizontalpodautoscalers');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscalerList(result);
  }

  async listAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: ListAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscalerList> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers', {
      params: params.path,
      required: ['namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscalerList(result);
  }

  async patchAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(
    params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async readAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(
    params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(
    params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscaler(result);
  }

  async watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(
    params?: WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v1/watch/horizontalpodautoscalers');

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

  async watchAutoscalingV1NamespacedHorizontalPodAutoscaler(
    params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(
    params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers', {
      params: params.path,
      required: ['namespace'],
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
}

export default AutoscalingV1Api;
