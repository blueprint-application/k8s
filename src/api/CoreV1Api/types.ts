import {
  IoK8sApiAuthenticationV1TokenRequestModelOptions as IoK8sApiAuthenticationV1TokenRequest,
  IoK8sApiAutoscalingV1ScaleModelOptions as IoK8sApiAutoscalingV1Scale,
  IoK8sApiCoreV1BindingModelOptions as IoK8sApiCoreV1Binding,
  IoK8sApiCoreV1ConfigMapModelOptions as IoK8sApiCoreV1ConfigMap,
  IoK8sApiCoreV1EndpointsModelOptions as IoK8sApiCoreV1Endpoints,
  IoK8sApiCoreV1EventModelOptions as IoK8sApiCoreV1Event,
  IoK8sApiCoreV1LimitRangeModelOptions as IoK8sApiCoreV1LimitRange,
  IoK8sApiCoreV1NamespaceModelOptions as IoK8sApiCoreV1Namespace,
  IoK8sApiCoreV1NodeModelOptions as IoK8sApiCoreV1Node,
  IoK8sApiCoreV1PersistentVolumeModelOptions as IoK8sApiCoreV1PersistentVolume,
  IoK8sApiCoreV1PersistentVolumeClaimModelOptions as IoK8sApiCoreV1PersistentVolumeClaim,
  IoK8sApiCoreV1PodModelOptions as IoK8sApiCoreV1Pod,
  IoK8sApiCoreV1PodTemplateModelOptions as IoK8sApiCoreV1PodTemplate,
  IoK8sApiCoreV1ReplicationControllerModelOptions as IoK8sApiCoreV1ReplicationController,
  IoK8sApiCoreV1ResourceQuotaModelOptions as IoK8sApiCoreV1ResourceQuota,
  IoK8sApiCoreV1SecretModelOptions as IoK8sApiCoreV1Secret,
  IoK8sApiCoreV1ServiceModelOptions as IoK8sApiCoreV1Service,
  IoK8sApiCoreV1ServiceAccountModelOptions as IoK8sApiCoreV1ServiceAccount,
  IoK8sApiPolicyV1EvictionModelOptions as IoK8sApiPolicyV1Eviction,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface ConnectCoreV1DeleteNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1DeleteNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1DeleteNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1DeleteNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1DeleteNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1DeleteNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNamespacedPodAttachParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
}

export interface ConnectCoreV1GetNamespacedPodExecParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    command?: string;
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
}

export interface ConnectCoreV1GetNamespacedPodPortforwardParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    ports?: number;
  };
}

export interface ConnectCoreV1GetNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1GetNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1HeadNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1OptionsNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PatchNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNamespacedPodAttachParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
}

export interface ConnectCoreV1PostNamespacedPodExecParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    command?: string;
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
}

export interface ConnectCoreV1PostNamespacedPodPortforwardParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    ports?: number;
  };
}

export interface ConnectCoreV1PostNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PostNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNamespacedPodProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNamespacedPodProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNamespacedServiceProxyParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNamespacedServiceProxyWithPathParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNodeProxyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface ConnectCoreV1PutNodeProxyWithPathParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    path?: string;
  };
}

export interface CreateCoreV1NamespaceParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Namespace;
}

export interface CreateCoreV1NamespacedBindingParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiCoreV1Binding;
}

export interface CreateCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ConfigMap;
}

export interface CreateCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Endpoints;
}

export interface CreateCoreV1NamespacedEventParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Event;
}

export interface CreateCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1LimitRange;
}

export interface CreateCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolumeClaim;
}

export interface CreateCoreV1NamespacedPodParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Pod;
}

export interface CreateCoreV1NamespacedPodBindingParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiCoreV1Binding;
}

export interface CreateCoreV1NamespacedPodEvictionParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiPolicyV1Eviction;
}

export interface CreateCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PodTemplate;
}

export interface CreateCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ReplicationController;
}

export interface CreateCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ResourceQuota;
}

export interface CreateCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Secret;
}

export interface CreateCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Service;
}

export interface CreateCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ServiceAccount;
}

export interface CreateCoreV1NamespacedServiceAccountTokenParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthenticationV1TokenRequest;
}

export interface CreateCoreV1NodeParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Node;
}

export interface CreateCoreV1PersistentVolumeParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolume;
}

