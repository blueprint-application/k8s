import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiCoordinationV1LeaseModel as IoK8sApiCoordinationV1Lease,
  IoK8sApiCoordinationV1LeaseListModel as IoK8sApiCoordinationV1LeaseList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateCoordinationV1NamespacedLeaseParams,
  DeleteCoordinationV1CollectionNamespacedLeaseParams,
  DeleteCoordinationV1NamespacedLeaseParams,
  ListCoordinationV1LeaseForAllNamespacesParams,
  ListCoordinationV1NamespacedLeaseParams,
  PatchCoordinationV1NamespacedLeaseParams,
  ReadCoordinationV1NamespacedLeaseParams,
  ReplaceCoordinationV1NamespacedLeaseParams,
  WatchCoordinationV1LeaseListForAllNamespacesParams,
  WatchCoordinationV1NamespacedLeaseListParams,
  WatchCoordinationV1NamespacedLeaseParams,
} from './types';

export class CoordinationV1Api extends BaseApi {
  async createCoordinationV1NamespacedLease(
    params: CreateCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1Lease> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases', {
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
    return new IoK8sApiCoordinationV1Lease(result);
  }

  async deleteCoordinationV1CollectionNamespacedLease(
    params: DeleteCoordinationV1CollectionNamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases', {
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

  async deleteCoordinationV1NamespacedLease(
    params: DeleteCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}', {
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

  async getCoordinationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/');

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

  async listCoordinationV1LeaseForAllNamespaces(
    params?: ListCoordinationV1LeaseForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1LeaseList> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/leases');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoordinationV1LeaseList(result);
  }

  async listCoordinationV1NamespacedLease(
    params: ListCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1LeaseList> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases', {
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
    return new IoK8sApiCoordinationV1LeaseList(result);
  }

  async patchCoordinationV1NamespacedLease(
    params: PatchCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1Lease> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}', {
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
    return new IoK8sApiCoordinationV1Lease(result);
  }

  async readCoordinationV1NamespacedLease(
    params: ReadCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1Lease> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}', {
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
    return new IoK8sApiCoordinationV1Lease(result);
  }

  async replaceCoordinationV1NamespacedLease(
    params: ReplaceCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoordinationV1Lease> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}', {
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
    return new IoK8sApiCoordinationV1Lease(result);
  }

  async watchCoordinationV1LeaseListForAllNamespaces(
    params?: WatchCoordinationV1LeaseListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/watch/leases');

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

  async watchCoordinationV1NamespacedLease(
    params: WatchCoordinationV1NamespacedLeaseParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases/{name}', {
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

  async watchCoordinationV1NamespacedLeaseList(
    params: WatchCoordinationV1NamespacedLeaseListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases', {
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

export default CoordinationV1Api;
