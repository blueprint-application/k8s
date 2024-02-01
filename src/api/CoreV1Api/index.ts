import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAuthenticationV1TokenRequestModel as IoK8sApiAuthenticationV1TokenRequest,
  IoK8sApiAutoscalingV1ScaleModel as IoK8sApiAutoscalingV1Scale,
  IoK8sApiCoreV1BindingModel as IoK8sApiCoreV1Binding,
  IoK8sApiCoreV1ComponentStatusModel as IoK8sApiCoreV1ComponentStatus,
  IoK8sApiCoreV1ComponentStatusListModel as IoK8sApiCoreV1ComponentStatusList,
  IoK8sApiCoreV1ConfigMapModel as IoK8sApiCoreV1ConfigMap,
  IoK8sApiCoreV1ConfigMapListModel as IoK8sApiCoreV1ConfigMapList,
  IoK8sApiCoreV1EndpointsModel as IoK8sApiCoreV1Endpoints,
  IoK8sApiCoreV1EndpointsListModel as IoK8sApiCoreV1EndpointsList,
  IoK8sApiCoreV1EventModel as IoK8sApiCoreV1Event,
  IoK8sApiCoreV1EventListModel as IoK8sApiCoreV1EventList,
  IoK8sApiCoreV1LimitRangeModel as IoK8sApiCoreV1LimitRange,
  IoK8sApiCoreV1LimitRangeListModel as IoK8sApiCoreV1LimitRangeList,
  IoK8sApiCoreV1NamespaceModel as IoK8sApiCoreV1Namespace,
  IoK8sApiCoreV1NamespaceListModel as IoK8sApiCoreV1NamespaceList,
  IoK8sApiCoreV1NodeModel as IoK8sApiCoreV1Node,
  IoK8sApiCoreV1NodeListModel as IoK8sApiCoreV1NodeList,
  IoK8sApiCoreV1PersistentVolumeModel as IoK8sApiCoreV1PersistentVolume,
  IoK8sApiCoreV1PersistentVolumeClaimModel as IoK8sApiCoreV1PersistentVolumeClaim,
  IoK8sApiCoreV1PersistentVolumeClaimListModel as IoK8sApiCoreV1PersistentVolumeClaimList,
  IoK8sApiCoreV1PersistentVolumeListModel as IoK8sApiCoreV1PersistentVolumeList,
  IoK8sApiCoreV1PodModel as IoK8sApiCoreV1Pod,
  IoK8sApiCoreV1PodListModel as IoK8sApiCoreV1PodList,
  IoK8sApiCoreV1PodTemplateModel as IoK8sApiCoreV1PodTemplate,
  IoK8sApiCoreV1PodTemplateListModel as IoK8sApiCoreV1PodTemplateList,
  IoK8sApiCoreV1ReplicationControllerModel as IoK8sApiCoreV1ReplicationController,
  IoK8sApiCoreV1ReplicationControllerListModel as IoK8sApiCoreV1ReplicationControllerList,
  IoK8sApiCoreV1ResourceQuotaModel as IoK8sApiCoreV1ResourceQuota,
  IoK8sApiCoreV1ResourceQuotaListModel as IoK8sApiCoreV1ResourceQuotaList,
  IoK8sApiCoreV1SecretModel as IoK8sApiCoreV1Secret,
  IoK8sApiCoreV1SecretListModel as IoK8sApiCoreV1SecretList,
  IoK8sApiCoreV1ServiceModel as IoK8sApiCoreV1Service,
  IoK8sApiCoreV1ServiceAccountModel as IoK8sApiCoreV1ServiceAccount,
  IoK8sApiCoreV1ServiceAccountListModel as IoK8sApiCoreV1ServiceAccountList,
  IoK8sApiCoreV1ServiceListModel as IoK8sApiCoreV1ServiceList,
  IoK8sApiPolicyV1EvictionModel as IoK8sApiPolicyV1Eviction,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  ConnectCoreV1DeleteNamespacedPodProxyParams,
  ConnectCoreV1DeleteNamespacedPodProxyWithPathParams,
  ConnectCoreV1DeleteNamespacedServiceProxyParams,
  ConnectCoreV1DeleteNamespacedServiceProxyWithPathParams,
  ConnectCoreV1DeleteNodeProxyParams,
  ConnectCoreV1DeleteNodeProxyWithPathParams,
  ConnectCoreV1GetNamespacedPodAttachParams,
  ConnectCoreV1GetNamespacedPodExecParams,
  ConnectCoreV1GetNamespacedPodPortforwardParams,
  ConnectCoreV1GetNamespacedPodProxyParams,
  ConnectCoreV1GetNamespacedPodProxyWithPathParams,
  ConnectCoreV1GetNamespacedServiceProxyParams,
  ConnectCoreV1GetNamespacedServiceProxyWithPathParams,
  ConnectCoreV1GetNodeProxyParams,
  ConnectCoreV1GetNodeProxyWithPathParams,
  ConnectCoreV1HeadNamespacedPodProxyParams,
  ConnectCoreV1HeadNamespacedPodProxyWithPathParams,
  ConnectCoreV1HeadNamespacedServiceProxyParams,
  ConnectCoreV1HeadNamespacedServiceProxyWithPathParams,
  ConnectCoreV1HeadNodeProxyParams,
  ConnectCoreV1HeadNodeProxyWithPathParams,
  ConnectCoreV1OptionsNamespacedPodProxyParams,
  ConnectCoreV1OptionsNamespacedPodProxyWithPathParams,
  ConnectCoreV1OptionsNamespacedServiceProxyParams,
  ConnectCoreV1OptionsNamespacedServiceProxyWithPathParams,
  ConnectCoreV1OptionsNodeProxyParams,
  ConnectCoreV1OptionsNodeProxyWithPathParams,
  ConnectCoreV1PatchNamespacedPodProxyParams,
  ConnectCoreV1PatchNamespacedPodProxyWithPathParams,
  ConnectCoreV1PatchNamespacedServiceProxyParams,
  ConnectCoreV1PatchNamespacedServiceProxyWithPathParams,
  ConnectCoreV1PatchNodeProxyParams,
  ConnectCoreV1PatchNodeProxyWithPathParams,
  ConnectCoreV1PostNamespacedPodAttachParams,
  ConnectCoreV1PostNamespacedPodExecParams,
  ConnectCoreV1PostNamespacedPodPortforwardParams,
  ConnectCoreV1PostNamespacedPodProxyParams,
  ConnectCoreV1PostNamespacedPodProxyWithPathParams,
  ConnectCoreV1PostNamespacedServiceProxyParams,
  ConnectCoreV1PostNamespacedServiceProxyWithPathParams,
  ConnectCoreV1PostNodeProxyParams,
  ConnectCoreV1PostNodeProxyWithPathParams,
  ConnectCoreV1PutNamespacedPodProxyParams,
  ConnectCoreV1PutNamespacedPodProxyWithPathParams,
  ConnectCoreV1PutNamespacedServiceProxyParams,
  ConnectCoreV1PutNamespacedServiceProxyWithPathParams,
  ConnectCoreV1PutNodeProxyParams,
  ConnectCoreV1PutNodeProxyWithPathParams,
  CreateCoreV1NamespaceParams,
  CreateCoreV1NamespacedBindingParams,
  CreateCoreV1NamespacedConfigMapParams,
  CreateCoreV1NamespacedEndpointsParams,
  CreateCoreV1NamespacedEventParams,
  CreateCoreV1NamespacedLimitRangeParams,
  CreateCoreV1NamespacedPersistentVolumeClaimParams,
  CreateCoreV1NamespacedPodBindingParams,
  CreateCoreV1NamespacedPodEvictionParams,
  CreateCoreV1NamespacedPodParams,
  CreateCoreV1NamespacedPodTemplateParams,
  CreateCoreV1NamespacedReplicationControllerParams,
  CreateCoreV1NamespacedResourceQuotaParams,
  CreateCoreV1NamespacedSecretParams,
  CreateCoreV1NamespacedServiceAccountParams,
  CreateCoreV1NamespacedServiceAccountTokenParams,
  CreateCoreV1NamespacedServiceParams,
  CreateCoreV1NodeParams,
  CreateCoreV1PersistentVolumeParams,
  DeleteCoreV1CollectionNamespacedConfigMapParams,
  DeleteCoreV1CollectionNamespacedEndpointsParams,
  DeleteCoreV1CollectionNamespacedEventParams,
  DeleteCoreV1CollectionNamespacedLimitRangeParams,
  DeleteCoreV1CollectionNamespacedPersistentVolumeClaimParams,
  DeleteCoreV1CollectionNamespacedPodParams,
  DeleteCoreV1CollectionNamespacedPodTemplateParams,
  DeleteCoreV1CollectionNamespacedReplicationControllerParams,
  DeleteCoreV1CollectionNamespacedResourceQuotaParams,
  DeleteCoreV1CollectionNamespacedSecretParams,
  DeleteCoreV1CollectionNamespacedServiceAccountParams,
  DeleteCoreV1CollectionNamespacedServiceParams,
  DeleteCoreV1CollectionNodeParams,
  DeleteCoreV1CollectionPersistentVolumeParams,
  DeleteCoreV1NamespaceParams,
  DeleteCoreV1NamespacedConfigMapParams,
  DeleteCoreV1NamespacedEndpointsParams,
  DeleteCoreV1NamespacedEventParams,
  DeleteCoreV1NamespacedLimitRangeParams,
  DeleteCoreV1NamespacedPersistentVolumeClaimParams,
  DeleteCoreV1NamespacedPodParams,
  DeleteCoreV1NamespacedPodTemplateParams,
  DeleteCoreV1NamespacedReplicationControllerParams,
  DeleteCoreV1NamespacedResourceQuotaParams,
  DeleteCoreV1NamespacedSecretParams,
  DeleteCoreV1NamespacedServiceAccountParams,
  DeleteCoreV1NamespacedServiceParams,
  DeleteCoreV1NodeParams,
  DeleteCoreV1PersistentVolumeParams,
  ListCoreV1ComponentStatusParams,
  ListCoreV1ConfigMapForAllNamespacesParams,
  ListCoreV1EndpointsForAllNamespacesParams,
  ListCoreV1EventForAllNamespacesParams,
  ListCoreV1LimitRangeForAllNamespacesParams,
  ListCoreV1NamespaceParams,
  ListCoreV1NamespacedConfigMapParams,
  ListCoreV1NamespacedEndpointsParams,
  ListCoreV1NamespacedEventParams,
  ListCoreV1NamespacedLimitRangeParams,
  ListCoreV1NamespacedPersistentVolumeClaimParams,
  ListCoreV1NamespacedPodParams,
  ListCoreV1NamespacedPodTemplateParams,
  ListCoreV1NamespacedReplicationControllerParams,
  ListCoreV1NamespacedResourceQuotaParams,
  ListCoreV1NamespacedSecretParams,
  ListCoreV1NamespacedServiceAccountParams,
  ListCoreV1NamespacedServiceParams,
  ListCoreV1NodeParams,
  ListCoreV1PersistentVolumeClaimForAllNamespacesParams,
  ListCoreV1PersistentVolumeParams,
  ListCoreV1PodForAllNamespacesParams,
  ListCoreV1PodTemplateForAllNamespacesParams,
  ListCoreV1ReplicationControllerForAllNamespacesParams,
  ListCoreV1ResourceQuotaForAllNamespacesParams,
  ListCoreV1SecretForAllNamespacesParams,
  ListCoreV1ServiceAccountForAllNamespacesParams,
  ListCoreV1ServiceForAllNamespacesParams,
  PatchCoreV1NamespaceParams,
  PatchCoreV1NamespaceStatusParams,
  PatchCoreV1NamespacedConfigMapParams,
  PatchCoreV1NamespacedEndpointsParams,
  PatchCoreV1NamespacedEventParams,
  PatchCoreV1NamespacedLimitRangeParams,
  PatchCoreV1NamespacedPersistentVolumeClaimParams,
  PatchCoreV1NamespacedPersistentVolumeClaimStatusParams,
  PatchCoreV1NamespacedPodEphemeralcontainersParams,
  PatchCoreV1NamespacedPodParams,
  PatchCoreV1NamespacedPodStatusParams,
  PatchCoreV1NamespacedPodTemplateParams,
  PatchCoreV1NamespacedReplicationControllerParams,
  PatchCoreV1NamespacedReplicationControllerScaleParams,
  PatchCoreV1NamespacedReplicationControllerStatusParams,
  PatchCoreV1NamespacedResourceQuotaParams,
  PatchCoreV1NamespacedResourceQuotaStatusParams,
  PatchCoreV1NamespacedSecretParams,
  PatchCoreV1NamespacedServiceAccountParams,
  PatchCoreV1NamespacedServiceParams,
  PatchCoreV1NamespacedServiceStatusParams,
  PatchCoreV1NodeParams,
  PatchCoreV1NodeStatusParams,
  PatchCoreV1PersistentVolumeParams,
  PatchCoreV1PersistentVolumeStatusParams,
  ReadCoreV1ComponentStatusParams,
  ReadCoreV1NamespaceParams,
  ReadCoreV1NamespaceStatusParams,
  ReadCoreV1NamespacedConfigMapParams,
  ReadCoreV1NamespacedEndpointsParams,
  ReadCoreV1NamespacedEventParams,
  ReadCoreV1NamespacedLimitRangeParams,
  ReadCoreV1NamespacedPersistentVolumeClaimParams,
  ReadCoreV1NamespacedPersistentVolumeClaimStatusParams,
  ReadCoreV1NamespacedPodEphemeralcontainersParams,
  ReadCoreV1NamespacedPodLogParams,
  ReadCoreV1NamespacedPodParams,
  ReadCoreV1NamespacedPodStatusParams,
  ReadCoreV1NamespacedPodTemplateParams,
  ReadCoreV1NamespacedReplicationControllerParams,
  ReadCoreV1NamespacedReplicationControllerScaleParams,
  ReadCoreV1NamespacedReplicationControllerStatusParams,
  ReadCoreV1NamespacedResourceQuotaParams,
  ReadCoreV1NamespacedResourceQuotaStatusParams,
  ReadCoreV1NamespacedSecretParams,
  ReadCoreV1NamespacedServiceAccountParams,
  ReadCoreV1NamespacedServiceParams,
  ReadCoreV1NamespacedServiceStatusParams,
  ReadCoreV1NodeParams,
  ReadCoreV1NodeStatusParams,
  ReadCoreV1PersistentVolumeParams,
  ReadCoreV1PersistentVolumeStatusParams,
  ReplaceCoreV1NamespaceFinalizeParams,
  ReplaceCoreV1NamespaceParams,
  ReplaceCoreV1NamespaceStatusParams,
  ReplaceCoreV1NamespacedConfigMapParams,
  ReplaceCoreV1NamespacedEndpointsParams,
  ReplaceCoreV1NamespacedEventParams,
  ReplaceCoreV1NamespacedLimitRangeParams,
  ReplaceCoreV1NamespacedPersistentVolumeClaimParams,
  ReplaceCoreV1NamespacedPersistentVolumeClaimStatusParams,
  ReplaceCoreV1NamespacedPodEphemeralcontainersParams,
  ReplaceCoreV1NamespacedPodParams,
  ReplaceCoreV1NamespacedPodStatusParams,
  ReplaceCoreV1NamespacedPodTemplateParams,
  ReplaceCoreV1NamespacedReplicationControllerParams,
  ReplaceCoreV1NamespacedReplicationControllerScaleParams,
  ReplaceCoreV1NamespacedReplicationControllerStatusParams,
  ReplaceCoreV1NamespacedResourceQuotaParams,
  ReplaceCoreV1NamespacedResourceQuotaStatusParams,
  ReplaceCoreV1NamespacedSecretParams,
  ReplaceCoreV1NamespacedServiceAccountParams,
  ReplaceCoreV1NamespacedServiceParams,
  ReplaceCoreV1NamespacedServiceStatusParams,
  ReplaceCoreV1NodeParams,
  ReplaceCoreV1NodeStatusParams,
  ReplaceCoreV1PersistentVolumeParams,
  ReplaceCoreV1PersistentVolumeStatusParams,
  WatchCoreV1ConfigMapListForAllNamespacesParams,
  WatchCoreV1EndpointsListForAllNamespacesParams,
  WatchCoreV1EventListForAllNamespacesParams,
  WatchCoreV1LimitRangeListForAllNamespacesParams,
  WatchCoreV1NamespaceListParams,
  WatchCoreV1NamespaceParams,
  WatchCoreV1NamespacedConfigMapListParams,
  WatchCoreV1NamespacedConfigMapParams,
  WatchCoreV1NamespacedEndpointsListParams,
  WatchCoreV1NamespacedEndpointsParams,
  WatchCoreV1NamespacedEventListParams,
  WatchCoreV1NamespacedEventParams,
  WatchCoreV1NamespacedLimitRangeListParams,
  WatchCoreV1NamespacedLimitRangeParams,
  WatchCoreV1NamespacedPersistentVolumeClaimListParams,
  WatchCoreV1NamespacedPersistentVolumeClaimParams,
  WatchCoreV1NamespacedPodListParams,
  WatchCoreV1NamespacedPodParams,
  WatchCoreV1NamespacedPodTemplateListParams,
  WatchCoreV1NamespacedPodTemplateParams,
  WatchCoreV1NamespacedReplicationControllerListParams,
  WatchCoreV1NamespacedReplicationControllerParams,
  WatchCoreV1NamespacedResourceQuotaListParams,
  WatchCoreV1NamespacedResourceQuotaParams,
  WatchCoreV1NamespacedSecretListParams,
  WatchCoreV1NamespacedSecretParams,
  WatchCoreV1NamespacedServiceAccountListParams,
  WatchCoreV1NamespacedServiceAccountParams,
  WatchCoreV1NamespacedServiceListParams,
  WatchCoreV1NamespacedServiceParams,
  WatchCoreV1NodeListParams,
  WatchCoreV1NodeParams,
  WatchCoreV1PersistentVolumeClaimListForAllNamespacesParams,
  WatchCoreV1PersistentVolumeListParams,
  WatchCoreV1PersistentVolumeParams,
  WatchCoreV1PodListForAllNamespacesParams,
  WatchCoreV1PodTemplateListForAllNamespacesParams,
  WatchCoreV1ReplicationControllerListForAllNamespacesParams,
  WatchCoreV1ResourceQuotaListForAllNamespacesParams,
  WatchCoreV1SecretListForAllNamespacesParams,
  WatchCoreV1ServiceAccountListForAllNamespacesParams,
  WatchCoreV1ServiceListForAllNamespacesParams,
} from './types';

