import { IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModelOptions as IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec } from '../IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1alpha2ResourceClaimTemplateModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiResourceV1alpha2ResourceClaimTemplateSpec;
}
