import { BaseModel } from '../types';
import type { IoK8sApiCoreV1FCVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1FCVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // lun is Optional: FC target lun number
  lun?: number;
  // readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  // targetWWNs is Optional: FC target worldwide names (WWNs)
  targetWWNs?: Array<string>;
  // wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  wwids?: Array<string>;

  constructor(data: IoK8sApiCoreV1FCVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.lun = data.lun;
    this.readOnly = data.readOnly;
    this.targetWWNs = data.targetWWNs;
    this.wwids = data.wwids;
  }

  static create(data: IoK8sApiCoreV1FCVolumeSourceModelOptions): IoK8sApiCoreV1FCVolumeSourceModel {
    return new IoK8sApiCoreV1FCVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      lun: this.lun,
      readOnly: this.readOnly,
      targetWWNs: this.targetWWNs,
      wwids: this.wwids,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1FCVolumeSourceModel;
