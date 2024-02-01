import { IoK8sApimachineryPkgApisMetaV1PreconditionsModelOptions as IoK8sApimachineryPkgApisMetaV1Preconditions } from '../IoK8sApimachineryPkgApisMetaV1Preconditions';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1DeleteOptionsModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
  dryRun?: Array<string>;
  // The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  gracePeriodSeconds?: number;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.
  orphanDependents?: boolean;
  preconditions?: IoK8sApimachineryPkgApisMetaV1Preconditions;
  // Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \'Orphan\' - orphan the dependents; \'Background\' - allow the garbage collector to delete the dependents in the background; \'Foreground\' - a cascading policy that deletes all dependents in the foreground.
  propagationPolicy?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.dryRun = data.dryRun;
    this.gracePeriodSeconds = data.gracePeriodSeconds;
    this.kind = data.kind;
    this.orphanDependents = data.orphanDependents;
    this.preconditions = data.preconditions;
    this.propagationPolicy = data.propagationPolicy;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1DeleteOptionsModel {
    return new IoK8sApimachineryPkgApisMetaV1DeleteOptionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      dryRun: this.dryRun,
      gracePeriodSeconds: this.gracePeriodSeconds,
      kind: this.kind,
      orphanDependents: this.orphanDependents,
      preconditions: this.preconditions,
      propagationPolicy: this.propagationPolicy,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1DeleteOptionsModel;
