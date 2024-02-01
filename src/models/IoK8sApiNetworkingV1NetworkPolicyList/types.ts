import { IoK8sApiNetworkingV1NetworkPolicyModelOptions as IoK8sApiNetworkingV1NetworkPolicy } from '../IoK8sApiNetworkingV1NetworkPolicy';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiNetworkingV1NetworkPolicyListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiNetworkingV1NetworkPolicy>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
