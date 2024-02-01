import {
  IoK8sApiAutoscalingV2HorizontalPodAutoscalerModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscaler,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAutoscalingV2HorizontalPodAutoscaler;
}

export interface DeleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscalerParams extends BaseParams {
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

export interface DeleteAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
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

export interface ListAutoscalingV2HorizontalPodAutoscalerForAllNamespacesParams extends BaseParams {
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

export interface ListAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
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

export interface PatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
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

export interface PatchAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams extends BaseParams {
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

export interface ReadAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
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
  body: IoK8sApiAutoscalingV2HorizontalPodAutoscaler;
}

export interface ReplaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatusParams extends BaseParams {
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
  body: IoK8sApiAutoscalingV2HorizontalPodAutoscaler;
}

export interface WatchAutoscalingV2HorizontalPodAutoscalerListForAllNamespacesParams extends BaseParams {
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

export interface WatchAutoscalingV2NamespacedHorizontalPodAutoscalerParams extends BaseParams {
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

export interface WatchAutoscalingV2NamespacedHorizontalPodAutoscalerListParams extends BaseParams {
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

export default {};
