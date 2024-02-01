import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiPolicyV1PodDisruptionBudgetSpecModelOptions {
  maxUnavailable?: string;
  minAvailable?: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  unhealthyPodEvictionPolicy?: string;
}
