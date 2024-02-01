import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1StorageOSVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1StorageOSVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
  fsType?: string;
  // readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  // volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
  volumeName?: string;
  // volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  volumeNamespace?: string;

  constructor(data: IoK8sApiCoreV1StorageOSVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
    this.volumeName = data.volumeName;
    this.volumeNamespace = data.volumeNamespace;
  }

  static create(data: IoK8sApiCoreV1StorageOSVolumeSourceModelOptions): IoK8sApiCoreV1StorageOSVolumeSourceModel {
    return new IoK8sApiCoreV1StorageOSVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
      volumeName: this.volumeName,
      volumeNamespace: this.volumeNamespace,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1StorageOSVolumeSourceModel;