export interface DeleteCoreV1CollectionNamespacedConfigMapParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedEndpointsParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedEventParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedLimitRangeParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedPodParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedPodTemplateParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedReplicationControllerParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedResourceQuotaParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedSecretParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedServiceParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNamespacedServiceAccountParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionNodeParams extends BaseParams {
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1CollectionPersistentVolumeParams extends BaseParams {
  query?: {
    pretty?: string;
    continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespaceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedEventParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedPodParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1NodeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteCoreV1PersistentVolumeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  body: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListCoreV1ComponentStatusParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1ConfigMapForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1EndpointsForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1EventForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1LimitRangeForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespaceParams extends BaseParams {
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedEventParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedPodParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1NodeParams extends BaseParams {
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1PersistentVolumeParams extends BaseParams {
  query?: {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1PersistentVolumeClaimForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1PodForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1PodTemplateForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1ReplicationControllerForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1ResourceQuotaForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1SecretForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1ServiceAccountForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface ListCoreV1ServiceForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface PatchCoreV1NamespaceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespaceStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedEventParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPersistentVolumeClaimStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPodParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPodEphemeralcontainersParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPodStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedReplicationControllerScaleParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedReplicationControllerStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedResourceQuotaStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NamespacedServiceStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NodeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1NodeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1PersistentVolumeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface PatchCoreV1PersistentVolumeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
  };
  body: any;
}

export interface ReadCoreV1ComponentStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespaceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespaceStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedEventParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPersistentVolumeClaimStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPodParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPodEphemeralcontainersParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPodLogParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    container?: string;
    follow?: boolean;
    insecureSkipTLSVerifyBackend?: boolean;
    limitBytes?: number;
    pretty?: string;
    previous?: boolean;
    sinceSeconds?: number;
    tailLines?: number;
    timestamps?: boolean;
  };
}

export interface ReadCoreV1NamespacedPodStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedReplicationControllerScaleParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedReplicationControllerStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedResourceQuotaStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NamespacedServiceStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NodeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1NodeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1PersistentVolumeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadCoreV1PersistentVolumeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceCoreV1NamespaceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Namespace;
}

export interface ReplaceCoreV1NamespaceFinalizeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiCoreV1Namespace;
}

export interface ReplaceCoreV1NamespaceStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Namespace;
}

export interface ReplaceCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ConfigMap;
}

export interface ReplaceCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Endpoints;
}

export interface ReplaceCoreV1NamespacedEventParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Event;
}

export interface ReplaceCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1LimitRange;
}

export interface ReplaceCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolumeClaim;
}

export interface ReplaceCoreV1NamespacedPersistentVolumeClaimStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolumeClaim;
}

export interface ReplaceCoreV1NamespacedPodParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Pod;
}

export interface ReplaceCoreV1NamespacedPodEphemeralcontainersParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Pod;
}

export interface ReplaceCoreV1NamespacedPodStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Pod;
}

export interface ReplaceCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PodTemplate;
}

export interface ReplaceCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ReplicationController;
}

export interface ReplaceCoreV1NamespacedReplicationControllerScaleParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAutoscalingV1Scale;
}

export interface ReplaceCoreV1NamespacedReplicationControllerStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ReplicationController;
}

export interface ReplaceCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ResourceQuota;
}

export interface ReplaceCoreV1NamespacedResourceQuotaStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ResourceQuota;
}

export interface ReplaceCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Secret;
}

export interface ReplaceCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Service;
}

export interface ReplaceCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1ServiceAccount;
}

export interface ReplaceCoreV1NamespacedServiceStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Service;
}

export interface ReplaceCoreV1NodeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Node;
}

export interface ReplaceCoreV1NodeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1Node;
}

export interface ReplaceCoreV1PersistentVolumeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolume;
}

export interface ReplaceCoreV1PersistentVolumeStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiCoreV1PersistentVolume;
}

export interface WatchCoreV1ConfigMapListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1EndpointsListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1EventListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1LimitRangeListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespaceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespaceListParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedConfigMapParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedConfigMapListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedEndpointsParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedEndpointsListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedEventParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedEventListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedLimitRangeParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedLimitRangeListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPersistentVolumeClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPersistentVolumeClaimListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPodParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPodListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPodTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedPodTemplateListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedReplicationControllerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedReplicationControllerListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedResourceQuotaParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedResourceQuotaListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedSecretParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedSecretListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedServiceParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedServiceAccountParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedServiceAccountListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NamespacedServiceListParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NodeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1NodeListParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1PersistentVolumeParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1PersistentVolumeClaimListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1PersistentVolumeListParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1PodListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1PodTemplateListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1ReplicationControllerListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1ResourceQuotaListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1SecretListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1ServiceAccountListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export interface WatchCoreV1ServiceListForAllNamespacesParams extends BaseParams {
  query?: {
    allowWatchBookmarks?: boolean;
    continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
  };
}

export default {};
