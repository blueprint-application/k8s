import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PortworxVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PortworxVolumeSourceModel extends BaseModel {
  // fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  // volumeID uniquely identifies a Portworx volume
  volumeID: string;

  constructor(data: IoK8sApiCoreV1PortworxVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.readOnly = data.readOnly;
    this.volumeID = data.volumeID;
  }

  static create(data: IoK8sApiCoreV1PortworxVolumeSourceModelOptions): IoK8sApiCoreV1PortworxVolumeSourceModel {
    return new IoK8sApiCoreV1PortworxVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      readOnly: this.readOnly,
      volumeID: this.volumeID,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PortworxVolumeSourceModel;
