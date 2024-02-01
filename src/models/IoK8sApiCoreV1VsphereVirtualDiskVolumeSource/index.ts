import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModel extends BaseModel {
  // fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  storagePolicyID?: string;
  // storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  storagePolicyName?: string;
  // volumePath is the path that identifies vSphere volume vmdk
  volumePath: string;

  constructor(data: IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.storagePolicyID = data.storagePolicyID;
    this.storagePolicyName = data.storagePolicyName;
    this.volumePath = data.volumePath;
  }

  static create(
    data: IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModelOptions,
  ): IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModel {
    return new IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      storagePolicyID: this.storagePolicyID,
      storagePolicyName: this.storagePolicyName,
      volumePath: this.volumePath,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModel;
