import { BaseModel } from '../types';
import type { IoK8sApiCoreV1QuobyteVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1QuobyteVolumeSourceModel extends BaseModel {
  // group to map volume access to Default is no group
  group?: string;
  // readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  readOnly?: boolean;
  // registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  registry: string;
  // tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  tenant?: string;
  // user to map volume access to Defaults to serivceaccount user
  user?: string;
  // volume is a string that references an already created Quobyte volume by name.
  volume: string;

  constructor(data: IoK8sApiCoreV1QuobyteVolumeSourceModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.readOnly = data.readOnly;
    this.registry = data.registry;
    this.tenant = data.tenant;
    this.user = data.user;
    this.volume = data.volume;
  }

  static create(data: IoK8sApiCoreV1QuobyteVolumeSourceModelOptions): IoK8sApiCoreV1QuobyteVolumeSourceModel {
    return new IoK8sApiCoreV1QuobyteVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      readOnly: this.readOnly,
      registry: this.registry,
      tenant: this.tenant,
      user: this.user,
      volume: this.volume,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1QuobyteVolumeSourceModel;
