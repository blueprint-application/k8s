import {
  IoK8sApiBatchV1CronJobModelOptions as IoK8sApiBatchV1CronJob,
  IoK8sApiBatchV1JobModelOptions as IoK8sApiBatchV1Job,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateBatchV1NamespacedCronJobParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiBatchV1CronJob;
}

export interface CreateBatchV1NamespacedJobParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiBatchV1Job;
}

export interface DeleteBatchV1CollectionNamespacedCronJobParams extends BaseParams {
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

export interface DeleteBatchV1CollectionNamespacedJobParams extends BaseParams {
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

export interface DeleteBatchV1NamespacedCronJobParams extends BaseParams {
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

export interface DeleteBatchV1NamespacedJobParams extends BaseParams {
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

export interface ListBatchV1CronJobForAllNamespacesParams extends BaseParams {
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

export interface ListBatchV1JobForAllNamespacesParams extends BaseParams {
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

export interface ListBatchV1NamespacedCronJobParams extends BaseParams {
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

export interface ListBatchV1NamespacedJobParams extends BaseParams {
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

export interface PatchBatchV1NamespacedCronJobParams extends BaseParams {
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

export interface PatchBatchV1NamespacedCronJobStatusParams extends BaseParams {
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

export interface PatchBatchV1NamespacedJobParams extends BaseParams {
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

export interface PatchBatchV1NamespacedJobStatusParams extends BaseParams {
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

export interface ReadBatchV1NamespacedCronJobParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadBatchV1NamespacedCronJobStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadBatchV1NamespacedJobParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadBatchV1NamespacedJobStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceBatchV1NamespacedCronJobParams extends BaseParams {
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
  body: IoK8sApiBatchV1CronJob;
}

export interface ReplaceBatchV1NamespacedCronJobStatusParams extends BaseParams {
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
  body: IoK8sApiBatchV1CronJob;
}

export interface ReplaceBatchV1NamespacedJobParams extends BaseParams {
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
  body: IoK8sApiBatchV1Job;
}

export interface ReplaceBatchV1NamespacedJobStatusParams extends BaseParams {
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
  body: IoK8sApiBatchV1Job;
}

export interface WatchBatchV1CronJobListForAllNamespacesParams extends BaseParams {
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

export interface WatchBatchV1JobListForAllNamespacesParams extends BaseParams {
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

export interface WatchBatchV1NamespacedCronJobParams extends BaseParams {
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

export interface WatchBatchV1NamespacedCronJobListParams extends BaseParams {
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

export interface WatchBatchV1NamespacedJobParams extends BaseParams {
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

export interface WatchBatchV1NamespacedJobListParams extends BaseParams {
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
