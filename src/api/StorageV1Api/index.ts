import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiStorageV1CSIDriverModel as IoK8sApiStorageV1CSIDriver,
  IoK8sApiStorageV1CSIDriverListModel as IoK8sApiStorageV1CSIDriverList,
  IoK8sApiStorageV1CSINodeModel as IoK8sApiStorageV1CSINode,
  IoK8sApiStorageV1CSINodeListModel as IoK8sApiStorageV1CSINodeList,
  IoK8sApiStorageV1CSIStorageCapacityModel as IoK8sApiStorageV1CSIStorageCapacity,
  IoK8sApiStorageV1CSIStorageCapacityListModel as IoK8sApiStorageV1CSIStorageCapacityList,
  IoK8sApiStorageV1StorageClassModel as IoK8sApiStorageV1StorageClass,
  IoK8sApiStorageV1StorageClassListModel as IoK8sApiStorageV1StorageClassList,
  IoK8sApiStorageV1VolumeAttachmentModel as IoK8sApiStorageV1VolumeAttachment,
  IoK8sApiStorageV1VolumeAttachmentListModel as IoK8sApiStorageV1VolumeAttachmentList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateStorageV1CSIDriverParams,
  CreateStorageV1CSINodeParams,
  CreateStorageV1NamespacedCSIStorageCapacityParams,
  CreateStorageV1StorageClassParams,
  CreateStorageV1VolumeAttachmentParams,
  DeleteStorageV1CSIDriverParams,
  DeleteStorageV1CSINodeParams,
  DeleteStorageV1CollectionCSIDriverParams,
  DeleteStorageV1CollectionCSINodeParams,
  DeleteStorageV1CollectionNamespacedCSIStorageCapacityParams,
  DeleteStorageV1CollectionStorageClassParams,
  DeleteStorageV1CollectionVolumeAttachmentParams,
  DeleteStorageV1NamespacedCSIStorageCapacityParams,
  DeleteStorageV1StorageClassParams,
  DeleteStorageV1VolumeAttachmentParams,
  ListStorageV1CSIDriverParams,
  ListStorageV1CSINodeParams,
  ListStorageV1CSIStorageCapacityForAllNamespacesParams,
  ListStorageV1NamespacedCSIStorageCapacityParams,
  ListStorageV1StorageClassParams,
  ListStorageV1VolumeAttachmentParams,
  PatchStorageV1CSIDriverParams,
  PatchStorageV1CSINodeParams,
  PatchStorageV1NamespacedCSIStorageCapacityParams,
  PatchStorageV1StorageClassParams,
  PatchStorageV1VolumeAttachmentParams,
  PatchStorageV1VolumeAttachmentStatusParams,
  ReadStorageV1CSIDriverParams,
  ReadStorageV1CSINodeParams,
  ReadStorageV1NamespacedCSIStorageCapacityParams,
  ReadStorageV1StorageClassParams,
  ReadStorageV1VolumeAttachmentParams,
  ReadStorageV1VolumeAttachmentStatusParams,
  ReplaceStorageV1CSIDriverParams,
  ReplaceStorageV1CSINodeParams,
  ReplaceStorageV1NamespacedCSIStorageCapacityParams,
  ReplaceStorageV1StorageClassParams,
  ReplaceStorageV1VolumeAttachmentParams,
  ReplaceStorageV1VolumeAttachmentStatusParams,
  WatchStorageV1CSIDriverListParams,
  WatchStorageV1CSIDriverParams,
  WatchStorageV1CSINodeListParams,
  WatchStorageV1CSINodeParams,
  WatchStorageV1CSIStorageCapacityListForAllNamespacesParams,
  WatchStorageV1NamespacedCSIStorageCapacityListParams,
  WatchStorageV1NamespacedCSIStorageCapacityParams,
  WatchStorageV1StorageClassListParams,
  WatchStorageV1StorageClassParams,
  WatchStorageV1VolumeAttachmentListParams,
  WatchStorageV1VolumeAttachmentParams,
} from './types';

export class StorageV1Api extends BaseApi {
  async createStorageV1CSIDriver(
    params: CreateStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriver> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers');

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
    return new IoK8sApiStorageV1CSIDriver(result);
  }

  async createStorageV1CSINode(
    params: CreateStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINode> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes');

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
    return new IoK8sApiStorageV1CSINode(result);
  }

  async createStorageV1NamespacedCSIStorageCapacity(
    params: CreateStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacity> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities', {
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
    return new IoK8sApiStorageV1CSIStorageCapacity(result);
  }

  async createStorageV1StorageClass(
    params: CreateStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses');

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
    return new IoK8sApiStorageV1StorageClass(result);
  }

