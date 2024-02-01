import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiResourceV1alpha2PodSchedulingContextModel as IoK8sApiResourceV1alpha2PodSchedulingContext,
  IoK8sApiResourceV1alpha2PodSchedulingContextListModel as IoK8sApiResourceV1alpha2PodSchedulingContextList,
  IoK8sApiResourceV1alpha2ResourceClaimModel as IoK8sApiResourceV1alpha2ResourceClaim,
  IoK8sApiResourceV1alpha2ResourceClaimListModel as IoK8sApiResourceV1alpha2ResourceClaimList,
  IoK8sApiResourceV1alpha2ResourceClaimTemplateModel as IoK8sApiResourceV1alpha2ResourceClaimTemplate,
  IoK8sApiResourceV1alpha2ResourceClaimTemplateListModel as IoK8sApiResourceV1alpha2ResourceClaimTemplateList,
  IoK8sApiResourceV1alpha2ResourceClassModel as IoK8sApiResourceV1alpha2ResourceClass,
  IoK8sApiResourceV1alpha2ResourceClassListModel as IoK8sApiResourceV1alpha2ResourceClassList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateResourceV1alpha2NamespacedPodSchedulingContextParams,
  CreateResourceV1alpha2NamespacedResourceClaimParams,
  CreateResourceV1alpha2NamespacedResourceClaimTemplateParams,
  CreateResourceV1alpha2ResourceClassParams,
  DeleteResourceV1alpha2CollectionNamespacedPodSchedulingContextParams,
  DeleteResourceV1alpha2CollectionNamespacedResourceClaimParams,
  DeleteResourceV1alpha2CollectionNamespacedResourceClaimTemplateParams,
  DeleteResourceV1alpha2CollectionResourceClassParams,
  DeleteResourceV1alpha2NamespacedPodSchedulingContextParams,
  DeleteResourceV1alpha2NamespacedResourceClaimParams,
  DeleteResourceV1alpha2NamespacedResourceClaimTemplateParams,
  DeleteResourceV1alpha2ResourceClassParams,
  ListResourceV1alpha2NamespacedPodSchedulingContextParams,
  ListResourceV1alpha2NamespacedResourceClaimParams,
  ListResourceV1alpha2NamespacedResourceClaimTemplateParams,
  ListResourceV1alpha2PodSchedulingContextForAllNamespacesParams,
  ListResourceV1alpha2ResourceClaimForAllNamespacesParams,
  ListResourceV1alpha2ResourceClaimTemplateForAllNamespacesParams,
  ListResourceV1alpha2ResourceClassParams,
  PatchResourceV1alpha2NamespacedPodSchedulingContextParams,
  PatchResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
  PatchResourceV1alpha2NamespacedResourceClaimParams,
  PatchResourceV1alpha2NamespacedResourceClaimStatusParams,
  PatchResourceV1alpha2NamespacedResourceClaimTemplateParams,
  PatchResourceV1alpha2ResourceClassParams,
  ReadResourceV1alpha2NamespacedPodSchedulingContextParams,
  ReadResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
  ReadResourceV1alpha2NamespacedResourceClaimParams,
  ReadResourceV1alpha2NamespacedResourceClaimStatusParams,
  ReadResourceV1alpha2NamespacedResourceClaimTemplateParams,
  ReadResourceV1alpha2ResourceClassParams,
  ReplaceResourceV1alpha2NamespacedPodSchedulingContextParams,
  ReplaceResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
  ReplaceResourceV1alpha2NamespacedResourceClaimParams,
  ReplaceResourceV1alpha2NamespacedResourceClaimStatusParams,
  ReplaceResourceV1alpha2NamespacedResourceClaimTemplateParams,
  ReplaceResourceV1alpha2ResourceClassParams,
  WatchResourceV1alpha2NamespacedPodSchedulingContextListParams,
  WatchResourceV1alpha2NamespacedPodSchedulingContextParams,
  WatchResourceV1alpha2NamespacedResourceClaimListParams,
  WatchResourceV1alpha2NamespacedResourceClaimParams,
  WatchResourceV1alpha2NamespacedResourceClaimTemplateListParams,
  WatchResourceV1alpha2NamespacedResourceClaimTemplateParams,
  WatchResourceV1alpha2PodSchedulingContextListForAllNamespacesParams,
  WatchResourceV1alpha2ResourceClaimListForAllNamespacesParams,
  WatchResourceV1alpha2ResourceClaimTemplateListForAllNamespacesParams,
  WatchResourceV1alpha2ResourceClassListParams,
  WatchResourceV1alpha2ResourceClassParams,
} from './types';

