import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1FlexVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1FlexVolumeSourceModel extends BaseModel {
  // driver is the name of the driver to use for this volume.
  driver: string;
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
  fsType?: string;
  // options is Optional: this field holds extra command options if any.
  options?: { [key: string]: string };
  // readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;

  constructor(data: IoK8sApiCoreV1FlexVolumeSourceModelOptions) {
    super();
    validate(data);
    this.driver = data.driver;
    this.fsType = data.fsType;
    this.options = data.options;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
  }

  static create(data: IoK8sApiCoreV1FlexVolumeSourceModelOptions): IoK8sApiCoreV1FlexVolumeSourceModel {
    return new IoK8sApiCoreV1FlexVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      driver: this.driver,
      fsType: this.fsType,
      options: this.options,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1FlexVolumeSourceModel;
