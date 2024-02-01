import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAutoscalingV2HorizontalPodAutoscalerModel as IoK8sApiAutoscalingV2HorizontalPodAutoscaler,
  IoK8sApiAutoscalingV2HorizontalPodAutoscalerListModel as IoK8sApiAutoscalingV2HorizontalPodAutoscalerList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerParams,
  DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesParams,
  ListAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  PatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
  ReadAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
  ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
  ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
  WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesParams,
  WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListParams,
  WatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
} from './types';

export class AutoscalingV2Api extends BaseApi {
  async createAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: CreateAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async deleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscaler(
    params: DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers', {
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

  async deleteAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
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

  async getAutoscalingV2APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/autoscaling/v2/');

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

  async listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces(
    params?: ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscalerList> {
    const url = this.buildUrl('/apis/autoscaling/v2/horizontalpodautoscalers');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerList(result);
  }

  async listAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: ListAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscalerList> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerList(result);
  }

  async patchAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: PatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async patchAutoscalingV2NamespacedHorizontalPodAutoscalerStatus(
    params: PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async readAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: ReadAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async readAutoscalingV2NamespacedHorizontalPodAutoscalerStatus(
    params: ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async replaceAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async replaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatus(
    params: ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV2HorizontalPodAutoscaler> {
    const url = this.buildUrl('/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status', {
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
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscaler(result);
  }

  async watchAutoscalingV2HorizontalPodAutoscalerListForAllNamespaces(
    params?: WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v2/watch/horizontalpodautoscalers');

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

  async watchAutoscalingV2NamespacedHorizontalPodAutoscaler(
    params: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}', {
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

  async watchAutoscalingV2NamespacedHorizontalPodAutoscalerList(
    params: WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers', {
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

export default AutoscalingV2Api;
