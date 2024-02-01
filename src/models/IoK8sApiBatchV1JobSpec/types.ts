import { IoK8sApiBatchV1PodFailurePolicyModelOptions as IoK8sApiBatchV1PodFailurePolicy } from '../IoK8sApiBatchV1PodFailurePolicy';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiBatchV1JobSpecModelOptions {
  activeDeadlineSeconds?: number;
  backoffLimit?: number;
  backoffLimitPerIndex?: number;
  completionMode?: string;
  completions?: number;
  manualSelector?: boolean;
  maxFailedIndexes?: number;
  parallelism?: number;
  podFailurePolicy?: IoK8sApiBatchV1PodFailurePolicy;
  podReplacementPolicy?: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  suspend?: boolean;
  template: IoK8sApiCoreV1PodTemplateSpec;
  ttlSecondsAfterFinished?: number;
}
