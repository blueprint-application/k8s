import { BaseModel } from '../types';
import type { IoK8sApiCoreV1HostAliasModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1HostAliasModel extends BaseModel {
  // Hostnames for the above IP address.
  hostnames?: Array<string>;
  // IP address of the host file entry.
  ip?: string;

  constructor(data: IoK8sApiCoreV1HostAliasModelOptions) {
    super();
    validate(data);
    this.hostnames = data.hostnames;
    this.ip = data.ip;
  }

  static create(data: IoK8sApiCoreV1HostAliasModelOptions): IoK8sApiCoreV1HostAliasModel {
    return new IoK8sApiCoreV1HostAliasModel(data);
  }

  toObject(): Partial<this> {
    return {
      hostnames: this.hostnames,
      ip: this.ip,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1HostAliasModel;
