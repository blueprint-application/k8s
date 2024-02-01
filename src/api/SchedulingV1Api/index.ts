import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiSchedulingV1PriorityClassModel as IoK8sApiSchedulingV1PriorityClass,
  IoK8sApiSchedulingV1PriorityClassListModel as IoK8sApiSchedulingV1PriorityClassList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateSchedulingV1PriorityClassParams,
  DeleteSchedulingV1CollectionPriorityClassParams,
  DeleteSchedulingV1PriorityClassParams,
  ListSchedulingV1PriorityClassParams,
  PatchSchedulingV1PriorityClassParams,
  ReadSchedulingV1PriorityClassParams,
  ReplaceSchedulingV1PriorityClassParams,
  WatchSchedulingV1PriorityClassListParams,
  WatchSchedulingV1PriorityClassParams,
} from './types';

export class SchedulingV1Api extends BaseApi {
  async createSchedulingV1PriorityClass(
    params: CreateSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses');

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
    return new IoK8sApiSchedulingV1PriorityClass(result);
  }

  async deleteSchedulingV1CollectionPriorityClass(
    params: DeleteSchedulingV1CollectionPriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses');

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

  async deleteSchedulingV1PriorityClass(
    params: DeleteSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses/{name}', {
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

  async getSchedulingV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/');

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

  async listSchedulingV1PriorityClass(
    params?: ListSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiSchedulingV1PriorityClassList> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiSchedulingV1PriorityClassList(result);
  }

  async patchSchedulingV1PriorityClass(
    params: PatchSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses/{name}', {
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
    return new IoK8sApiSchedulingV1PriorityClass(result);
  }

  async readSchedulingV1PriorityClass(
    params: ReadSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses/{name}', {
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
    return new IoK8sApiSchedulingV1PriorityClass(result);
  }

  async replaceSchedulingV1PriorityClass(
    params: ReplaceSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/priorityclasses/{name}', {
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
    return new IoK8sApiSchedulingV1PriorityClass(result);
  }

  async watchSchedulingV1PriorityClass(
    params: WatchSchedulingV1PriorityClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/watch/priorityclasses/{name}', {
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

  async watchSchedulingV1PriorityClassList(
    params?: WatchSchedulingV1PriorityClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/scheduling.k8s.io/v1/watch/priorityclasses');

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

export default SchedulingV1Api;
