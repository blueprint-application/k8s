import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LocalVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LocalVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default value is to auto-select a filesystem if unspecified.
  fsType?: string;
  // path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
  path: string;

  constructor(data: IoK8sApiCoreV1LocalVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.path = data.path;
  }

  static create(data: IoK8sApiCoreV1LocalVolumeSourceModelOptions): IoK8sApiCoreV1LocalVolumeSourceModel {
    return new IoK8sApiCoreV1LocalVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      path: this.path,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LocalVolumeSourceModel;
