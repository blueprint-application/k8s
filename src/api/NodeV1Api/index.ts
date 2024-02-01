import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiNodeV1RuntimeClassModel as IoK8sApiNodeV1RuntimeClass,
  IoK8sApiNodeV1RuntimeClassListModel as IoK8sApiNodeV1RuntimeClassList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateNodeV1RuntimeClassParams,
  DeleteNodeV1CollectionRuntimeClassParams,
  DeleteNodeV1RuntimeClassParams,
  ListNodeV1RuntimeClassParams,
  PatchNodeV1RuntimeClassParams,
  ReadNodeV1RuntimeClassParams,
  ReplaceNodeV1RuntimeClassParams,
  WatchNodeV1RuntimeClassListParams,
  WatchNodeV1RuntimeClassParams,
} from './types';

export class NodeV1Api extends BaseApi {
  async createNodeV1RuntimeClass(
    params: CreateNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNodeV1RuntimeClass> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses');

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
    return new IoK8sApiNodeV1RuntimeClass(result);
  }

  async deleteNodeV1CollectionRuntimeClass(
    params: DeleteNodeV1CollectionRuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses');

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

  async deleteNodeV1RuntimeClass(
    params: DeleteNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses/{name}', {
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

  async getNodeV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/');

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

  async listNodeV1RuntimeClass(
    params?: ListNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNodeV1RuntimeClassList> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNodeV1RuntimeClassList(result);
  }

  async patchNodeV1RuntimeClass(
    params: PatchNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNodeV1RuntimeClass> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses/{name}', {
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
    return new IoK8sApiNodeV1RuntimeClass(result);
  }

  async readNodeV1RuntimeClass(
    params: ReadNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNodeV1RuntimeClass> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses/{name}', {
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
    return new IoK8sApiNodeV1RuntimeClass(result);
  }

  async replaceNodeV1RuntimeClass(
    params: ReplaceNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNodeV1RuntimeClass> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/runtimeclasses/{name}', {
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
    return new IoK8sApiNodeV1RuntimeClass(result);
  }

  async watchNodeV1RuntimeClass(
    params: WatchNodeV1RuntimeClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/watch/runtimeclasses/{name}', {
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

  async watchNodeV1RuntimeClassList(
    params?: WatchNodeV1RuntimeClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/node.k8s.io/v1/watch/runtimeclasses');

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

export default NodeV1Api;
