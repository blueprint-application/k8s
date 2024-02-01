import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAppsV1ControllerRevisionModel as IoK8sApiAppsV1ControllerRevision,
  IoK8sApiAppsV1ControllerRevisionListModel as IoK8sApiAppsV1ControllerRevisionList,
  IoK8sApiAppsV1DaemonSetModel as IoK8sApiAppsV1DaemonSet,
  IoK8sApiAppsV1DaemonSetListModel as IoK8sApiAppsV1DaemonSetList,
  IoK8sApiAppsV1DeploymentModel as IoK8sApiAppsV1Deployment,
  IoK8sApiAppsV1DeploymentListModel as IoK8sApiAppsV1DeploymentList,
  IoK8sApiAppsV1ReplicaSetModel as IoK8sApiAppsV1ReplicaSet,
  IoK8sApiAppsV1ReplicaSetListModel as IoK8sApiAppsV1ReplicaSetList,
  IoK8sApiAppsV1StatefulSetModel as IoK8sApiAppsV1StatefulSet,
  IoK8sApiAppsV1StatefulSetListModel as IoK8sApiAppsV1StatefulSetList,
  IoK8sApiAutoscalingV1ScaleModel as IoK8sApiAutoscalingV1Scale,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAppsV1NamespacedControllerRevisionParams,
  CreateAppsV1NamespacedDaemonSetParams,
  CreateAppsV1NamespacedDeploymentParams,
  CreateAppsV1NamespacedReplicaSetParams,
  CreateAppsV1NamespacedStatefulSetParams,
  DeleteAppsV1CollectionNamespacedControllerRevisionParams,
  DeleteAppsV1CollectionNamespacedDaemonSetParams,
  DeleteAppsV1CollectionNamespacedDeploymentParams,
  DeleteAppsV1CollectionNamespacedReplicaSetParams,
  DeleteAppsV1CollectionNamespacedStatefulSetParams,
  DeleteAppsV1NamespacedControllerRevisionParams,
  DeleteAppsV1NamespacedDaemonSetParams,
  DeleteAppsV1NamespacedDeploymentParams,
  DeleteAppsV1NamespacedReplicaSetParams,
  DeleteAppsV1NamespacedStatefulSetParams,
  ListAppsV1ControllerRevisionForAllNamespacesParams,
  ListAppsV1DaemonSetForAllNamespacesParams,
  ListAppsV1DeploymentForAllNamespacesParams,
  ListAppsV1NamespacedControllerRevisionParams,
  ListAppsV1NamespacedDaemonSetParams,
  ListAppsV1NamespacedDeploymentParams,
  ListAppsV1NamespacedReplicaSetParams,
  ListAppsV1NamespacedStatefulSetParams,
  ListAppsV1ReplicaSetForAllNamespacesParams,
  ListAppsV1StatefulSetForAllNamespacesParams,
  PatchAppsV1NamespacedControllerRevisionParams,
  PatchAppsV1NamespacedDaemonSetParams,
  PatchAppsV1NamespacedDaemonSetStatusParams,
  PatchAppsV1NamespacedDeploymentParams,
  PatchAppsV1NamespacedDeploymentScaleParams,
  PatchAppsV1NamespacedDeploymentStatusParams,
  PatchAppsV1NamespacedReplicaSetParams,
  PatchAppsV1NamespacedReplicaSetScaleParams,
  PatchAppsV1NamespacedReplicaSetStatusParams,
  PatchAppsV1NamespacedStatefulSetParams,
  PatchAppsV1NamespacedStatefulSetScaleParams,
  PatchAppsV1NamespacedStatefulSetStatusParams,
  ReadAppsV1NamespacedControllerRevisionParams,
  ReadAppsV1NamespacedDaemonSetParams,
  ReadAppsV1NamespacedDaemonSetStatusParams,
  ReadAppsV1NamespacedDeploymentParams,
  ReadAppsV1NamespacedDeploymentScaleParams,
  ReadAppsV1NamespacedDeploymentStatusParams,
  ReadAppsV1NamespacedReplicaSetParams,
  ReadAppsV1NamespacedReplicaSetScaleParams,
  ReadAppsV1NamespacedReplicaSetStatusParams,
  ReadAppsV1NamespacedStatefulSetParams,
  ReadAppsV1NamespacedStatefulSetScaleParams,
  ReadAppsV1NamespacedStatefulSetStatusParams,
  ReplaceAppsV1NamespacedControllerRevisionParams,
  ReplaceAppsV1NamespacedDaemonSetParams,
  ReplaceAppsV1NamespacedDaemonSetStatusParams,
  ReplaceAppsV1NamespacedDeploymentParams,
  ReplaceAppsV1NamespacedDeploymentScaleParams,
  ReplaceAppsV1NamespacedDeploymentStatusParams,
  ReplaceAppsV1NamespacedReplicaSetParams,
  ReplaceAppsV1NamespacedReplicaSetScaleParams,
  ReplaceAppsV1NamespacedReplicaSetStatusParams,
  ReplaceAppsV1NamespacedStatefulSetParams,
  ReplaceAppsV1NamespacedStatefulSetScaleParams,
  ReplaceAppsV1NamespacedStatefulSetStatusParams,
  WatchAppsV1ControllerRevisionListForAllNamespacesParams,
  WatchAppsV1DaemonSetListForAllNamespacesParams,
  WatchAppsV1DeploymentListForAllNamespacesParams,
  WatchAppsV1NamespacedControllerRevisionListParams,
  WatchAppsV1NamespacedControllerRevisionParams,
  WatchAppsV1NamespacedDaemonSetListParams,
  WatchAppsV1NamespacedDaemonSetParams,
  WatchAppsV1NamespacedDeploymentListParams,
  WatchAppsV1NamespacedDeploymentParams,
  WatchAppsV1NamespacedReplicaSetListParams,
  WatchAppsV1NamespacedReplicaSetParams,
  WatchAppsV1NamespacedStatefulSetListParams,
  WatchAppsV1NamespacedStatefulSetParams,
  WatchAppsV1ReplicaSetListForAllNamespacesParams,
  WatchAppsV1StatefulSetListForAllNamespacesParams,
} from './types';

