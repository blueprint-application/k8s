import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiEventsV1EventModel as IoK8sApiEventsV1Event,
  IoK8sApiEventsV1EventListModel as IoK8sApiEventsV1EventList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateEventsV1NamespacedEventParams,
  DeleteEventsV1CollectionNamespacedEventParams,
  DeleteEventsV1NamespacedEventParams,
  ListEventsV1EventForAllNamespacesParams,
  ListEventsV1NamespacedEventParams,
  PatchEventsV1NamespacedEventParams,
  ReadEventsV1NamespacedEventParams,
  ReplaceEventsV1NamespacedEventParams,
  WatchEventsV1EventListForAllNamespacesParams,
  WatchEventsV1NamespacedEventListParams,
  WatchEventsV1NamespacedEventParams,
} from './types';

export class EventsV1Api extends BaseApi {
  async createEventsV1NamespacedEvent(
    params: CreateEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1Event> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events', {
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
    return new IoK8sApiEventsV1Event(result);
  }

  async deleteEventsV1CollectionNamespacedEvent(
    params: DeleteEventsV1CollectionNamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events', {
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

  async deleteEventsV1NamespacedEvent(
    params: DeleteEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}', {
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

  async getEventsV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/');

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

  async listEventsV1EventForAllNamespaces(
    params?: ListEventsV1EventForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1EventList> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/events');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiEventsV1EventList(result);
  }

  async listEventsV1NamespacedEvent(
    params: ListEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1EventList> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events', {
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
    return new IoK8sApiEventsV1EventList(result);
  }

  async patchEventsV1NamespacedEvent(
    params: PatchEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1Event> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiEventsV1Event(result);
  }

  async readEventsV1NamespacedEvent(
    params: ReadEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1Event> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiEventsV1Event(result);
  }

  async replaceEventsV1NamespacedEvent(
    params: ReplaceEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiEventsV1Event> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiEventsV1Event(result);
  }

  async watchEventsV1EventListForAllNamespaces(
    params?: WatchEventsV1EventListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/watch/events');

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

  async watchEventsV1NamespacedEvent(
    params: WatchEventsV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}', {
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

  async watchEventsV1NamespacedEventList(
    params: WatchEventsV1NamespacedEventListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events', {
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

export default EventsV1Api;
