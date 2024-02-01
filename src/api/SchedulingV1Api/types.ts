import {
  IoK8sApiSchedulingV1PriorityClassModelOptions as IoK8sApiSchedulingV1PriorityClass,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateSchedulingV1PriorityClassParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiSchedulingV1PriorityClass;
}

export interface DeleteSchedulingV1CollectionPriorityClassParams extends BaseParams {
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

export interface DeleteSchedulingV1PriorityClassParams extends BaseParams {
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

export interface ListSchedulingV1PriorityClassParams extends BaseParams {
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

export interface PatchSchedulingV1PriorityClassParams extends BaseParams {
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

export interface ReadSchedulingV1PriorityClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceSchedulingV1PriorityClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiSchedulingV1PriorityClass;
}

export interface WatchSchedulingV1PriorityClassParams extends BaseParams {
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

export interface WatchSchedulingV1PriorityClassListParams extends BaseParams {
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
