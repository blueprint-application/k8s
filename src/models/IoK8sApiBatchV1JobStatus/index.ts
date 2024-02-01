import { IoK8sApiBatchV1JobConditionModelOptions as IoK8sApiBatchV1JobCondition } from '../IoK8sApiBatchV1JobCondition';
import { IoK8sApiBatchV1UncountedTerminatedPodsModelOptions as IoK8sApiBatchV1UncountedTerminatedPods } from '../IoK8sApiBatchV1UncountedTerminatedPods';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1JobStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1JobStatusModel extends BaseModel {
  // The number of pending and running pods.
  active?: number;
  // completedIndexes holds the completed indexes when .spec.completionMode = \"Indexed\" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\".
  completedIndexes?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  completionTime?: Date;
  // The latest available observations of an object\'s current state. When a Job fails, one of the conditions will have type \"Failed\" and status true. When a Job is suspended, one of the conditions will have type \"Suspended\" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type \"Complete\" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
  conditions?: Array<IoK8sApiBatchV1JobCondition>;
  // The number of pods which reached phase Failed.
  failed?: number;
  // FailedIndexes holds the failed indexes when backoffLimitPerIndex=true. The indexes are represented in the text format analogous as for the `completedIndexes` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\". This field is beta-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
  failedIndexes?: string;
  // The number of pods which have a Ready condition.
  ready?: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  startTime?: Date;
  // The number of pods which reached phase Succeeded.
  succeeded?: number;
  // The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).  This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default).
  terminating?: number;
  uncountedTerminatedPods?: IoK8sApiBatchV1UncountedTerminatedPods;

  constructor(data: IoK8sApiBatchV1JobStatusModelOptions) {
    super();
    validate(data);
    this.active = data.active;
    this.completedIndexes = data.completedIndexes;
    this.completionTime = data.completionTime;
    this.conditions = data.conditions;
    this.failed = data.failed;
    this.failedIndexes = data.failedIndexes;
    this.ready = data.ready;
    this.startTime = data.startTime;
    this.succeeded = data.succeeded;
    this.terminating = data.terminating;
    this.uncountedTerminatedPods = data.uncountedTerminatedPods;
  }

  static create(data: IoK8sApiBatchV1JobStatusModelOptions): IoK8sApiBatchV1JobStatusModel {
    return new IoK8sApiBatchV1JobStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      active: this.active,
      completedIndexes: this.completedIndexes,
      completionTime: this.completionTime,
      conditions: this.conditions,
      failed: this.failed,
      failedIndexes: this.failedIndexes,
      ready: this.ready,
      startTime: this.startTime,
      succeeded: this.succeeded,
      terminating: this.terminating,
      uncountedTerminatedPods: this.uncountedTerminatedPods,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1JobStatusModel;
