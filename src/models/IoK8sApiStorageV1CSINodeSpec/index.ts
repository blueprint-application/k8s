import { IoK8sApiStorageV1CSINodeDriverModelOptions as IoK8sApiStorageV1CSINodeDriver } from '../IoK8sApiStorageV1CSINodeDriver';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1CSINodeSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1CSINodeSpecModel extends BaseModel {
  // drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
  drivers: Array<IoK8sApiStorageV1CSINodeDriver>;

  constructor(data: IoK8sApiStorageV1CSINodeSpecModelOptions) {
    super();
    validate(data);
    this.drivers = data.drivers;
  }

  static create(data: IoK8sApiStorageV1CSINodeSpecModelOptions): IoK8sApiStorageV1CSINodeSpecModel {
    return new IoK8sApiStorageV1CSINodeSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      drivers: this.drivers,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1CSINodeSpecModel;
