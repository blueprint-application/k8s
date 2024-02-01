import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModel extends BaseModel {
  // The CIDR with which clients can match their IP to figure out the server address that they should use.
  clientCIDR: string;
  // Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
  serverAddress: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModelOptions) {
    super();
    validate(data);
    this.clientCIDR = data.clientCIDR;
    this.serverAddress = data.serverAddress;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModel {
    return new IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModel(data);
  }

  toObject(): Partial<this> {
    return {
      clientCIDR: this.clientCIDR,
      serverAddress: this.serverAddress,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModel;
