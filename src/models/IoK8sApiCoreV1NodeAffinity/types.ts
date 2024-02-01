import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1PreferredSchedulingTermModelOptions as IoK8sApiCoreV1PreferredSchedulingTerm } from '../IoK8sApiCoreV1PreferredSchedulingTerm';

export interface IoK8sApiCoreV1NodeAffinityModelOptions {
  preferredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1PreferredSchedulingTerm>;
  requiredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1NodeSelector;
}
