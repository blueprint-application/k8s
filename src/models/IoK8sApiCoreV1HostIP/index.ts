import { BaseModel } from '../types';
import type { IoK8sApiCoreV1HostIPModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1HostIPModel extends BaseModel {
  // IP is the IP address assigned to the host
  ip?: string;

  constructor(data: IoK8sApiCoreV1HostIPModelOptions) {
    super();
    validate(data);
    this.ip = data.ip;
  }

  static create(data: IoK8sApiCoreV1HostIPModelOptions): IoK8sApiCoreV1HostIPModel {
    return new IoK8sApiCoreV1HostIPModel(data);
  }

  toObject(): Partial<this> {
    return {
      ip: this.ip,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1HostIPModel;
