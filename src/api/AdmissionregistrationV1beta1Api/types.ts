import {
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModelOptions as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingModelOptions as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy;
}

export interface CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding;
}

export interface DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyParams extends BaseParams {
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

export interface DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBindingParams extends BaseParams {
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

export interface DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
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

export interface DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
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

export interface ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
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

export interface ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
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

export interface PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
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

export interface PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
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

export interface PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams extends BaseParams {
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

export interface ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
  };
}

export interface ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy;
}

export interface ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding;
}

export interface ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
  };
  body: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy;
}

export interface WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams extends BaseParams {
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

export interface WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams extends BaseParams {
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

export interface WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingListParams extends BaseParams {
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

export interface WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyListParams extends BaseParams {
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
