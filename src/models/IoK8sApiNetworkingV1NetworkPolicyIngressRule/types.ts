import { IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions as IoK8sApiNetworkingV1NetworkPolicyPeer } from '../IoK8sApiNetworkingV1NetworkPolicyPeer';
import { IoK8sApiNetworkingV1NetworkPolicyPortModelOptions as IoK8sApiNetworkingV1NetworkPolicyPort } from '../IoK8sApiNetworkingV1NetworkPolicyPort';

export interface IoK8sApiNetworkingV1NetworkPolicyIngressRuleModelOptions {
  _from?: Array<IoK8sApiNetworkingV1NetworkPolicyPeer>;
  ports?: Array<IoK8sApiNetworkingV1NetworkPolicyPort>;
}
