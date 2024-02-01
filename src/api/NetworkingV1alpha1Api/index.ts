import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiNetworkingV1alpha1IPAddressModel as IoK8sApiNetworkingV1alpha1IPAddress,
  IoK8sApiNetworkingV1alpha1IPAddressListModel as IoK8sApiNetworkingV1alpha1IPAddressList,
  IoK8sApiNetworkingV1alpha1ServiceCIDRModel as IoK8sApiNetworkingV1alpha1ServiceCIDR,
  IoK8sApiNetworkingV1alpha1ServiceCIDRListModel as IoK8sApiNetworkingV1alpha1ServiceCIDRList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateNetworkingV1alpha1IPAddressParams,
  CreateNetworkingV1alpha1ServiceCIDRParams,
  DeleteNetworkingV1alpha1CollectionIPAddressParams,
  DeleteNetworkingV1alpha1CollectionServiceCIDRParams,
  DeleteNetworkingV1alpha1IPAddressParams,
  DeleteNetworkingV1alpha1ServiceCIDRParams,
  ListNetworkingV1alpha1IPAddressParams,
  ListNetworkingV1alpha1ServiceCIDRParams,
  PatchNetworkingV1alpha1IPAddressParams,
  PatchNetworkingV1alpha1ServiceCIDRParams,
  PatchNetworkingV1alpha1ServiceCIDRStatusParams,
  ReadNetworkingV1alpha1IPAddressParams,
  ReadNetworkingV1alpha1ServiceCIDRParams,
  ReadNetworkingV1alpha1ServiceCIDRStatusParams,
  ReplaceNetworkingV1alpha1IPAddressParams,
  ReplaceNetworkingV1alpha1ServiceCIDRParams,
  ReplaceNetworkingV1alpha1ServiceCIDRStatusParams,
  WatchNetworkingV1alpha1IPAddressListParams,
  WatchNetworkingV1alpha1IPAddressParams,
  WatchNetworkingV1alpha1ServiceCIDRListParams,
  WatchNetworkingV1alpha1ServiceCIDRParams,
} from './types';

export class NetworkingV1alpha1Api extends BaseApi {
  async createNetworkingV1alpha1IPAddress(
    params: CreateNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1IPAddress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses');

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
    return new IoK8sApiNetworkingV1alpha1IPAddress(result);
  }

  async createNetworkingV1alpha1ServiceCIDR(
    params: CreateNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs');

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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async deleteNetworkingV1alpha1CollectionIPAddress(
    params: DeleteNetworkingV1alpha1CollectionIPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses');

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

  async deleteNetworkingV1alpha1CollectionServiceCIDR(
    params: DeleteNetworkingV1alpha1CollectionServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs');

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

  async deleteNetworkingV1alpha1IPAddress(
    params: DeleteNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses/{name}', {
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

  async deleteNetworkingV1alpha1ServiceCIDR(
    params: DeleteNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}', {
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

  async getNetworkingV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/');

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

  async listNetworkingV1alpha1IPAddress(
    params?: ListNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1IPAddressList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNetworkingV1alpha1IPAddressList(result);
  }

  async listNetworkingV1alpha1ServiceCIDR(
    params?: ListNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDRList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNetworkingV1alpha1ServiceCIDRList(result);
  }

  async patchNetworkingV1alpha1IPAddress(
    params: PatchNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1IPAddress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1IPAddress(result);
  }

  async patchNetworkingV1alpha1ServiceCIDR(
    params: PatchNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async patchNetworkingV1alpha1ServiceCIDRStatus(
    params: PatchNetworkingV1alpha1ServiceCIDRStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}/status', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async readNetworkingV1alpha1IPAddress(
    params: ReadNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1IPAddress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1IPAddress(result);
  }

  async readNetworkingV1alpha1ServiceCIDR(
    params: ReadNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async readNetworkingV1alpha1ServiceCIDRStatus(
    params: ReadNetworkingV1alpha1ServiceCIDRStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}/status', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async replaceNetworkingV1alpha1IPAddress(
    params: ReplaceNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1IPAddress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/ipaddresses/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1IPAddress(result);
  }

  async replaceNetworkingV1alpha1ServiceCIDR(
    params: ReplaceNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async replaceNetworkingV1alpha1ServiceCIDRStatus(
    params: ReplaceNetworkingV1alpha1ServiceCIDRStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1alpha1ServiceCIDR> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/servicecidrs/{name}/status', {
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
    return new IoK8sApiNetworkingV1alpha1ServiceCIDR(result);
  }

  async watchNetworkingV1alpha1IPAddress(
    params: WatchNetworkingV1alpha1IPAddressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/watch/ipaddresses/{name}', {
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

  async watchNetworkingV1alpha1IPAddressList(
    params?: WatchNetworkingV1alpha1IPAddressListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/watch/ipaddresses');

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

  async watchNetworkingV1alpha1ServiceCIDR(
    params: WatchNetworkingV1alpha1ServiceCIDRParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/watch/servicecidrs/{name}', {
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

  async watchNetworkingV1alpha1ServiceCIDRList(
    params?: WatchNetworkingV1alpha1ServiceCIDRListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1alpha1/watch/servicecidrs');

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

export default NetworkingV1alpha1Api;
