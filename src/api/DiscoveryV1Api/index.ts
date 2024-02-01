import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiDiscoveryV1EndpointSliceModel as IoK8sApiDiscoveryV1EndpointSlice,
  IoK8sApiDiscoveryV1EndpointSliceListModel as IoK8sApiDiscoveryV1EndpointSliceList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateDiscoveryV1NamespacedEndpointSliceParams,
  DeleteDiscoveryV1CollectionNamespacedEndpointSliceParams,
  DeleteDiscoveryV1NamespacedEndpointSliceParams,
  ListDiscoveryV1EndpointSliceForAllNamespacesParams,
  ListDiscoveryV1NamespacedEndpointSliceParams,
  PatchDiscoveryV1NamespacedEndpointSliceParams,
  ReadDiscoveryV1NamespacedEndpointSliceParams,
  ReplaceDiscoveryV1NamespacedEndpointSliceParams,
  WatchDiscoveryV1EndpointSliceListForAllNamespacesParams,
  WatchDiscoveryV1NamespacedEndpointSliceListParams,
  WatchDiscoveryV1NamespacedEndpointSliceParams,
} from './types';

export class DiscoveryV1Api extends BaseApi {
  async createDiscoveryV1NamespacedEndpointSlice(
    params: CreateDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSlice> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices', {
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
    return new IoK8sApiDiscoveryV1EndpointSlice(result);
  }

  async deleteDiscoveryV1CollectionNamespacedEndpointSlice(
    params: DeleteDiscoveryV1CollectionNamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices', {
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

  async deleteDiscoveryV1NamespacedEndpointSlice(
    params: DeleteDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}', {
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

  async getDiscoveryV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/');

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

  async listDiscoveryV1EndpointSliceForAllNamespaces(
    params?: ListDiscoveryV1EndpointSliceForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSliceList> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/endpointslices');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiDiscoveryV1EndpointSliceList(result);
  }

  async listDiscoveryV1NamespacedEndpointSlice(
    params: ListDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSliceList> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices', {
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
    return new IoK8sApiDiscoveryV1EndpointSliceList(result);
  }

  async patchDiscoveryV1NamespacedEndpointSlice(
    params: PatchDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSlice> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}', {
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
    return new IoK8sApiDiscoveryV1EndpointSlice(result);
  }

  async readDiscoveryV1NamespacedEndpointSlice(
    params: ReadDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSlice> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}', {
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
    return new IoK8sApiDiscoveryV1EndpointSlice(result);
  }

  async replaceDiscoveryV1NamespacedEndpointSlice(
    params: ReplaceDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiDiscoveryV1EndpointSlice> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}', {
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
    return new IoK8sApiDiscoveryV1EndpointSlice(result);
  }

  async watchDiscoveryV1EndpointSliceListForAllNamespaces(
    params?: WatchDiscoveryV1EndpointSliceListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/watch/endpointslices');

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

  async watchDiscoveryV1NamespacedEndpointSlice(
    params: WatchDiscoveryV1NamespacedEndpointSliceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices/{name}', {
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

  async watchDiscoveryV1NamespacedEndpointSliceList(
    params: WatchDiscoveryV1NamespacedEndpointSliceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices', {
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

export default DiscoveryV1Api;
