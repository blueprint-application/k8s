import { IoK8sApiResourceV1alpha2ResourceClaimSpecModelOptions as IoK8sApiResourceV1alpha2ResourceClaimSpec } from '../IoK8sApiResourceV1alpha2ResourceClaimSpec';
import { IoK8sApiResourceV1alpha2ResourceClaimStatusModelOptions as IoK8sApiResourceV1alpha2ResourceClaimStatus } from '../IoK8sApiResourceV1alpha2ResourceClaimStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1alpha2ResourceClaimModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiResourceV1alpha2ResourceClaimSpec;
  status?: IoK8sApiResourceV1alpha2ResourceClaimStatus;
}
