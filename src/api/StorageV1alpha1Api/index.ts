import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiStorageV1alpha1VolumeAttributesClassModel as IoK8sApiStorageV1alpha1VolumeAttributesClass,
  IoK8sApiStorageV1alpha1VolumeAttributesClassListModel as IoK8sApiStorageV1alpha1VolumeAttributesClassList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateStorageV1alpha1VolumeAttributesClassParams,
  DeleteStorageV1alpha1CollectionVolumeAttributesClassParams,
  DeleteStorageV1alpha1VolumeAttributesClassParams,
  ListStorageV1alpha1VolumeAttributesClassParams,
  PatchStorageV1alpha1VolumeAttributesClassParams,
  ReadStorageV1alpha1VolumeAttributesClassParams,
  ReplaceStorageV1alpha1VolumeAttributesClassParams,
  WatchStorageV1alpha1VolumeAttributesClassListParams,
  WatchStorageV1alpha1VolumeAttributesClassParams,
} from './types';

export class StorageV1alpha1Api extends BaseApi {
  async createStorageV1alpha1VolumeAttributesClass(
    params: CreateStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses');

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
    return new IoK8sApiStorageV1alpha1VolumeAttributesClass(result);
  }

  async deleteStorageV1alpha1CollectionVolumeAttributesClass(
    params: DeleteStorageV1alpha1CollectionVolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses');

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

  async deleteStorageV1alpha1VolumeAttributesClass(
    params: DeleteStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}', {
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
    return new IoK8sApiStorageV1alpha1VolumeAttributesClass(result);
  }

  async getStorageV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/');

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

  async listStorageV1alpha1VolumeAttributesClass(
    params?: ListStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClassList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1alpha1VolumeAttributesClassList(result);
  }

  async patchStorageV1alpha1VolumeAttributesClass(
    params: PatchStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}', {
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
    return new IoK8sApiStorageV1alpha1VolumeAttributesClass(result);
  }

  async readStorageV1alpha1VolumeAttributesClass(
    params: ReadStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}', {
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
    return new IoK8sApiStorageV1alpha1VolumeAttributesClass(result);
  }

  async replaceStorageV1alpha1VolumeAttributesClass(
    params: ReplaceStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1alpha1VolumeAttributesClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}', {
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
    return new IoK8sApiStorageV1alpha1VolumeAttributesClass(result);
  }

  async watchStorageV1alpha1VolumeAttributesClass(
    params: WatchStorageV1alpha1VolumeAttributesClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses/{name}', {
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

  async watchStorageV1alpha1VolumeAttributesClassList(
    params?: WatchStorageV1alpha1VolumeAttributesClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses');

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

export default StorageV1alpha1Api;
