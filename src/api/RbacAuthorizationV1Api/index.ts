import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiRbacV1ClusterRoleModel as IoK8sApiRbacV1ClusterRole,
  IoK8sApiRbacV1ClusterRoleBindingModel as IoK8sApiRbacV1ClusterRoleBinding,
  IoK8sApiRbacV1ClusterRoleBindingListModel as IoK8sApiRbacV1ClusterRoleBindingList,
  IoK8sApiRbacV1ClusterRoleListModel as IoK8sApiRbacV1ClusterRoleList,
  IoK8sApiRbacV1RoleModel as IoK8sApiRbacV1Role,
  IoK8sApiRbacV1RoleBindingModel as IoK8sApiRbacV1RoleBinding,
  IoK8sApiRbacV1RoleBindingListModel as IoK8sApiRbacV1RoleBindingList,
  IoK8sApiRbacV1RoleListModel as IoK8sApiRbacV1RoleList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateRbacAuthorizationV1ClusterRoleBindingParams,
  CreateRbacAuthorizationV1ClusterRoleParams,
  CreateRbacAuthorizationV1NamespacedRoleBindingParams,
  CreateRbacAuthorizationV1NamespacedRoleParams,
  DeleteRbacAuthorizationV1ClusterRoleBindingParams,
  DeleteRbacAuthorizationV1ClusterRoleParams,
  DeleteRbacAuthorizationV1CollectionClusterRoleBindingParams,
  DeleteRbacAuthorizationV1CollectionClusterRoleParams,
  DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingParams,
  DeleteRbacAuthorizationV1CollectionNamespacedRoleParams,
  DeleteRbacAuthorizationV1NamespacedRoleBindingParams,
  DeleteRbacAuthorizationV1NamespacedRoleParams,
  ListRbacAuthorizationV1ClusterRoleBindingParams,
  ListRbacAuthorizationV1ClusterRoleParams,
  ListRbacAuthorizationV1NamespacedRoleBindingParams,
  ListRbacAuthorizationV1NamespacedRoleParams,
  ListRbacAuthorizationV1RoleBindingForAllNamespacesParams,
  ListRbacAuthorizationV1RoleForAllNamespacesParams,
  PatchRbacAuthorizationV1ClusterRoleBindingParams,
  PatchRbacAuthorizationV1ClusterRoleParams,
  PatchRbacAuthorizationV1NamespacedRoleBindingParams,
  PatchRbacAuthorizationV1NamespacedRoleParams,
  ReadRbacAuthorizationV1ClusterRoleBindingParams,
  ReadRbacAuthorizationV1ClusterRoleParams,
  ReadRbacAuthorizationV1NamespacedRoleBindingParams,
  ReadRbacAuthorizationV1NamespacedRoleParams,
  ReplaceRbacAuthorizationV1ClusterRoleBindingParams,
  ReplaceRbacAuthorizationV1ClusterRoleParams,
  ReplaceRbacAuthorizationV1NamespacedRoleBindingParams,
  ReplaceRbacAuthorizationV1NamespacedRoleParams,
  WatchRbacAuthorizationV1ClusterRoleBindingListParams,
  WatchRbacAuthorizationV1ClusterRoleBindingParams,
  WatchRbacAuthorizationV1ClusterRoleListParams,
  WatchRbacAuthorizationV1ClusterRoleParams,
  WatchRbacAuthorizationV1NamespacedRoleBindingListParams,
  WatchRbacAuthorizationV1NamespacedRoleBindingParams,
  WatchRbacAuthorizationV1NamespacedRoleListParams,
  WatchRbacAuthorizationV1NamespacedRoleParams,
  WatchRbacAuthorizationV1RoleBindingListForAllNamespacesParams,
  WatchRbacAuthorizationV1RoleListForAllNamespacesParams,
} from './types';

export class RbacAuthorizationV1Api extends BaseApi {
  async createRbacAuthorizationV1ClusterRole(
    params: CreateRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRole> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles');

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
    return new IoK8sApiRbacV1ClusterRole(result);
  }

  async createRbacAuthorizationV1ClusterRoleBinding(
    params: CreateRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings');

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
    return new IoK8sApiRbacV1ClusterRoleBinding(result);
  }

  async createRbacAuthorizationV1NamespacedRole(
    params: CreateRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1Role> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles', {
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
    return new IoK8sApiRbacV1Role(result);
  }

  async createRbacAuthorizationV1NamespacedRoleBinding(
    params: CreateRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings', {
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
    return new IoK8sApiRbacV1RoleBinding(result);
  }

  async deleteRbacAuthorizationV1ClusterRole(
    params: DeleteRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}', {
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

  async deleteRbacAuthorizationV1ClusterRoleBinding(
    params: DeleteRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}', {
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

