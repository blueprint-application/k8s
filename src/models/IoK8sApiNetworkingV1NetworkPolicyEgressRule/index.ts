import { IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions as IoK8sApiNetworkingV1NetworkPolicyPeer } from '../IoK8sApiNetworkingV1NetworkPolicyPeer';
import { IoK8sApiNetworkingV1NetworkPolicyPortModelOptions as IoK8sApiNetworkingV1NetworkPolicyPort } from '../IoK8sApiNetworkingV1NetworkPolicyPort';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1NetworkPolicyEgressRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1NetworkPolicyEgressRuleModel extends BaseModel {
  // ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  ports?: Array<IoK8sApiNetworkingV1NetworkPolicyPort>;
  // to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
  to?: Array<IoK8sApiNetworkingV1NetworkPolicyPeer>;

  constructor(data: IoK8sApiNetworkingV1NetworkPolicyEgressRuleModelOptions) {
    super();
    validate(data);
    this.ports = data.ports;
    this.to = data.to;
  }

  static create(
    data: IoK8sApiNetworkingV1NetworkPolicyEgressRuleModelOptions,
  ): IoK8sApiNetworkingV1NetworkPolicyEgressRuleModel {
    return new IoK8sApiNetworkingV1NetworkPolicyEgressRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      ports: this.ports,
      to: this.to,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1NetworkPolicyEgressRuleModel;
