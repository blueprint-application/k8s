import { IoK8sApiResourceV1alpha2ResourceClaimModelOptions as IoK8sApiResourceV1alpha2ResourceClaim } from '../IoK8sApiResourceV1alpha2ResourceClaim';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiResourceV1alpha2ResourceClaimListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiResourceV1alpha2ResourceClaim>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
