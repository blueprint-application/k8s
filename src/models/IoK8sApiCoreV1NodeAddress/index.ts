import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeAddressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeAddressModel extends BaseModel {
  // The node address.
  address: string;
  // Node address type, one of Hostname, ExternalIP or InternalIP.
  type: string;

  constructor(data: IoK8sApiCoreV1NodeAddressModelOptions) {
    super();
    validate(data);
    this.address = data.address;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1NodeAddressModelOptions): IoK8sApiCoreV1NodeAddressModel {
    return new IoK8sApiCoreV1NodeAddressModel(data);
  }

  toObject(): Partial<this> {
    return {
      address: this.address,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeAddressModel;
