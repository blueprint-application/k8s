import { IoK8sApiBatchV1JobConditionModelOptions as IoK8sApiBatchV1JobCondition } from '../IoK8sApiBatchV1JobCondition';
import { IoK8sApiBatchV1UncountedTerminatedPodsModelOptions as IoK8sApiBatchV1UncountedTerminatedPods } from '../IoK8sApiBatchV1UncountedTerminatedPods';

export interface IoK8sApiBatchV1JobStatusModelOptions {
  active?: number;
  completedIndexes?: string;
  completionTime?: Date;
  conditions?: Array<IoK8sApiBatchV1JobCondition>;
  failed?: number;
  failedIndexes?: string;
  ready?: number;
  startTime?: Date;
  succeeded?: number;
  terminating?: number;
  uncountedTerminatedPods?: IoK8sApiBatchV1UncountedTerminatedPods;
}
