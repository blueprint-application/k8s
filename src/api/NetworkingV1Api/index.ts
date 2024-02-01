import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiNetworkingV1IngressModel as IoK8sApiNetworkingV1Ingress,
  IoK8sApiNetworkingV1IngressClassModel as IoK8sApiNetworkingV1IngressClass,
  IoK8sApiNetworkingV1IngressClassListModel as IoK8sApiNetworkingV1IngressClassList,
  IoK8sApiNetworkingV1IngressListModel as IoK8sApiNetworkingV1IngressList,
  IoK8sApiNetworkingV1NetworkPolicyModel as IoK8sApiNetworkingV1NetworkPolicy,
  IoK8sApiNetworkingV1NetworkPolicyListModel as IoK8sApiNetworkingV1NetworkPolicyList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateNetworkingV1IngressClassParams,
  CreateNetworkingV1NamespacedIngressParams,
  CreateNetworkingV1NamespacedNetworkPolicyParams,
  DeleteNetworkingV1CollectionIngressClassParams,
  DeleteNetworkingV1CollectionNamespacedIngressParams,
  DeleteNetworkingV1CollectionNamespacedNetworkPolicyParams,
  DeleteNetworkingV1IngressClassParams,
  DeleteNetworkingV1NamespacedIngressParams,
  DeleteNetworkingV1NamespacedNetworkPolicyParams,
  ListNetworkingV1IngressClassParams,
  ListNetworkingV1IngressForAllNamespacesParams,
  ListNetworkingV1NamespacedIngressParams,
  ListNetworkingV1NamespacedNetworkPolicyParams,
  ListNetworkingV1NetworkPolicyForAllNamespacesParams,
  PatchNetworkingV1IngressClassParams,
  PatchNetworkingV1NamespacedIngressParams,
  PatchNetworkingV1NamespacedIngressStatusParams,
  PatchNetworkingV1NamespacedNetworkPolicyParams,
  ReadNetworkingV1IngressClassParams,
  ReadNetworkingV1NamespacedIngressParams,
  ReadNetworkingV1NamespacedIngressStatusParams,
  ReadNetworkingV1NamespacedNetworkPolicyParams,
  ReplaceNetworkingV1IngressClassParams,
  ReplaceNetworkingV1NamespacedIngressParams,
  ReplaceNetworkingV1NamespacedIngressStatusParams,
  ReplaceNetworkingV1NamespacedNetworkPolicyParams,
  WatchNetworkingV1IngressClassListParams,
  WatchNetworkingV1IngressClassParams,
  WatchNetworkingV1IngressListForAllNamespacesParams,
  WatchNetworkingV1NamespacedIngressListParams,
  WatchNetworkingV1NamespacedIngressParams,
  WatchNetworkingV1NamespacedNetworkPolicyListParams,
  WatchNetworkingV1NamespacedNetworkPolicyParams,
  WatchNetworkingV1NetworkPolicyListForAllNamespacesParams,
} from './types';

export class NetworkingV1Api extends BaseApi {
  async createNetworkingV1IngressClass(
    params: CreateNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressClass> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses');

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
    return new IoK8sApiNetworkingV1IngressClass(result);
  }

