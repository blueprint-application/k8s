import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IPBlockModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IPBlockModel extends BaseModel {
  // cidr is a string representing the IPBlock Valid examples are \"192.168.1.0/24\" or \"2001:db8::/64\"
  cidr: string;
  // except is a slice of CIDRs that should not be included within an IPBlock Valid examples are \"192.168.1.0/24\" or \"2001:db8::/64\" Except values will be rejected if they are outside the cidr range
  except?: Array<string>;

  constructor(data: IoK8sApiNetworkingV1IPBlockModelOptions) {
    super();
    validate(data);
    this.cidr = data.cidr;
    this.except = data.except;
  }

  static create(data: IoK8sApiNetworkingV1IPBlockModelOptions): IoK8sApiNetworkingV1IPBlockModel {
    return new IoK8sApiNetworkingV1IPBlockModel(data);
  }

  toObject(): Partial<this> {
    return {
      cidr: this.cidr,
      except: this.except,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IPBlockModel;
