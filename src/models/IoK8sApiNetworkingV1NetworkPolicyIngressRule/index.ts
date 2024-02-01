import { IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions as IoK8sApiNetworkingV1NetworkPolicyPeer } from '../IoK8sApiNetworkingV1NetworkPolicyPeer';
import { IoK8sApiNetworkingV1NetworkPolicyPortModelOptions as IoK8sApiNetworkingV1NetworkPolicyPort } from '../IoK8sApiNetworkingV1NetworkPolicyPort';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1NetworkPolicyIngressRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1NetworkPolicyIngressRuleModel extends BaseModel {
  // from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
  _from?: Array<IoK8sApiNetworkingV1NetworkPolicyPeer>;
  // ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
  ports?: Array<IoK8sApiNetworkingV1NetworkPolicyPort>;

  constructor(data: IoK8sApiNetworkingV1NetworkPolicyIngressRuleModelOptions) {
    super();
    validate(data);
    this._from = data._from;
    this.ports = data.ports;
  }

  static create(
    data: IoK8sApiNetworkingV1NetworkPolicyIngressRuleModelOptions,
  ): IoK8sApiNetworkingV1NetworkPolicyIngressRuleModel {
    return new IoK8sApiNetworkingV1NetworkPolicyIngressRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      _from: this._from,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1NetworkPolicyIngressRuleModel;
