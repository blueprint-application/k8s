import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiResourceV1alpha2ResourceHandleModelOptions as IoK8sApiResourceV1alpha2ResourceHandle } from '../IoK8sApiResourceV1alpha2ResourceHandle';

export interface IoK8sApiResourceV1alpha2AllocationResultModelOptions {
  availableOnNodes?: IoK8sApiCoreV1NodeSelector;
  resourceHandles?: Array<IoK8sApiResourceV1alpha2ResourceHandle>;
  shareable?: boolean;
}
