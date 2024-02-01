import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeNodeResourcesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeNodeResourcesModel extends BaseModel {
  // count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
  count?: number;

  constructor(data: IoK8sApiStorageV1VolumeNodeResourcesModelOptions) {
    super();
    validate(data);
    this.count = data.count;
  }

  static create(data: IoK8sApiStorageV1VolumeNodeResourcesModelOptions): IoK8sApiStorageV1VolumeNodeResourcesModel {
    return new IoK8sApiStorageV1VolumeNodeResourcesModel(data);
  }

  toObject(): Partial<this> {
    return {
      count: this.count,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeNodeResourcesModel;
