import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiApiserverinternalV1alpha1StorageVersionModel as IoK8sApiApiserverinternalV1alpha1StorageVersion,
  IoK8sApiApiserverinternalV1alpha1StorageVersionListModel as IoK8sApiApiserverinternalV1alpha1StorageVersionList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateInternalApiserverV1alpha1StorageVersionParams,
  DeleteInternalApiserverV1alpha1CollectionStorageVersionParams,
  DeleteInternalApiserverV1alpha1StorageVersionParams,
  ListInternalApiserverV1alpha1StorageVersionParams,
  PatchInternalApiserverV1alpha1StorageVersionParams,
  PatchInternalApiserverV1alpha1StorageVersionStatusParams,
  ReadInternalApiserverV1alpha1StorageVersionParams,
  ReadInternalApiserverV1alpha1StorageVersionStatusParams,
  ReplaceInternalApiserverV1alpha1StorageVersionParams,
  ReplaceInternalApiserverV1alpha1StorageVersionStatusParams,
  WatchInternalApiserverV1alpha1StorageVersionListParams,
  WatchInternalApiserverV1alpha1StorageVersionParams,
} from './types';

export class InternalApiserverV1alpha1Api extends BaseApi {
  async createInternalApiserverV1alpha1StorageVersion(
    params: CreateInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions');

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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async deleteInternalApiserverV1alpha1CollectionStorageVersion(
    params: DeleteInternalApiserverV1alpha1CollectionStorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions');

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

  async deleteInternalApiserverV1alpha1StorageVersion(
    params: DeleteInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}', {
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

  async getInternalApiserverV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/');

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

  async listInternalApiserverV1alpha1StorageVersion(
    params?: ListInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersionList> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiApiserverinternalV1alpha1StorageVersionList(result);
  }

  async patchInternalApiserverV1alpha1StorageVersion(
    params: PatchInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async patchInternalApiserverV1alpha1StorageVersionStatus(
    params: PatchInternalApiserverV1alpha1StorageVersionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async readInternalApiserverV1alpha1StorageVersion(
    params: ReadInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async readInternalApiserverV1alpha1StorageVersionStatus(
    params: ReadInternalApiserverV1alpha1StorageVersionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async replaceInternalApiserverV1alpha1StorageVersion(
    params: ReplaceInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async replaceInternalApiserverV1alpha1StorageVersionStatus(
    params: ReplaceInternalApiserverV1alpha1StorageVersionStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiApiserverinternalV1alpha1StorageVersion> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status', {
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
    return new IoK8sApiApiserverinternalV1alpha1StorageVersion(result);
  }

  async watchInternalApiserverV1alpha1StorageVersion(
    params: WatchInternalApiserverV1alpha1StorageVersionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions/{name}', {
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

  async watchInternalApiserverV1alpha1StorageVersionList(
    params?: WatchInternalApiserverV1alpha1StorageVersionListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions');

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

export default InternalApiserverV1alpha1Api;
