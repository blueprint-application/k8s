import {
  IoK8sApiPolicyV1PodDisruptionBudgetModelOptions as IoK8sApiPolicyV1PodDisruptionBudget,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreatePolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiPolicyV1PodDisruptionBudget;
}

export interface DeletePolicyV1CollectionNamespacedPodDisruptionBudgetParams extends BaseParams {
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

export interface DeletePolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
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

export interface ListPolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
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

export interface ListPolicyV1PodDisruptionBudgetForAllNamespacesParams extends BaseParams {
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

export interface PatchPolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
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

export interface PatchPolicyV1NamespacedPodDisruptionBudgetStatusParams extends BaseParams {
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

export interface ReadPolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadPolicyV1NamespacedPodDisruptionBudgetStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplacePolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
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
  body: IoK8sApiPolicyV1PodDisruptionBudget;
}

export interface ReplacePolicyV1NamespacedPodDisruptionBudgetStatusParams extends BaseParams {
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
  body: IoK8sApiPolicyV1PodDisruptionBudget;
}

export interface WatchPolicyV1NamespacedPodDisruptionBudgetParams extends BaseParams {
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

export interface WatchPolicyV1NamespacedPodDisruptionBudgetListParams extends BaseParams {
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

export interface WatchPolicyV1PodDisruptionBudgetListForAllNamespacesParams extends BaseParams {
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
