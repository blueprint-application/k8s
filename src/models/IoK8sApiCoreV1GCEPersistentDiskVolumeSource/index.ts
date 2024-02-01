import { BaseModel } from '../types';
import type { IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModel extends BaseModel {
  // fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  fsType?: string;
  // partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  partition?: number;
  // pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  pdName: string;
  // readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  readOnly?: boolean;

  constructor(data: IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.partition = data.partition;
    this.pdName = data.pdName;
    this.readOnly = data.readOnly;
  }

  static create(
    data: IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModelOptions,
  ): IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModel {
    return new IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      partition: this.partition,
      pdName: this.pdName,
      readOnly: this.readOnly,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModel;
