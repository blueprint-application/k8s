import {
  IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContext,
  IoK8sApiResourceV1alpha2ResourceClaimModelOptions as IoK8sApiResourceV1alpha2ResourceClaim,
  IoK8sApiResourceV1alpha2ResourceClaimTemplateModelOptions as IoK8sApiResourceV1alpha2ResourceClaimTemplate,
  IoK8sApiResourceV1alpha2ResourceClassModelOptions as IoK8sApiResourceV1alpha2ResourceClass,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiResourceV1alpha2PodSchedulingContext;
}

export interface CreateResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiResourceV1alpha2ResourceClaim;
}

export interface CreateResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiResourceV1alpha2ResourceClaimTemplate;
}

export interface CreateResourceV1alpha2ResourceClassParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiResourceV1alpha2ResourceClass;
}

export interface DeleteResourceV1alpha2CollectionNamespacedPodSchedulingContextParams extends BaseParams {
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

export interface DeleteResourceV1alpha2CollectionNamespacedResourceClaimParams extends BaseParams {
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

export interface DeleteResourceV1alpha2CollectionNamespacedResourceClaimTemplateParams extends BaseParams {
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

export interface DeleteResourceV1alpha2CollectionResourceClassParams extends BaseParams {
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

export interface DeleteResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
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

export interface DeleteResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
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

export interface DeleteResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
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

export interface DeleteResourceV1alpha2ResourceClassParams extends BaseParams {
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

export interface ListResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
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

export interface ListResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
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

export interface ListResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
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

export interface ListResourceV1alpha2PodSchedulingContextForAllNamespacesParams extends BaseParams {
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

export interface ListResourceV1alpha2ResourceClaimForAllNamespacesParams extends BaseParams {
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

export interface ListResourceV1alpha2ResourceClaimTemplateForAllNamespacesParams extends BaseParams {
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

export interface ListResourceV1alpha2ResourceClassParams extends BaseParams {
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

export interface PatchResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
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

export interface PatchResourceV1alpha2NamespacedPodSchedulingContextStatusParams extends BaseParams {
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

export interface PatchResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
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

export interface PatchResourceV1alpha2NamespacedResourceClaimStatusParams extends BaseParams {
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

export interface PatchResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
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

export interface PatchResourceV1alpha2ResourceClassParams extends BaseParams {
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

export interface ReadResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadResourceV1alpha2NamespacedPodSchedulingContextStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadResourceV1alpha2NamespacedResourceClaimStatusParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
  path: {
    name: string;
    namespace: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadResourceV1alpha2ResourceClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
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
  body: IoK8sApiResourceV1alpha2PodSchedulingContext;
}

export interface ReplaceResourceV1alpha2NamespacedPodSchedulingContextStatusParams extends BaseParams {
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
  body: IoK8sApiResourceV1alpha2PodSchedulingContext;
}

export interface ReplaceResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
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
  body: IoK8sApiResourceV1alpha2ResourceClaim;
}

export interface ReplaceResourceV1alpha2NamespacedResourceClaimStatusParams extends BaseParams {
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
  body: IoK8sApiResourceV1alpha2ResourceClaim;
}

export interface ReplaceResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
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
  body: IoK8sApiResourceV1alpha2ResourceClaimTemplate;
}

export interface ReplaceResourceV1alpha2ResourceClassParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiResourceV1alpha2ResourceClass;
}

export interface WatchResourceV1alpha2NamespacedPodSchedulingContextParams extends BaseParams {
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

export interface WatchResourceV1alpha2NamespacedPodSchedulingContextListParams extends BaseParams {
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

export interface WatchResourceV1alpha2NamespacedResourceClaimParams extends BaseParams {
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

export interface WatchResourceV1alpha2NamespacedResourceClaimListParams extends BaseParams {
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

export interface WatchResourceV1alpha2NamespacedResourceClaimTemplateParams extends BaseParams {
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

export interface WatchResourceV1alpha2NamespacedResourceClaimTemplateListParams extends BaseParams {
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

export interface WatchResourceV1alpha2PodSchedulingContextListForAllNamespacesParams extends BaseParams {
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

export interface WatchResourceV1alpha2ResourceClaimListForAllNamespacesParams extends BaseParams {
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

export interface WatchResourceV1alpha2ResourceClaimTemplateListForAllNamespacesParams extends BaseParams {
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

export interface WatchResourceV1alpha2ResourceClassParams extends BaseParams {
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

export interface WatchResourceV1alpha2ResourceClassListParams extends BaseParams {
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
