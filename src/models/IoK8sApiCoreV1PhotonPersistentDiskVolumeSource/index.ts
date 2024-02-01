import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // pdID is the ID that identifies Photon Controller persistent disk
  pdID: string;

  constructor(data: IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.pdID = data.pdID;
  }

  static create(
    data: IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModelOptions,
  ): IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModel {
    return new IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      pdID: this.pdID,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModel;
