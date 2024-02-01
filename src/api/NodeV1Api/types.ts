import {
  IoK8sApiNodeV1RuntimeClassModelOptions as IoK8sApiNodeV1RuntimeClass,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateNodeV1RuntimeClassParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiNodeV1RuntimeClass;
}

export interface DeleteNodeV1CollectionRuntimeClassParams extends BaseParams {
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

export interface DeleteNodeV1RuntimeClassParams extends BaseParams {
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

export interface ListNodeV1RuntimeClassParams extends BaseParams {
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

export interface PatchNodeV1RuntimeClassParams extends BaseParams {
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

export interface ReadNodeV1RuntimeClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceNodeV1RuntimeClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiNodeV1RuntimeClass;
}

export interface WatchNodeV1RuntimeClassParams extends BaseParams {
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

export interface WatchNodeV1RuntimeClassListParams extends BaseParams {
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
