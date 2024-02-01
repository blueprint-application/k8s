import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AzureDiskVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AzureDiskVolumeSourceModel extends BaseModel {
  // cachingMode is the Host Caching mode: None, Read Only, Read Write.
  cachingMode?: string;
  // diskName is the Name of the data disk in the blob storage
  diskName: string;
  // diskURI is the URI of data disk in the blob storage
  diskURI: string;
  // fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
  kind?: string;
  // readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;

  constructor(data: IoK8sApiCoreV1AzureDiskVolumeSourceModelOptions) {
    super();
    validate(data);
    this.cachingMode = data.cachingMode;
    this.diskName = data.diskName;
    this.diskURI = data.diskURI;
    this.fsType = data.fsType;
    this.kind = data.kind;
    this.readOnly = data.readOnly;
  }

  static create(data: IoK8sApiCoreV1AzureDiskVolumeSourceModelOptions): IoK8sApiCoreV1AzureDiskVolumeSourceModel {
    return new IoK8sApiCoreV1AzureDiskVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      cachingMode: this.cachingMode,
      diskName: this.diskName,
      diskURI: this.diskURI,
      fsType: this.fsType,
      kind: this.kind,
      readOnly: this.readOnly,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AzureDiskVolumeSourceModel;
