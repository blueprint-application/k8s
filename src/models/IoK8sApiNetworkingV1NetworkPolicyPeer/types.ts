import { IoK8sApiNetworkingV1IPBlockModelOptions as IoK8sApiNetworkingV1IPBlock } from '../IoK8sApiNetworkingV1IPBlock';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions {
  ipBlock?: IoK8sApiNetworkingV1IPBlock;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  podSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}
