import { IoK8sApiResourceV1alpha2PodSchedulingContextSpecModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContextSpec } from '../IoK8sApiResourceV1alpha2PodSchedulingContextSpec';
import { IoK8sApiResourceV1alpha2PodSchedulingContextStatusModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContextStatus } from '../IoK8sApiResourceV1alpha2PodSchedulingContextStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiResourceV1alpha2PodSchedulingContextSpec;
  status?: IoK8sApiResourceV1alpha2PodSchedulingContextStatus;
}
