import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1CinderVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1CinderVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  fsType?: string;
  // readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  // volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  volumeID: string;

  constructor(data: IoK8sApiCoreV1CinderVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
    this.volumeID = data.volumeID;
  }

  static create(data: IoK8sApiCoreV1CinderVolumeSourceModelOptions): IoK8sApiCoreV1CinderVolumeSourceModel {
    return new IoK8sApiCoreV1CinderVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
      volumeID: this.volumeID,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1CinderVolumeSourceModel;