export class ResourceV1alpha2Api extends BaseApi {
  async createResourceV1alpha2NamespacedPodSchedulingContext(
    params: CreateResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async createResourceV1alpha2NamespacedResourceClaim(
    params: CreateResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async createResourceV1alpha2NamespacedResourceClaimTemplate(
    params: CreateResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplate> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplate(result);
  }

  async createResourceV1alpha2ResourceClass(
    params: CreateResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClass> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses');

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
    return new IoK8sApiResourceV1alpha2ResourceClass(result);
  }

  async deleteResourceV1alpha2CollectionNamespacedPodSchedulingContext(
    params: DeleteResourceV1alpha2CollectionNamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts', {
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

  async deleteResourceV1alpha2CollectionNamespacedResourceClaim(
    params: DeleteResourceV1alpha2CollectionNamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims', {
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

  async deleteResourceV1alpha2CollectionNamespacedResourceClaimTemplate(
    params: DeleteResourceV1alpha2CollectionNamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates', {
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

  async deleteResourceV1alpha2CollectionResourceClass(
    params: DeleteResourceV1alpha2CollectionResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses');

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

  async deleteResourceV1alpha2NamespacedPodSchedulingContext(
    params: DeleteResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async deleteResourceV1alpha2NamespacedResourceClaim(
    params: DeleteResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async deleteResourceV1alpha2NamespacedResourceClaimTemplate(
    params: DeleteResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplate> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplate(result);
  }

  async deleteResourceV1alpha2ResourceClass(
    params: DeleteResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClass> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClass(result);
  }

  async getResourceV1alpha2APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/');

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

  async listResourceV1alpha2NamespacedPodSchedulingContext(
    params: ListResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContextList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContextList(result);
  }

  async listResourceV1alpha2NamespacedResourceClaim(
    params: ListResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimList(result);
  }

  async listResourceV1alpha2NamespacedResourceClaimTemplate(
    params: ListResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplateList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplateList(result);
  }

  async listResourceV1alpha2PodSchedulingContextForAllNamespaces(
    params?: ListResourceV1alpha2PodSchedulingContextForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContextList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/podschedulingcontexts');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiResourceV1alpha2PodSchedulingContextList(result);
  }

  async listResourceV1alpha2ResourceClaimForAllNamespaces(
    params?: ListResourceV1alpha2ResourceClaimForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclaims');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiResourceV1alpha2ResourceClaimList(result);
  }

  async listResourceV1alpha2ResourceClaimTemplateForAllNamespaces(
    params?: ListResourceV1alpha2ResourceClaimTemplateForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplateList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclaimtemplates');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplateList(result);
  }

  async listResourceV1alpha2ResourceClass(
    params?: ListResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClassList> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiResourceV1alpha2ResourceClassList(result);
  }

  async patchResourceV1alpha2NamespacedPodSchedulingContext(
    params: PatchResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async patchResourceV1alpha2NamespacedPodSchedulingContextStatus(
    params: PatchResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl(
      '/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}/status',
      {
        params: params.path,
        required: ['name', 'namespace'],
      },
    );

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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async patchResourceV1alpha2NamespacedResourceClaim(
    params: PatchResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async patchResourceV1alpha2NamespacedResourceClaimStatus(
    params: PatchResourceV1alpha2NamespacedResourceClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}/status', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async patchResourceV1alpha2NamespacedResourceClaimTemplate(
    params: PatchResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplate> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplate(result);
  }

  async patchResourceV1alpha2ResourceClass(
    params: PatchResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClass> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClass(result);
  }

  async readResourceV1alpha2NamespacedPodSchedulingContext(
    params: ReadResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async readResourceV1alpha2NamespacedPodSchedulingContextStatus(
    params: ReadResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl(
      '/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}/status',
      {
        params: params.path,
        required: ['name', 'namespace'],
      },
    );

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async readResourceV1alpha2NamespacedResourceClaim(
    params: ReadResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async readResourceV1alpha2NamespacedResourceClaimStatus(
    params: ReadResourceV1alpha2NamespacedResourceClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}/status', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async readResourceV1alpha2NamespacedResourceClaimTemplate(
    params: ReadResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplate> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplate(result);
  }

  async readResourceV1alpha2ResourceClass(
    params: ReadResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClass> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClass(result);
  }

  async replaceResourceV1alpha2NamespacedPodSchedulingContext(
    params: ReplaceResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}', {
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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async replaceResourceV1alpha2NamespacedPodSchedulingContextStatus(
    params: ReplaceResourceV1alpha2NamespacedPodSchedulingContextStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2PodSchedulingContext> {
    const url = this.buildUrl(
      '/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/podschedulingcontexts/{name}/status',
      {
        params: params.path,
        required: ['name', 'namespace'],
      },
    );

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
    return new IoK8sApiResourceV1alpha2PodSchedulingContext(result);
  }

  async replaceResourceV1alpha2NamespacedResourceClaim(
    params: ReplaceResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async replaceResourceV1alpha2NamespacedResourceClaimStatus(
    params: ReplaceResourceV1alpha2NamespacedResourceClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaim> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaims/{name}/status', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaim(result);
  }

  async replaceResourceV1alpha2NamespacedResourceClaimTemplate(
    params: ReplaceResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClaimTemplate> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/namespaces/{namespace}/resourceclaimtemplates/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplate(result);
  }

  async replaceResourceV1alpha2ResourceClass(
    params: ReplaceResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiResourceV1alpha2ResourceClass> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/resourceclasses/{name}', {
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
    return new IoK8sApiResourceV1alpha2ResourceClass(result);
  }

  async watchResourceV1alpha2NamespacedPodSchedulingContext(
    params: WatchResourceV1alpha2NamespacedPodSchedulingContextParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl(
      '/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/podschedulingcontexts/{name}',
      {
        params: params.path,
        required: ['name', 'namespace'],
      },
    );

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

  async watchResourceV1alpha2NamespacedPodSchedulingContextList(
    params: WatchResourceV1alpha2NamespacedPodSchedulingContextListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/podschedulingcontexts', {
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

  async watchResourceV1alpha2NamespacedResourceClaim(
    params: WatchResourceV1alpha2NamespacedResourceClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/resourceclaims/{name}', {
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

  async watchResourceV1alpha2NamespacedResourceClaimList(
    params: WatchResourceV1alpha2NamespacedResourceClaimListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/resourceclaims', {
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

  async watchResourceV1alpha2NamespacedResourceClaimTemplate(
    params: WatchResourceV1alpha2NamespacedResourceClaimTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl(
      '/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/resourceclaimtemplates/{name}',
      {
        params: params.path,
        required: ['name', 'namespace'],
      },
    );

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

  async watchResourceV1alpha2NamespacedResourceClaimTemplateList(
    params: WatchResourceV1alpha2NamespacedResourceClaimTemplateListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/namespaces/{namespace}/resourceclaimtemplates', {
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

  async watchResourceV1alpha2PodSchedulingContextListForAllNamespaces(
    params?: WatchResourceV1alpha2PodSchedulingContextListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/podschedulingcontexts');

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

  async watchResourceV1alpha2ResourceClaimListForAllNamespaces(
    params?: WatchResourceV1alpha2ResourceClaimListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/resourceclaims');

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

  async watchResourceV1alpha2ResourceClaimTemplateListForAllNamespaces(
    params?: WatchResourceV1alpha2ResourceClaimTemplateListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/resourceclaimtemplates');

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

  async watchResourceV1alpha2ResourceClass(
    params: WatchResourceV1alpha2ResourceClassParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/resourceclasses/{name}', {
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

  async watchResourceV1alpha2ResourceClassList(
    params?: WatchResourceV1alpha2ResourceClassListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/resource.k8s.io/v1alpha2/watch/resourceclasses');

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

export default ResourceV1alpha2Api;