  async createStorageV1VolumeAttachment(
    params: CreateStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments');

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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async deleteStorageV1CSIDriver(
    params: DeleteStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriver> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers/{name}', {
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
    return new IoK8sApiStorageV1CSIDriver(result);
  }

  async deleteStorageV1CSINode(
    params: DeleteStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINode> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes/{name}', {
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
    return new IoK8sApiStorageV1CSINode(result);
  }

  async deleteStorageV1CollectionCSIDriver(
    params: DeleteStorageV1CollectionCSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers');

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

  async deleteStorageV1CollectionCSINode(
    params: DeleteStorageV1CollectionCSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes');

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

  async deleteStorageV1CollectionNamespacedCSIStorageCapacity(
    params: DeleteStorageV1CollectionNamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities', {
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

  async deleteStorageV1CollectionStorageClass(
    params: DeleteStorageV1CollectionStorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses');

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

  async deleteStorageV1CollectionVolumeAttachment(
    params: DeleteStorageV1CollectionVolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments');

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

  async deleteStorageV1NamespacedCSIStorageCapacity(
    params: DeleteStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}', {
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

  async deleteStorageV1StorageClass(
    params: DeleteStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses/{name}', {
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
    return new IoK8sApiStorageV1StorageClass(result);
  }

  async deleteStorageV1VolumeAttachment(
    params: DeleteStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async getStorageV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/');

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

  async listStorageV1CSIDriver(
    params?: ListStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriverList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1CSIDriverList(result);
  }

  async listStorageV1CSINode(
    params?: ListStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINodeList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1CSINodeList(result);
  }

  async listStorageV1CSIStorageCapacityForAllNamespaces(
    params?: ListStorageV1CSIStorageCapacityForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacityList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csistoragecapacities');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1CSIStorageCapacityList(result);
  }

  async listStorageV1NamespacedCSIStorageCapacity(
    params: ListStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacityList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities', {
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
    return new IoK8sApiStorageV1CSIStorageCapacityList(result);
  }

  async listStorageV1StorageClass(
    params?: ListStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClassList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1StorageClassList(result);
  }

  async listStorageV1VolumeAttachment(
    params?: ListStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachmentList> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiStorageV1VolumeAttachmentList(result);
  }

  async patchStorageV1CSIDriver(
    params: PatchStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriver> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers/{name}', {
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
    return new IoK8sApiStorageV1CSIDriver(result);
  }

  async patchStorageV1CSINode(
    params: PatchStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINode> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes/{name}', {
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
    return new IoK8sApiStorageV1CSINode(result);
  }

  async patchStorageV1NamespacedCSIStorageCapacity(
    params: PatchStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacity> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}', {
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
    return new IoK8sApiStorageV1CSIStorageCapacity(result);
  }

  async patchStorageV1StorageClass(
    params: PatchStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses/{name}', {
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
    return new IoK8sApiStorageV1StorageClass(result);
  }

  async patchStorageV1VolumeAttachment(
    params: PatchStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async patchStorageV1VolumeAttachmentStatus(
    params: PatchStorageV1VolumeAttachmentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}/status', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async readStorageV1CSIDriver(
    params: ReadStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriver> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers/{name}', {
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
    return new IoK8sApiStorageV1CSIDriver(result);
  }

  async readStorageV1CSINode(
    params: ReadStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINode> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes/{name}', {
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
    return new IoK8sApiStorageV1CSINode(result);
  }

  async readStorageV1NamespacedCSIStorageCapacity(
    params: ReadStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacity> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}', {
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
    return new IoK8sApiStorageV1CSIStorageCapacity(result);
  }

  async readStorageV1StorageClass(
    params: ReadStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses/{name}', {
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
    return new IoK8sApiStorageV1StorageClass(result);
  }

  async readStorageV1VolumeAttachment(
    params: ReadStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async readStorageV1VolumeAttachmentStatus(
    params: ReadStorageV1VolumeAttachmentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}/status', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async replaceStorageV1CSIDriver(
    params: ReplaceStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIDriver> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csidrivers/{name}', {
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
    return new IoK8sApiStorageV1CSIDriver(result);
  }

  async replaceStorageV1CSINode(
    params: ReplaceStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSINode> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/csinodes/{name}', {
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
    return new IoK8sApiStorageV1CSINode(result);
  }

  async replaceStorageV1NamespacedCSIStorageCapacity(
    params: ReplaceStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1CSIStorageCapacity> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}', {
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
    return new IoK8sApiStorageV1CSIStorageCapacity(result);
  }

  async replaceStorageV1StorageClass(
    params: ReplaceStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1StorageClass> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/storageclasses/{name}', {
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
    return new IoK8sApiStorageV1StorageClass(result);
  }

  async replaceStorageV1VolumeAttachment(
    params: ReplaceStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async replaceStorageV1VolumeAttachmentStatus(
    params: ReplaceStorageV1VolumeAttachmentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiStorageV1VolumeAttachment> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/volumeattachments/{name}/status', {
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
    return new IoK8sApiStorageV1VolumeAttachment(result);
  }

  async watchStorageV1CSIDriver(
    params: WatchStorageV1CSIDriverParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/csidrivers/{name}', {
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

  async watchStorageV1CSIDriverList(
    params?: WatchStorageV1CSIDriverListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/csidrivers');

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

  async watchStorageV1CSINode(
    params: WatchStorageV1CSINodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/csinodes/{name}', {
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

  async watchStorageV1CSINodeList(
    params?: WatchStorageV1CSINodeListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/csinodes');

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

  async watchStorageV1CSIStorageCapacityListForAllNamespaces(
    params?: WatchStorageV1CSIStorageCapacityListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/csistoragecapacities');

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

  async watchStorageV1NamespacedCSIStorageCapacity(
    params: WatchStorageV1NamespacedCSIStorageCapacityParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities/{name}', {
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

  async watchStorageV1NamespacedCSIStorageCapacityList(
    params: WatchStorageV1NamespacedCSIStorageCapacityListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities', {
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

  async watchStorageV1StorageClass(
    params: WatchStorageV1StorageClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/storageclasses/{name}', {
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

  async watchStorageV1StorageClassList(
    params?: WatchStorageV1StorageClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/storageclasses');

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

  async watchStorageV1VolumeAttachment(
    params: WatchStorageV1VolumeAttachmentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/volumeattachments/{name}', {
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

  async watchStorageV1VolumeAttachmentList(
    params?: WatchStorageV1VolumeAttachmentListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/storage.k8s.io/v1/watch/volumeattachments');

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

export default StorageV1Api;