export class AppsV1Api extends BaseApi {
  async createAppsV1NamespacedControllerRevision(
    params: CreateAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions', {
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
    return new IoK8sApiAppsV1ControllerRevision(result);
  }

  async createAppsV1NamespacedDaemonSet(
    params: CreateAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async createAppsV1NamespacedDeployment(
    params: CreateAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async createAppsV1NamespacedReplicaSet(
    params: CreateAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async createAppsV1NamespacedStatefulSet(
    params: CreateAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async deleteAppsV1CollectionNamespacedControllerRevision(
    params: DeleteAppsV1CollectionNamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions', {
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

  async deleteAppsV1CollectionNamespacedDaemonSet(
    params: DeleteAppsV1CollectionNamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets', {
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

  async deleteAppsV1CollectionNamespacedDeployment(
    params: DeleteAppsV1CollectionNamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments', {
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

  async deleteAppsV1CollectionNamespacedReplicaSet(
    params: DeleteAppsV1CollectionNamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets', {
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

  async deleteAppsV1CollectionNamespacedStatefulSet(
    params: DeleteAppsV1CollectionNamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets', {
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

  async deleteAppsV1NamespacedControllerRevision(
    params: DeleteAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}', {
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

  async deleteAppsV1NamespacedDaemonSet(
    params: DeleteAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}', {
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

  async deleteAppsV1NamespacedDeployment(
    params: DeleteAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}', {
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

  async deleteAppsV1NamespacedReplicaSet(
    params: DeleteAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}', {
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

  async deleteAppsV1NamespacedStatefulSet(
    params: DeleteAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}', {
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

  async getAppsV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/apps/v1/');

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

  async listAppsV1ControllerRevisionForAllNamespaces(
    params?: ListAppsV1ControllerRevisionForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevisionList> {
    const url = this.buildUrl('/apis/apps/v1/controllerrevisions');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAppsV1ControllerRevisionList(result);
  }

  async listAppsV1DaemonSetForAllNamespaces(
    params?: ListAppsV1DaemonSetForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSetList> {
    const url = this.buildUrl('/apis/apps/v1/daemonsets');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAppsV1DaemonSetList(result);
  }

  async listAppsV1DeploymentForAllNamespaces(
    params?: ListAppsV1DeploymentForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DeploymentList> {
    const url = this.buildUrl('/apis/apps/v1/deployments');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAppsV1DeploymentList(result);
  }

  async listAppsV1NamespacedControllerRevision(
    params: ListAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevisionList> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions', {
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
    return new IoK8sApiAppsV1ControllerRevisionList(result);
  }

  async listAppsV1NamespacedDaemonSet(
    params: ListAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSetList> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets', {
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
    return new IoK8sApiAppsV1DaemonSetList(result);
  }

  async listAppsV1NamespacedDeployment(
    params: ListAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DeploymentList> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments', {
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
    return new IoK8sApiAppsV1DeploymentList(result);
  }

  async listAppsV1NamespacedReplicaSet(
    params: ListAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSetList> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets', {
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
    return new IoK8sApiAppsV1ReplicaSetList(result);
  }

  async listAppsV1NamespacedStatefulSet(
    params: ListAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSetList> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets', {
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
    return new IoK8sApiAppsV1StatefulSetList(result);
  }

  async listAppsV1ReplicaSetForAllNamespaces(
    params?: ListAppsV1ReplicaSetForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSetList> {
    const url = this.buildUrl('/apis/apps/v1/replicasets');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAppsV1ReplicaSetList(result);
  }

  async listAppsV1StatefulSetForAllNamespaces(
    params?: ListAppsV1StatefulSetForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSetList> {
    const url = this.buildUrl('/apis/apps/v1/statefulsets');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAppsV1StatefulSetList(result);
  }

  async patchAppsV1NamespacedControllerRevision(
    params: PatchAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}', {
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
    return new IoK8sApiAppsV1ControllerRevision(result);
  }

  async patchAppsV1NamespacedDaemonSet(
    params: PatchAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async patchAppsV1NamespacedDaemonSetStatus(
    params: PatchAppsV1NamespacedDaemonSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async patchAppsV1NamespacedDeployment(
    params: PatchAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async patchAppsV1NamespacedDeploymentScale(
    params: PatchAppsV1NamespacedDeploymentScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async patchAppsV1NamespacedDeploymentStatus(
    params: PatchAppsV1NamespacedDeploymentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async patchAppsV1NamespacedReplicaSet(
    params: PatchAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async patchAppsV1NamespacedReplicaSetScale(
    params: PatchAppsV1NamespacedReplicaSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async patchAppsV1NamespacedReplicaSetStatus(
    params: PatchAppsV1NamespacedReplicaSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async patchAppsV1NamespacedStatefulSet(
    params: PatchAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async patchAppsV1NamespacedStatefulSetScale(
    params: PatchAppsV1NamespacedStatefulSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async patchAppsV1NamespacedStatefulSetStatus(
    params: PatchAppsV1NamespacedStatefulSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async readAppsV1NamespacedControllerRevision(
    params: ReadAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}', {
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
    return new IoK8sApiAppsV1ControllerRevision(result);
  }

  async readAppsV1NamespacedDaemonSet(
    params: ReadAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async readAppsV1NamespacedDaemonSetStatus(
    params: ReadAppsV1NamespacedDaemonSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async readAppsV1NamespacedDeployment(
    params: ReadAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async readAppsV1NamespacedDeploymentScale(
    params: ReadAppsV1NamespacedDeploymentScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async readAppsV1NamespacedDeploymentStatus(
    params: ReadAppsV1NamespacedDeploymentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async readAppsV1NamespacedReplicaSet(
    params: ReadAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async readAppsV1NamespacedReplicaSetScale(
    params: ReadAppsV1NamespacedReplicaSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async readAppsV1NamespacedReplicaSetStatus(
    params: ReadAppsV1NamespacedReplicaSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async readAppsV1NamespacedStatefulSet(
    params: ReadAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async readAppsV1NamespacedStatefulSetScale(
    params: ReadAppsV1NamespacedStatefulSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async readAppsV1NamespacedStatefulSetStatus(
    params: ReadAppsV1NamespacedStatefulSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async replaceAppsV1NamespacedControllerRevision(
    params: ReplaceAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ControllerRevision> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}', {
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
    return new IoK8sApiAppsV1ControllerRevision(result);
  }

  async replaceAppsV1NamespacedDaemonSet(
    params: ReplaceAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async replaceAppsV1NamespacedDaemonSetStatus(
    params: ReplaceAppsV1NamespacedDaemonSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1DaemonSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status', {
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
    return new IoK8sApiAppsV1DaemonSet(result);
  }

  async replaceAppsV1NamespacedDeployment(
    params: ReplaceAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async replaceAppsV1NamespacedDeploymentScale(
    params: ReplaceAppsV1NamespacedDeploymentScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async replaceAppsV1NamespacedDeploymentStatus(
    params: ReplaceAppsV1NamespacedDeploymentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1Deployment> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status', {
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
    return new IoK8sApiAppsV1Deployment(result);
  }

  async replaceAppsV1NamespacedReplicaSet(
    params: ReplaceAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async replaceAppsV1NamespacedReplicaSetScale(
    params: ReplaceAppsV1NamespacedReplicaSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async replaceAppsV1NamespacedReplicaSetStatus(
    params: ReplaceAppsV1NamespacedReplicaSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1ReplicaSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status', {
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
    return new IoK8sApiAppsV1ReplicaSet(result);
  }

  async replaceAppsV1NamespacedStatefulSet(
    params: ReplaceAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async replaceAppsV1NamespacedStatefulSetScale(
    params: ReplaceAppsV1NamespacedStatefulSetScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale', {
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
    return new IoK8sApiAutoscalingV1Scale(result);
  }

  async replaceAppsV1NamespacedStatefulSetStatus(
    params: ReplaceAppsV1NamespacedStatefulSetStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAppsV1StatefulSet> {
    const url = this.buildUrl('/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status', {
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
    return new IoK8sApiAppsV1StatefulSet(result);
  }

  async watchAppsV1ControllerRevisionListForAllNamespaces(
    params?: WatchAppsV1ControllerRevisionListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/controllerrevisions');

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

  async watchAppsV1DaemonSetListForAllNamespaces(
    params?: WatchAppsV1DaemonSetListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/daemonsets');

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

  async watchAppsV1DeploymentListForAllNamespaces(
    params?: WatchAppsV1DeploymentListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/deployments');

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

  async watchAppsV1NamespacedControllerRevision(
    params: WatchAppsV1NamespacedControllerRevisionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}', {
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

  async watchAppsV1NamespacedControllerRevisionList(
    params: WatchAppsV1NamespacedControllerRevisionListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions', {
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

  async watchAppsV1NamespacedDaemonSet(
    params: WatchAppsV1NamespacedDaemonSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}', {
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

  async watchAppsV1NamespacedDaemonSetList(
    params: WatchAppsV1NamespacedDaemonSetListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/daemonsets', {
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

  async watchAppsV1NamespacedDeployment(
    params: WatchAppsV1NamespacedDeploymentParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}', {
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

  async watchAppsV1NamespacedDeploymentList(
    params: WatchAppsV1NamespacedDeploymentListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/deployments', {
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

  async watchAppsV1NamespacedReplicaSet(
    params: WatchAppsV1NamespacedReplicaSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}', {
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

  async watchAppsV1NamespacedReplicaSetList(
    params: WatchAppsV1NamespacedReplicaSetListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/replicasets', {
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

  async watchAppsV1NamespacedStatefulSet(
    params: WatchAppsV1NamespacedStatefulSetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}', {
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

  async watchAppsV1NamespacedStatefulSetList(
    params: WatchAppsV1NamespacedStatefulSetListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/namespaces/{namespace}/statefulsets', {
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

  async watchAppsV1ReplicaSetListForAllNamespaces(
    params?: WatchAppsV1ReplicaSetListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/replicasets');

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

  async watchAppsV1StatefulSetListForAllNamespaces(
    params?: WatchAppsV1StatefulSetListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/apps/v1/watch/statefulsets');

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

export default AppsV1Api;
