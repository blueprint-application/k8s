import { IoK8sApiCoreV1EndpointAddressModelOptions as IoK8sApiCoreV1EndpointAddress } from '../IoK8sApiCoreV1EndpointAddress';
import { IoK8sApiCoreV1EndpointPortModelOptions as IoK8sApiCoreV1EndpointPort } from '../IoK8sApiCoreV1EndpointPort';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EndpointSubsetModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EndpointSubsetModel extends BaseModel {
  // IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
  addresses?: Array<IoK8sApiCoreV1EndpointAddress>;
  // IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
  notReadyAddresses?: Array<IoK8sApiCoreV1EndpointAddress>;
  // Port numbers available on the related IP addresses.
  ports?: Array<IoK8sApiCoreV1EndpointPort>;

  constructor(data: IoK8sApiCoreV1EndpointSubsetModelOptions) {
    super();
    validate(data);
    this.addresses = data.addresses;
    this.notReadyAddresses = data.notReadyAddresses;
    this.ports = data.ports;
  }

  static create(data: IoK8sApiCoreV1EndpointSubsetModelOptions): IoK8sApiCoreV1EndpointSubsetModel {
    return new IoK8sApiCoreV1EndpointSubsetModel(data);
  }

  toObject(): Partial<this> {
    return {
      addresses: this.addresses,
      notReadyAddresses: this.notReadyAddresses,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EndpointSubsetModel;
