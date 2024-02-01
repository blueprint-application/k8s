import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModel extends BaseModel {
  // CIDRs defines the IP blocks in CIDR notation (e.g. \"192.168.0.0/24\" or \"2001:db8::/64\") from which to assign service cluster IPs. Max of two CIDRs is allowed, one of each IP family. This field is immutable.
  cidrs?: Array<string>;

  constructor(data: IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModelOptions) {
    super();
    validate(data);
    this.cidrs = data.cidrs;
  }

  static create(
    data: IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModelOptions,
  ): IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModel {
    return new IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      cidrs: this.cidrs,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModel;
