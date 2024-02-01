import { IoK8sApiCoreV1PodAffinityTermModelOptions as IoK8sApiCoreV1PodAffinityTerm } from '../IoK8sApiCoreV1PodAffinityTerm';
import { IoK8sApiCoreV1WeightedPodAffinityTermModelOptions as IoK8sApiCoreV1WeightedPodAffinityTerm } from '../IoK8sApiCoreV1WeightedPodAffinityTerm';

export interface IoK8sApiCoreV1PodAntiAffinityModelOptions {
  preferredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1WeightedPodAffinityTerm>;
  requiredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1PodAffinityTerm>;
}
