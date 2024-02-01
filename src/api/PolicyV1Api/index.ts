import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiPolicyV1PodDisruptionBudgetModel as IoK8sApiPolicyV1PodDisruptionBudget,
  IoK8sApiPolicyV1PodDisruptionBudgetListModel as IoK8sApiPolicyV1PodDisruptionBudgetList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreatePolicyV1NamespacedPodDisruptionBudgetParams,
  DeletePolicyV1CollectionNamespacedPodDisruptionBudgetParams,
  DeletePolicyV1NamespacedPodDisruptionBudgetParams,
  ListPolicyV1NamespacedPodDisruptionBudgetParams,
  ListPolicyV1PodDisruptionBudgetForAllNamespacesParams,
  PatchPolicyV1NamespacedPodDisruptionBudgetParams,
  PatchPolicyV1NamespacedPodDisruptionBudgetStatusParams,
  ReadPolicyV1NamespacedPodDisruptionBudgetParams,
  ReadPolicyV1NamespacedPodDisruptionBudgetStatusParams,
  ReplacePolicyV1NamespacedPodDisruptionBudgetParams,
  ReplacePolicyV1NamespacedPodDisruptionBudgetStatusParams,
  WatchPolicyV1NamespacedPodDisruptionBudgetListParams,
  WatchPolicyV1NamespacedPodDisruptionBudgetParams,
  WatchPolicyV1PodDisruptionBudgetListForAllNamespacesParams,
} from './types';

export class PolicyV1Api extends BaseApi {
  async createPolicyV1NamespacedPodDisruptionBudget(
    params: CreatePolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async deletePolicyV1CollectionNamespacedPodDisruptionBudget(
    params: DeletePolicyV1CollectionNamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets', {
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

  async deletePolicyV1NamespacedPodDisruptionBudget(
    params: DeletePolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}', {
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

  async getPolicyV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/policy/v1/');

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

  async listPolicyV1NamespacedPodDisruptionBudget(
    params: ListPolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudgetList> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudgetList(result);
  }

  async listPolicyV1PodDisruptionBudgetForAllNamespaces(
    params?: ListPolicyV1PodDisruptionBudgetForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudgetList> {
    const url = this.buildUrl('/apis/policy/v1/poddisruptionbudgets');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiPolicyV1PodDisruptionBudgetList(result);
  }

  async patchPolicyV1NamespacedPodDisruptionBudget(
    params: PatchPolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async patchPolicyV1NamespacedPodDisruptionBudgetStatus(
    params: PatchPolicyV1NamespacedPodDisruptionBudgetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async readPolicyV1NamespacedPodDisruptionBudget(
    params: ReadPolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async readPolicyV1NamespacedPodDisruptionBudgetStatus(
    params: ReadPolicyV1NamespacedPodDisruptionBudgetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async replacePolicyV1NamespacedPodDisruptionBudget(
    params: ReplacePolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async replacePolicyV1NamespacedPodDisruptionBudgetStatus(
    params: ReplacePolicyV1NamespacedPodDisruptionBudgetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1PodDisruptionBudget> {
    const url = this.buildUrl('/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status', {
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
    return new IoK8sApiPolicyV1PodDisruptionBudget(result);
  }

  async watchPolicyV1NamespacedPodDisruptionBudget(
    params: WatchPolicyV1NamespacedPodDisruptionBudgetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}', {
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

  async watchPolicyV1NamespacedPodDisruptionBudgetList(
    params: WatchPolicyV1NamespacedPodDisruptionBudgetListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets', {
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

  async watchPolicyV1PodDisruptionBudgetListForAllNamespaces(
    params?: WatchPolicyV1PodDisruptionBudgetListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/policy/v1/watch/poddisruptionbudgets');

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

export default PolicyV1Api;
