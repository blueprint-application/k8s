import { IoK8sApiNetworkingV1NetworkPolicyEgressRuleModelOptions as IoK8sApiNetworkingV1NetworkPolicyEgressRule } from '../IoK8sApiNetworkingV1NetworkPolicyEgressRule';
import { IoK8sApiNetworkingV1NetworkPolicyIngressRuleModelOptions as IoK8sApiNetworkingV1NetworkPolicyIngressRule } from '../IoK8sApiNetworkingV1NetworkPolicyIngressRule';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiNetworkingV1NetworkPolicySpecModelOptions {
  egress?: Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>;
  ingress?: Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>;
  podSelector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  policyTypes?: Array<string>;
}