  async createNetworkingV1NamespacedIngress(
    params: CreateNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async createNetworkingV1NamespacedNetworkPolicy(
    params: CreateNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicy> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies', {
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
    return new IoK8sApiNetworkingV1NetworkPolicy(result);
  }

  async deleteNetworkingV1CollectionIngressClass(
    params: DeleteNetworkingV1CollectionIngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses');

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

  async deleteNetworkingV1CollectionNamespacedIngress(
    params: DeleteNetworkingV1CollectionNamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses', {
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

  async deleteNetworkingV1CollectionNamespacedNetworkPolicy(
    params: DeleteNetworkingV1CollectionNamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies', {
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

  async deleteNetworkingV1IngressClass(
    params: DeleteNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses/{name}', {
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

  async deleteNetworkingV1NamespacedIngress(
    params: DeleteNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}', {
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

  async deleteNetworkingV1NamespacedNetworkPolicy(
    params: DeleteNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}', {
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

  async getNetworkingV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/');

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

  async listNetworkingV1IngressClass(
    params?: ListNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressClassList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNetworkingV1IngressClassList(result);
  }

  async listNetworkingV1IngressForAllNamespaces(
    params?: ListNetworkingV1IngressForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingresses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNetworkingV1IngressList(result);
  }

  async listNetworkingV1NamespacedIngress(
    params: ListNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses', {
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
    return new IoK8sApiNetworkingV1IngressList(result);
  }

  async listNetworkingV1NamespacedNetworkPolicy(
    params: ListNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicyList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies', {
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
    return new IoK8sApiNetworkingV1NetworkPolicyList(result);
  }

  async listNetworkingV1NetworkPolicyForAllNamespaces(
    params?: ListNetworkingV1NetworkPolicyForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicyList> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/networkpolicies');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiNetworkingV1NetworkPolicyList(result);
  }

  async patchNetworkingV1IngressClass(
    params: PatchNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressClass> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses/{name}', {
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
    return new IoK8sApiNetworkingV1IngressClass(result);
  }

  async patchNetworkingV1NamespacedIngress(
    params: PatchNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async patchNetworkingV1NamespacedIngressStatus(
    params: PatchNetworkingV1NamespacedIngressStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async patchNetworkingV1NamespacedNetworkPolicy(
    params: PatchNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicy> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}', {
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
    return new IoK8sApiNetworkingV1NetworkPolicy(result);
  }

  async readNetworkingV1IngressClass(
    params: ReadNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressClass> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses/{name}', {
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
    return new IoK8sApiNetworkingV1IngressClass(result);
  }

  async readNetworkingV1NamespacedIngress(
    params: ReadNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async readNetworkingV1NamespacedIngressStatus(
    params: ReadNetworkingV1NamespacedIngressStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async readNetworkingV1NamespacedNetworkPolicy(
    params: ReadNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicy> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}', {
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
    return new IoK8sApiNetworkingV1NetworkPolicy(result);
  }

  async replaceNetworkingV1IngressClass(
    params: ReplaceNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1IngressClass> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/ingressclasses/{name}', {
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
    return new IoK8sApiNetworkingV1IngressClass(result);
  }

  async replaceNetworkingV1NamespacedIngress(
    params: ReplaceNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async replaceNetworkingV1NamespacedIngressStatus(
    params: ReplaceNetworkingV1NamespacedIngressStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1Ingress> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status', {
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
    return new IoK8sApiNetworkingV1Ingress(result);
  }

  async replaceNetworkingV1NamespacedNetworkPolicy(
    params: ReplaceNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiNetworkingV1NetworkPolicy> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}', {
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
    return new IoK8sApiNetworkingV1NetworkPolicy(result);
  }

  async watchNetworkingV1IngressClass(
    params: WatchNetworkingV1IngressClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/ingressclasses/{name}', {
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

  async watchNetworkingV1IngressClassList(
    params?: WatchNetworkingV1IngressClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/ingressclasses');

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

  async watchNetworkingV1IngressListForAllNamespaces(
    params?: WatchNetworkingV1IngressListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/ingresses');

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

  async watchNetworkingV1NamespacedIngress(
    params: WatchNetworkingV1NamespacedIngressParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}', {
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

  async watchNetworkingV1NamespacedIngressList(
    params: WatchNetworkingV1NamespacedIngressListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses', {
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

  async watchNetworkingV1NamespacedNetworkPolicy(
    params: WatchNetworkingV1NamespacedNetworkPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}', {
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

  async watchNetworkingV1NamespacedNetworkPolicyList(
    params: WatchNetworkingV1NamespacedNetworkPolicyListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies', {
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

  async watchNetworkingV1NetworkPolicyListForAllNamespaces(
    params?: WatchNetworkingV1NetworkPolicyListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/networking.k8s.io/v1/watch/networkpolicies');

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

export default NetworkingV1Api;