  async deleteRbacAuthorizationV1CollectionClusterRole(
    params: DeleteRbacAuthorizationV1CollectionClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles');

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

  async deleteRbacAuthorizationV1CollectionClusterRoleBinding(
    params: DeleteRbacAuthorizationV1CollectionClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings');

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

  async deleteRbacAuthorizationV1CollectionNamespacedRole(
    params: DeleteRbacAuthorizationV1CollectionNamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles', {
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

  async deleteRbacAuthorizationV1CollectionNamespacedRoleBinding(
    params: DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings', {
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

  async deleteRbacAuthorizationV1NamespacedRole(
    params: DeleteRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}', {
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

  async deleteRbacAuthorizationV1NamespacedRoleBinding(
    params: DeleteRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}', {
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

  async getRbacAuthorizationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/');

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

  async listRbacAuthorizationV1ClusterRole(
    params?: ListRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiRbacV1ClusterRoleList(result);
  }

  async listRbacAuthorizationV1ClusterRoleBinding(
    params?: ListRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleBindingList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiRbacV1ClusterRoleBindingList(result);
  }

  async listRbacAuthorizationV1NamespacedRole(
    params: ListRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles', {
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
    return new IoK8sApiRbacV1RoleList(result);
  }

  async listRbacAuthorizationV1NamespacedRoleBinding(
    params: ListRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBindingList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings', {
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
    return new IoK8sApiRbacV1RoleBindingList(result);
  }

  async listRbacAuthorizationV1RoleBindingForAllNamespaces(
    params?: ListRbacAuthorizationV1RoleBindingForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBindingList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/rolebindings');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiRbacV1RoleBindingList(result);
  }

  async listRbacAuthorizationV1RoleForAllNamespaces(
    params?: ListRbacAuthorizationV1RoleForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleList> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/roles');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiRbacV1RoleList(result);
  }

  async patchRbacAuthorizationV1ClusterRole(
    params: PatchRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRole> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}', {
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
    return new IoK8sApiRbacV1ClusterRole(result);
  }

  async patchRbacAuthorizationV1ClusterRoleBinding(
    params: PatchRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}', {
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
    return new IoK8sApiRbacV1ClusterRoleBinding(result);
  }

  async patchRbacAuthorizationV1NamespacedRole(
    params: PatchRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1Role> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}', {
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
    return new IoK8sApiRbacV1Role(result);
  }

  async patchRbacAuthorizationV1NamespacedRoleBinding(
    params: PatchRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}', {
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
    return new IoK8sApiRbacV1RoleBinding(result);
  }

  async readRbacAuthorizationV1ClusterRole(
    params: ReadRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRole> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}', {
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
    return new IoK8sApiRbacV1ClusterRole(result);
  }

  async readRbacAuthorizationV1ClusterRoleBinding(
    params: ReadRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}', {
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
    return new IoK8sApiRbacV1ClusterRoleBinding(result);
  }

  async readRbacAuthorizationV1NamespacedRole(
    params: ReadRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1Role> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}', {
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
    return new IoK8sApiRbacV1Role(result);
  }

  async readRbacAuthorizationV1NamespacedRoleBinding(
    params: ReadRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}', {
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
    return new IoK8sApiRbacV1RoleBinding(result);
  }

  async replaceRbacAuthorizationV1ClusterRole(
    params: ReplaceRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRole> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}', {
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
    return new IoK8sApiRbacV1ClusterRole(result);
  }

  async replaceRbacAuthorizationV1ClusterRoleBinding(
    params: ReplaceRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1ClusterRoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}', {
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
    return new IoK8sApiRbacV1ClusterRoleBinding(result);
  }

  async replaceRbacAuthorizationV1NamespacedRole(
    params: ReplaceRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1Role> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}', {
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
    return new IoK8sApiRbacV1Role(result);
  }

  async replaceRbacAuthorizationV1NamespacedRoleBinding(
    params: ReplaceRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiRbacV1RoleBinding> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}', {
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
    return new IoK8sApiRbacV1RoleBinding(result);
  }

  async watchRbacAuthorizationV1ClusterRole(
    params: WatchRbacAuthorizationV1ClusterRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/{name}', {
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

  async watchRbacAuthorizationV1ClusterRoleBinding(
    params: WatchRbacAuthorizationV1ClusterRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/{name}', {
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

  async watchRbacAuthorizationV1ClusterRoleBindingList(
    params?: WatchRbacAuthorizationV1ClusterRoleBindingListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings');

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

  async watchRbacAuthorizationV1ClusterRoleList(
    params?: WatchRbacAuthorizationV1ClusterRoleListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles');

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

  async watchRbacAuthorizationV1NamespacedRole(
    params: WatchRbacAuthorizationV1NamespacedRoleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles/{name}', {
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

  async watchRbacAuthorizationV1NamespacedRoleBinding(
    params: WatchRbacAuthorizationV1NamespacedRoleBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings/{name}', {
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

  async watchRbacAuthorizationV1NamespacedRoleBindingList(
    params: WatchRbacAuthorizationV1NamespacedRoleBindingListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings', {
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

  async watchRbacAuthorizationV1NamespacedRoleList(
    params: WatchRbacAuthorizationV1NamespacedRoleListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles', {
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

  async watchRbacAuthorizationV1RoleBindingListForAllNamespaces(
    params?: WatchRbacAuthorizationV1RoleBindingListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/rolebindings');

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

  async watchRbacAuthorizationV1RoleListForAllNamespaces(
    params?: WatchRbacAuthorizationV1RoleListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/rbac.authorization.k8s.io/v1/watch/roles');

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

export default RbacAuthorizationV1Api;
