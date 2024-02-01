import { IoK8sApiNetworkingV1IPBlockModelOptions as IoK8sApiNetworkingV1IPBlock } from '../IoK8sApiNetworkingV1IPBlock';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1NetworkPolicyPeerModel extends BaseModel {
  ipBlock?: IoK8sApiNetworkingV1IPBlock;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  podSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;

  constructor(data: IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions) {
    super();
    validate(data);
    this.ipBlock = data.ipBlock;
    this.namespaceSelector = data.namespaceSelector;
    this.podSelector = data.podSelector;
  }

  static create(data: IoK8sApiNetworkingV1NetworkPolicyPeerModelOptions): IoK8sApiNetworkingV1NetworkPolicyPeerModel {
    return new IoK8sApiNetworkingV1NetworkPolicyPeerModel(data);
  }

  toObject(): Partial<this> {
    return {
      ipBlock: this.ipBlock,
      namespaceSelector: this.namespaceSelector,
      podSelector: this.podSelector,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1NetworkPolicyPeerModel;