export class CoreV1Api extends BaseApi {
  async connectCoreV1DeleteNamespacedPodProxy(
    params: ConnectCoreV1DeleteNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1DeleteNamespacedPodProxyWithPath(
    params: ConnectCoreV1DeleteNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1DeleteNamespacedServiceProxy(
    params: ConnectCoreV1DeleteNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1DeleteNamespacedServiceProxyWithPath(
    params: ConnectCoreV1DeleteNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1DeleteNodeProxy(
    params: ConnectCoreV1DeleteNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1DeleteNodeProxyWithPath(
    params: ConnectCoreV1DeleteNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedPodAttach(
    params: ConnectCoreV1GetNamespacedPodAttachParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/attach', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedPodExec(
    params: ConnectCoreV1GetNamespacedPodExecParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/exec', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedPodPortforward(
    params: ConnectCoreV1GetNamespacedPodPortforwardParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/portforward', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedPodProxy(
    params: ConnectCoreV1GetNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedPodProxyWithPath(
    params: ConnectCoreV1GetNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedServiceProxy(
    params: ConnectCoreV1GetNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNamespacedServiceProxyWithPath(
    params: ConnectCoreV1GetNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNodeProxy(
    params: ConnectCoreV1GetNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1GetNodeProxyWithPath(
    params: ConnectCoreV1GetNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNamespacedPodProxy(
    params: ConnectCoreV1HeadNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNamespacedPodProxyWithPath(
    params: ConnectCoreV1HeadNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNamespacedServiceProxy(
    params: ConnectCoreV1HeadNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNamespacedServiceProxyWithPath(
    params: ConnectCoreV1HeadNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNodeProxy(
    params: ConnectCoreV1HeadNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1HeadNodeProxyWithPath(
    params: ConnectCoreV1HeadNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.HEAD,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNamespacedPodProxy(
    params: ConnectCoreV1OptionsNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNamespacedPodProxyWithPath(
    params: ConnectCoreV1OptionsNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNamespacedServiceProxy(
    params: ConnectCoreV1OptionsNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNamespacedServiceProxyWithPath(
    params: ConnectCoreV1OptionsNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNodeProxy(
    params: ConnectCoreV1OptionsNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1OptionsNodeProxyWithPath(
    params: ConnectCoreV1OptionsNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.OPTIONS,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNamespacedPodProxy(
    params: ConnectCoreV1PatchNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNamespacedPodProxyWithPath(
    params: ConnectCoreV1PatchNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNamespacedServiceProxy(
    params: ConnectCoreV1PatchNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNamespacedServiceProxyWithPath(
    params: ConnectCoreV1PatchNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNodeProxy(
    params: ConnectCoreV1PatchNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PatchNodeProxyWithPath(
    params: ConnectCoreV1PatchNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedPodAttach(
    params: ConnectCoreV1PostNamespacedPodAttachParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/attach', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedPodExec(
    params: ConnectCoreV1PostNamespacedPodExecParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/exec', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedPodPortforward(
    params: ConnectCoreV1PostNamespacedPodPortforwardParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/portforward', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedPodProxy(
    params: ConnectCoreV1PostNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedPodProxyWithPath(
    params: ConnectCoreV1PostNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedServiceProxy(
    params: ConnectCoreV1PostNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNamespacedServiceProxyWithPath(
    params: ConnectCoreV1PostNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNodeProxy(
    params: ConnectCoreV1PostNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PostNodeProxyWithPath(
    params: ConnectCoreV1PostNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNamespacedPodProxy(
    params: ConnectCoreV1PutNamespacedPodProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNamespacedPodProxyWithPath(
    params: ConnectCoreV1PutNamespacedPodProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNamespacedServiceProxy(
    params: ConnectCoreV1PutNamespacedServiceProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNamespacedServiceProxyWithPath(
    params: ConnectCoreV1PutNamespacedServiceProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNodeProxy(
    params: ConnectCoreV1PutNodeProxyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async connectCoreV1PutNodeProxyWithPath(
    params: ConnectCoreV1PutNodeProxyWithPathParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/nodes/{name}/proxy/{path}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async createCoreV1Namespace(
    params: CreateCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces');

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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async createCoreV1NamespacedBinding(
    params: CreateCoreV1NamespacedBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Binding> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/bindings', {
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
    return new IoK8sApiCoreV1Binding(result);
  }

  async createCoreV1NamespacedConfigMap(
    params: CreateCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMap> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps', {
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
    return new IoK8sApiCoreV1ConfigMap(result);
  }

  async createCoreV1NamespacedEndpoints(
    params: CreateCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Endpoints> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints', {
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
    return new IoK8sApiCoreV1Endpoints(result);
  }

  async createCoreV1NamespacedEvent(
    params: CreateCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Event> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events', {
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
    return new IoK8sApiCoreV1Event(result);
  }

  async createCoreV1NamespacedLimitRange(
    params: CreateCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRange> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges', {
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
    return new IoK8sApiCoreV1LimitRange(result);
  }

  async createCoreV1NamespacedPersistentVolumeClaim(
    params: CreateCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async createCoreV1NamespacedPod(
    params: CreateCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async createCoreV1NamespacedPodBinding(
    params: CreateCoreV1NamespacedPodBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Binding> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/binding', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiCoreV1Binding(result);
  }

  async createCoreV1NamespacedPodEviction(
    params: CreateCoreV1NamespacedPodEvictionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiPolicyV1Eviction> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/eviction', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiPolicyV1Eviction(result);
  }

  async createCoreV1NamespacedPodTemplate(
    params: CreateCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplate> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates', {
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
    return new IoK8sApiCoreV1PodTemplate(result);
  }

  async createCoreV1NamespacedReplicationController(
    params: CreateCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async createCoreV1NamespacedResourceQuota(
    params: CreateCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async createCoreV1NamespacedSecret(
    params: CreateCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Secret> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets', {
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
    return new IoK8sApiCoreV1Secret(result);
  }

  async createCoreV1NamespacedService(
    params: CreateCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async createCoreV1NamespacedServiceAccount(
    params: CreateCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccount> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts', {
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
    return new IoK8sApiCoreV1ServiceAccount(result);
  }

  async createCoreV1NamespacedServiceAccountToken(
    params: CreateCoreV1NamespacedServiceAccountTokenParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAuthenticationV1TokenRequest> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiAuthenticationV1TokenRequest(result);
  }

  async createCoreV1Node(
    params: CreateCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes');

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
    return new IoK8sApiCoreV1Node(result);
  }

  async createCoreV1PersistentVolume(
    params: CreateCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes');

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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async deleteCoreV1CollectionNamespacedConfigMap(
    params: DeleteCoreV1CollectionNamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps', {
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

  async deleteCoreV1CollectionNamespacedEndpoints(
    params: DeleteCoreV1CollectionNamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints', {
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

  async deleteCoreV1CollectionNamespacedEvent(
    params: DeleteCoreV1CollectionNamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events', {
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

  async deleteCoreV1CollectionNamespacedLimitRange(
    params: DeleteCoreV1CollectionNamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges', {
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

  async deleteCoreV1CollectionNamespacedPersistentVolumeClaim(
    params: DeleteCoreV1CollectionNamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims', {
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

  async deleteCoreV1CollectionNamespacedPod(
    params: DeleteCoreV1CollectionNamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods', {
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

  async deleteCoreV1CollectionNamespacedPodTemplate(
    params: DeleteCoreV1CollectionNamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates', {
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

  async deleteCoreV1CollectionNamespacedReplicationController(
    params: DeleteCoreV1CollectionNamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers', {
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

  async deleteCoreV1CollectionNamespacedResourceQuota(
    params: DeleteCoreV1CollectionNamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas', {
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

  async deleteCoreV1CollectionNamespacedSecret(
    params: DeleteCoreV1CollectionNamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets', {
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

  async deleteCoreV1CollectionNamespacedService(
    params: DeleteCoreV1CollectionNamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services', {
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

  async deleteCoreV1CollectionNamespacedServiceAccount(
    params: DeleteCoreV1CollectionNamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts', {
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

  async deleteCoreV1CollectionNode(
    params: DeleteCoreV1CollectionNodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/nodes');

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

  async deleteCoreV1CollectionPersistentVolume(
    params: DeleteCoreV1CollectionPersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/persistentvolumes');

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

  async deleteCoreV1Namespace(
    params: DeleteCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{name}', {
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

  async deleteCoreV1NamespacedConfigMap(
    params: DeleteCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps/{name}', {
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

  async deleteCoreV1NamespacedEndpoints(
    params: DeleteCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints/{name}', {
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

  async deleteCoreV1NamespacedEvent(
    params: DeleteCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events/{name}', {
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

  async deleteCoreV1NamespacedLimitRange(
    params: DeleteCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges/{name}', {
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

  async deleteCoreV1NamespacedPersistentVolumeClaim(
    params: DeleteCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async deleteCoreV1NamespacedPod(
    params: DeleteCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async deleteCoreV1NamespacedPodTemplate(
    params: DeleteCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplate> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates/{name}', {
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
    return new IoK8sApiCoreV1PodTemplate(result);
  }

  async deleteCoreV1NamespacedReplicationController(
    params: DeleteCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}', {
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

  async deleteCoreV1NamespacedResourceQuota(
    params: DeleteCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async deleteCoreV1NamespacedSecret(
    params: DeleteCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets/{name}', {
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

  async deleteCoreV1NamespacedService(
    params: DeleteCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async deleteCoreV1NamespacedServiceAccount(
    params: DeleteCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccount> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts/{name}', {
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
    return new IoK8sApiCoreV1ServiceAccount(result);
  }

  async deleteCoreV1Node(
    params: DeleteCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/api/v1/nodes/{name}', {
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

  async deleteCoreV1PersistentVolume(
    params: DeleteCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async getCoreV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/api/v1/');

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

  async listCoreV1ComponentStatus(
    params?: ListCoreV1ComponentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ComponentStatusList> {
    const url = this.buildUrl('/api/v1/componentstatuses');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ComponentStatusList(result);
  }

  async listCoreV1ConfigMapForAllNamespaces(
    params?: ListCoreV1ConfigMapForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMapList> {
    const url = this.buildUrl('/api/v1/configmaps');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ConfigMapList(result);
  }

  async listCoreV1EndpointsForAllNamespaces(
    params?: ListCoreV1EndpointsForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1EndpointsList> {
    const url = this.buildUrl('/api/v1/endpoints');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1EndpointsList(result);
  }

  async listCoreV1EventForAllNamespaces(
    params?: ListCoreV1EventForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1EventList> {
    const url = this.buildUrl('/api/v1/events');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1EventList(result);
  }

  async listCoreV1LimitRangeForAllNamespaces(
    params?: ListCoreV1LimitRangeForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRangeList> {
    const url = this.buildUrl('/api/v1/limitranges');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1LimitRangeList(result);
  }

  async listCoreV1Namespace(
    params?: ListCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1NamespaceList> {
    const url = this.buildUrl('/api/v1/namespaces');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1NamespaceList(result);
  }

  async listCoreV1NamespacedConfigMap(
    params: ListCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMapList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps', {
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
    return new IoK8sApiCoreV1ConfigMapList(result);
  }

  async listCoreV1NamespacedEndpoints(
    params: ListCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1EndpointsList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints', {
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
    return new IoK8sApiCoreV1EndpointsList(result);
  }

  async listCoreV1NamespacedEvent(
    params: ListCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1EventList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events', {
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
    return new IoK8sApiCoreV1EventList(result);
  }

  async listCoreV1NamespacedLimitRange(
    params: ListCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRangeList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges', {
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
    return new IoK8sApiCoreV1LimitRangeList(result);
  }

  async listCoreV1NamespacedPersistentVolumeClaim(
    params: ListCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaimList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaimList(result);
  }

  async listCoreV1NamespacedPod(
    params: ListCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods', {
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
    return new IoK8sApiCoreV1PodList(result);
  }

  async listCoreV1NamespacedPodTemplate(
    params: ListCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplateList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates', {
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
    return new IoK8sApiCoreV1PodTemplateList(result);
  }

  async listCoreV1NamespacedReplicationController(
    params: ListCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationControllerList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers', {
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
    return new IoK8sApiCoreV1ReplicationControllerList(result);
  }

  async listCoreV1NamespacedResourceQuota(
    params: ListCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuotaList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas', {
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
    return new IoK8sApiCoreV1ResourceQuotaList(result);
  }

  async listCoreV1NamespacedSecret(
    params: ListCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1SecretList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets', {
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
    return new IoK8sApiCoreV1SecretList(result);
  }

  async listCoreV1NamespacedService(
    params: ListCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services', {
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
    return new IoK8sApiCoreV1ServiceList(result);
  }

  async listCoreV1NamespacedServiceAccount(
    params: ListCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccountList> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts', {
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
    return new IoK8sApiCoreV1ServiceAccountList(result);
  }

  async listCoreV1Node(
    params?: ListCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1NodeList> {
    const url = this.buildUrl('/api/v1/nodes');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1NodeList(result);
  }

  async listCoreV1PersistentVolume(
    params?: ListCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeList> {
    const url = this.buildUrl('/api/v1/persistentvolumes');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1PersistentVolumeList(result);
  }

  async listCoreV1PersistentVolumeClaimForAllNamespaces(
    params?: ListCoreV1PersistentVolumeClaimForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaimList> {
    const url = this.buildUrl('/api/v1/persistentvolumeclaims');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1PersistentVolumeClaimList(result);
  }

  async listCoreV1PodForAllNamespaces(
    params?: ListCoreV1PodForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodList> {
    const url = this.buildUrl('/api/v1/pods');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1PodList(result);
  }

  async listCoreV1PodTemplateForAllNamespaces(
    params?: ListCoreV1PodTemplateForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplateList> {
    const url = this.buildUrl('/api/v1/podtemplates');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1PodTemplateList(result);
  }

  async listCoreV1ReplicationControllerForAllNamespaces(
    params?: ListCoreV1ReplicationControllerForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationControllerList> {
    const url = this.buildUrl('/api/v1/replicationcontrollers');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ReplicationControllerList(result);
  }

  async listCoreV1ResourceQuotaForAllNamespaces(
    params?: ListCoreV1ResourceQuotaForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuotaList> {
    const url = this.buildUrl('/api/v1/resourcequotas');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ResourceQuotaList(result);
  }

  async listCoreV1SecretForAllNamespaces(
    params?: ListCoreV1SecretForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1SecretList> {
    const url = this.buildUrl('/api/v1/secrets');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1SecretList(result);
  }

  async listCoreV1ServiceAccountForAllNamespaces(
    params?: ListCoreV1ServiceAccountForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccountList> {
    const url = this.buildUrl('/api/v1/serviceaccounts');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ServiceAccountList(result);
  }

  async listCoreV1ServiceForAllNamespaces(
    params?: ListCoreV1ServiceForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceList> {
    const url = this.buildUrl('/api/v1/services');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCoreV1ServiceList(result);
  }

  async patchCoreV1Namespace(
    params: PatchCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async patchCoreV1NamespaceStatus(
    params: PatchCoreV1NamespaceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}/status', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async patchCoreV1NamespacedConfigMap(
    params: PatchCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMap> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps/{name}', {
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
    return new IoK8sApiCoreV1ConfigMap(result);
  }

  async patchCoreV1NamespacedEndpoints(
    params: PatchCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Endpoints> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints/{name}', {
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
    return new IoK8sApiCoreV1Endpoints(result);
  }

  async patchCoreV1NamespacedEvent(
    params: PatchCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Event> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiCoreV1Event(result);
  }

  async patchCoreV1NamespacedLimitRange(
    params: PatchCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRange> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges/{name}', {
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
    return new IoK8sApiCoreV1LimitRange(result);
  }

  async patchCoreV1NamespacedPersistentVolumeClaim(
    params: PatchCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async patchCoreV1NamespacedPersistentVolumeClaimStatus(
    params: PatchCoreV1NamespacedPersistentVolumeClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async patchCoreV1NamespacedPod(
    params: PatchCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async patchCoreV1NamespacedPodEphemeralcontainers(
    params: PatchCoreV1NamespacedPodEphemeralcontainersParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async patchCoreV1NamespacedPodStatus(
    params: PatchCoreV1NamespacedPodStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/status', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async patchCoreV1NamespacedPodTemplate(
    params: PatchCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplate> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates/{name}', {
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
    return new IoK8sApiCoreV1PodTemplate(result);
  }

  async patchCoreV1NamespacedReplicationController(
    params: PatchCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async patchCoreV1NamespacedReplicationControllerScale(
    params: PatchCoreV1NamespacedReplicationControllerScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale', {
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

  async patchCoreV1NamespacedReplicationControllerStatus(
    params: PatchCoreV1NamespacedReplicationControllerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async patchCoreV1NamespacedResourceQuota(
    params: PatchCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async patchCoreV1NamespacedResourceQuotaStatus(
    params: PatchCoreV1NamespacedResourceQuotaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}/status', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async patchCoreV1NamespacedSecret(
    params: PatchCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Secret> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets/{name}', {
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
    return new IoK8sApiCoreV1Secret(result);
  }

  async patchCoreV1NamespacedService(
    params: PatchCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async patchCoreV1NamespacedServiceAccount(
    params: PatchCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccount> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts/{name}', {
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
    return new IoK8sApiCoreV1ServiceAccount(result);
  }

  async patchCoreV1NamespacedServiceStatus(
    params: PatchCoreV1NamespacedServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/status', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async patchCoreV1Node(
    params: PatchCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async patchCoreV1NodeStatus(
    params: PatchCoreV1NodeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}/status', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async patchCoreV1PersistentVolume(
    params: PatchCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async patchCoreV1PersistentVolumeStatus(
    params: PatchCoreV1PersistentVolumeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async readCoreV1ComponentStatus(
    params: ReadCoreV1ComponentStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ComponentStatus> {
    const url = this.buildUrl('/api/v1/componentstatuses/{name}', {
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
    return new IoK8sApiCoreV1ComponentStatus(result);
  }

  async readCoreV1Namespace(
    params: ReadCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async readCoreV1NamespaceStatus(
    params: ReadCoreV1NamespaceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}/status', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async readCoreV1NamespacedConfigMap(
    params: ReadCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMap> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps/{name}', {
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
    return new IoK8sApiCoreV1ConfigMap(result);
  }

  async readCoreV1NamespacedEndpoints(
    params: ReadCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Endpoints> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints/{name}', {
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
    return new IoK8sApiCoreV1Endpoints(result);
  }

  async readCoreV1NamespacedEvent(
    params: ReadCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Event> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiCoreV1Event(result);
  }

  async readCoreV1NamespacedLimitRange(
    params: ReadCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRange> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges/{name}', {
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
    return new IoK8sApiCoreV1LimitRange(result);
  }

  async readCoreV1NamespacedPersistentVolumeClaim(
    params: ReadCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async readCoreV1NamespacedPersistentVolumeClaimStatus(
    params: ReadCoreV1NamespacedPersistentVolumeClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async readCoreV1NamespacedPod(
    params: ReadCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async readCoreV1NamespacedPodEphemeralcontainers(
    params: ReadCoreV1NamespacedPodEphemeralcontainersParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async readCoreV1NamespacedPodLog(
    params: ReadCoreV1NamespacedPodLogParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<string> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/log', {
      params: params.path,
      required: ['name', 'namespace'],
    });

    return this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
  }

  async readCoreV1NamespacedPodStatus(
    params: ReadCoreV1NamespacedPodStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/status', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async readCoreV1NamespacedPodTemplate(
    params: ReadCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplate> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates/{name}', {
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
    return new IoK8sApiCoreV1PodTemplate(result);
  }

  async readCoreV1NamespacedReplicationController(
    params: ReadCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async readCoreV1NamespacedReplicationControllerScale(
    params: ReadCoreV1NamespacedReplicationControllerScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale', {
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

  async readCoreV1NamespacedReplicationControllerStatus(
    params: ReadCoreV1NamespacedReplicationControllerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async readCoreV1NamespacedResourceQuota(
    params: ReadCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async readCoreV1NamespacedResourceQuotaStatus(
    params: ReadCoreV1NamespacedResourceQuotaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}/status', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async readCoreV1NamespacedSecret(
    params: ReadCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Secret> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets/{name}', {
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
    return new IoK8sApiCoreV1Secret(result);
  }

  async readCoreV1NamespacedService(
    params: ReadCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async readCoreV1NamespacedServiceAccount(
    params: ReadCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccount> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts/{name}', {
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
    return new IoK8sApiCoreV1ServiceAccount(result);
  }

  async readCoreV1NamespacedServiceStatus(
    params: ReadCoreV1NamespacedServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/status', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async readCoreV1Node(
    params: ReadCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async readCoreV1NodeStatus(
    params: ReadCoreV1NodeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}/status', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async readCoreV1PersistentVolume(
    params: ReadCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async readCoreV1PersistentVolumeStatus(
    params: ReadCoreV1PersistentVolumeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async replaceCoreV1Namespace(
    params: ReplaceCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async replaceCoreV1NamespaceFinalize(
    params: ReplaceCoreV1NamespaceFinalizeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}/finalize', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async replaceCoreV1NamespaceStatus(
    params: ReplaceCoreV1NamespaceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Namespace> {
    const url = this.buildUrl('/api/v1/namespaces/{name}/status', {
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
    return new IoK8sApiCoreV1Namespace(result);
  }

  async replaceCoreV1NamespacedConfigMap(
    params: ReplaceCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ConfigMap> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/configmaps/{name}', {
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
    return new IoK8sApiCoreV1ConfigMap(result);
  }

  async replaceCoreV1NamespacedEndpoints(
    params: ReplaceCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Endpoints> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/endpoints/{name}', {
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
    return new IoK8sApiCoreV1Endpoints(result);
  }

  async replaceCoreV1NamespacedEvent(
    params: ReplaceCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Event> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/events/{name}', {
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
    return new IoK8sApiCoreV1Event(result);
  }

  async replaceCoreV1NamespacedLimitRange(
    params: ReplaceCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1LimitRange> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/limitranges/{name}', {
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
    return new IoK8sApiCoreV1LimitRange(result);
  }

  async replaceCoreV1NamespacedPersistentVolumeClaim(
    params: ReplaceCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async replaceCoreV1NamespacedPersistentVolumeClaimStatus(
    params: ReplaceCoreV1NamespacedPersistentVolumeClaimStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolumeClaim> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolumeClaim(result);
  }

  async replaceCoreV1NamespacedPod(
    params: ReplaceCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async replaceCoreV1NamespacedPodEphemeralcontainers(
    params: ReplaceCoreV1NamespacedPodEphemeralcontainersParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async replaceCoreV1NamespacedPodStatus(
    params: ReplaceCoreV1NamespacedPodStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Pod> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/pods/{name}/status', {
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
    return new IoK8sApiCoreV1Pod(result);
  }

  async replaceCoreV1NamespacedPodTemplate(
    params: ReplaceCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PodTemplate> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/podtemplates/{name}', {
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
    return new IoK8sApiCoreV1PodTemplate(result);
  }

  async replaceCoreV1NamespacedReplicationController(
    params: ReplaceCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async replaceCoreV1NamespacedReplicationControllerScale(
    params: ReplaceCoreV1NamespacedReplicationControllerScaleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAutoscalingV1Scale> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale', {
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

  async replaceCoreV1NamespacedReplicationControllerStatus(
    params: ReplaceCoreV1NamespacedReplicationControllerStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ReplicationController> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status', {
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
    return new IoK8sApiCoreV1ReplicationController(result);
  }

  async replaceCoreV1NamespacedResourceQuota(
    params: ReplaceCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async replaceCoreV1NamespacedResourceQuotaStatus(
    params: ReplaceCoreV1NamespacedResourceQuotaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ResourceQuota> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/resourcequotas/{name}/status', {
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
    return new IoK8sApiCoreV1ResourceQuota(result);
  }

  async replaceCoreV1NamespacedSecret(
    params: ReplaceCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Secret> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/secrets/{name}', {
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
    return new IoK8sApiCoreV1Secret(result);
  }

  async replaceCoreV1NamespacedService(
    params: ReplaceCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async replaceCoreV1NamespacedServiceAccount(
    params: ReplaceCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1ServiceAccount> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/serviceaccounts/{name}', {
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
    return new IoK8sApiCoreV1ServiceAccount(result);
  }

  async replaceCoreV1NamespacedServiceStatus(
    params: ReplaceCoreV1NamespacedServiceStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Service> {
    const url = this.buildUrl('/api/v1/namespaces/{namespace}/services/{name}/status', {
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
    return new IoK8sApiCoreV1Service(result);
  }

  async replaceCoreV1Node(
    params: ReplaceCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async replaceCoreV1NodeStatus(
    params: ReplaceCoreV1NodeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1Node> {
    const url = this.buildUrl('/api/v1/nodes/{name}/status', {
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
    return new IoK8sApiCoreV1Node(result);
  }

  async replaceCoreV1PersistentVolume(
    params: ReplaceCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async replaceCoreV1PersistentVolumeStatus(
    params: ReplaceCoreV1PersistentVolumeStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCoreV1PersistentVolume> {
    const url = this.buildUrl('/api/v1/persistentvolumes/{name}/status', {
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
    return new IoK8sApiCoreV1PersistentVolume(result);
  }

  async watchCoreV1ConfigMapListForAllNamespaces(
    params?: WatchCoreV1ConfigMapListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/configmaps');

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

  async watchCoreV1EndpointsListForAllNamespaces(
    params?: WatchCoreV1EndpointsListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/endpoints');

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

  async watchCoreV1EventListForAllNamespaces(
    params?: WatchCoreV1EventListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/events');

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

  async watchCoreV1LimitRangeListForAllNamespaces(
    params?: WatchCoreV1LimitRangeListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/limitranges');

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

  async watchCoreV1Namespace(
    params: WatchCoreV1NamespaceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{name}', {
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

  async watchCoreV1NamespaceList(
    params?: WatchCoreV1NamespaceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces');

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

  async watchCoreV1NamespacedConfigMap(
    params: WatchCoreV1NamespacedConfigMapParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/configmaps/{name}', {
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

  async watchCoreV1NamespacedConfigMapList(
    params: WatchCoreV1NamespacedConfigMapListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/configmaps', {
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

  async watchCoreV1NamespacedEndpoints(
    params: WatchCoreV1NamespacedEndpointsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/endpoints/{name}', {
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

  async watchCoreV1NamespacedEndpointsList(
    params: WatchCoreV1NamespacedEndpointsListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/endpoints', {
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

  async watchCoreV1NamespacedEvent(
    params: WatchCoreV1NamespacedEventParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/events/{name}', {
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

  async watchCoreV1NamespacedEventList(
    params: WatchCoreV1NamespacedEventListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/events', {
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

  async watchCoreV1NamespacedLimitRange(
    params: WatchCoreV1NamespacedLimitRangeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/limitranges/{name}', {
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

  async watchCoreV1NamespacedLimitRangeList(
    params: WatchCoreV1NamespacedLimitRangeListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/limitranges', {
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

  async watchCoreV1NamespacedPersistentVolumeClaim(
    params: WatchCoreV1NamespacedPersistentVolumeClaimParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}', {
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

  async watchCoreV1NamespacedPersistentVolumeClaimList(
    params: WatchCoreV1NamespacedPersistentVolumeClaimListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims', {
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

  async watchCoreV1NamespacedPod(
    params: WatchCoreV1NamespacedPodParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/pods/{name}', {
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

  async watchCoreV1NamespacedPodList(
    params: WatchCoreV1NamespacedPodListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/pods', {
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

  async watchCoreV1NamespacedPodTemplate(
    params: WatchCoreV1NamespacedPodTemplateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/podtemplates/{name}', {
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

  async watchCoreV1NamespacedPodTemplateList(
    params: WatchCoreV1NamespacedPodTemplateListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/podtemplates', {
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

  async watchCoreV1NamespacedReplicationController(
    params: WatchCoreV1NamespacedReplicationControllerParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}', {
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

  async watchCoreV1NamespacedReplicationControllerList(
    params: WatchCoreV1NamespacedReplicationControllerListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/replicationcontrollers', {
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

  async watchCoreV1NamespacedResourceQuota(
    params: WatchCoreV1NamespacedResourceQuotaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}', {
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

  async watchCoreV1NamespacedResourceQuotaList(
    params: WatchCoreV1NamespacedResourceQuotaListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/resourcequotas', {
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

  async watchCoreV1NamespacedSecret(
    params: WatchCoreV1NamespacedSecretParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/secrets/{name}', {
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

  async watchCoreV1NamespacedSecretList(
    params: WatchCoreV1NamespacedSecretListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/secrets', {
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

  async watchCoreV1NamespacedService(
    params: WatchCoreV1NamespacedServiceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/services/{name}', {
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

  async watchCoreV1NamespacedServiceAccount(
    params: WatchCoreV1NamespacedServiceAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}', {
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

  async watchCoreV1NamespacedServiceAccountList(
    params: WatchCoreV1NamespacedServiceAccountListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/serviceaccounts', {
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

  async watchCoreV1NamespacedServiceList(
    params: WatchCoreV1NamespacedServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/namespaces/{namespace}/services', {
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

  async watchCoreV1Node(
    params: WatchCoreV1NodeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/nodes/{name}', {
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

  async watchCoreV1NodeList(
    params?: WatchCoreV1NodeListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/nodes');

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

  async watchCoreV1PersistentVolume(
    params: WatchCoreV1PersistentVolumeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/persistentvolumes/{name}', {
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

  async watchCoreV1PersistentVolumeClaimListForAllNamespaces(
    params?: WatchCoreV1PersistentVolumeClaimListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/persistentvolumeclaims');

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

  async watchCoreV1PersistentVolumeList(
    params?: WatchCoreV1PersistentVolumeListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/persistentvolumes');

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

  async watchCoreV1PodListForAllNamespaces(
    params?: WatchCoreV1PodListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/pods');

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

  async watchCoreV1PodTemplateListForAllNamespaces(
    params?: WatchCoreV1PodTemplateListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/podtemplates');

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

  async watchCoreV1ReplicationControllerListForAllNamespaces(
    params?: WatchCoreV1ReplicationControllerListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/replicationcontrollers');

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

  async watchCoreV1ResourceQuotaListForAllNamespaces(
    params?: WatchCoreV1ResourceQuotaListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/resourcequotas');

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

  async watchCoreV1SecretListForAllNamespaces(
    params?: WatchCoreV1SecretListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/secrets');

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

  async watchCoreV1ServiceAccountListForAllNamespaces(
    params?: WatchCoreV1ServiceAccountListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/serviceaccounts');

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

  async watchCoreV1ServiceListForAllNamespaces(
    params?: WatchCoreV1ServiceListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/api/v1/watch/services');

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

export default CoreV1Api;
