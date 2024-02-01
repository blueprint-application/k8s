import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ScaleIOVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ScaleIOVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
  fsType?: string;
  // gateway is the host address of the ScaleIO API Gateway.
  gateway: string;
  // protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  protectionDomain?: string;
  // readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  secretRef: IoK8sApiCoreV1LocalObjectReference;
  // sslEnabled Flag enable/disable SSL communication with Gateway, default false
  sslEnabled?: boolean;
  // storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  storageMode?: string;
  // storagePool is the ScaleIO Storage Pool associated with the protection domain.
  storagePool?: string;
  // system is the name of the storage system as configured in ScaleIO.
  system: string;
  // volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  volumeName?: string;

  constructor(data: IoK8sApiCoreV1ScaleIOVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.gateway = data.gateway;
    this.protectionDomain = data.protectionDomain;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
    this.sslEnabled = data.sslEnabled;
    this.storageMode = data.storageMode;
    this.storagePool = data.storagePool;
    this.system = data.system;
    this.volumeName = data.volumeName;
  }

  static create(data: IoK8sApiCoreV1ScaleIOVolumeSourceModelOptions): IoK8sApiCoreV1ScaleIOVolumeSourceModel {
    return new IoK8sApiCoreV1ScaleIOVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      gateway: this.gateway,
      protectionDomain: this.protectionDomain,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
      sslEnabled: this.sslEnabled,
      storageMode: this.storageMode,
      storagePool: this.storagePool,
      system: this.system,
      volumeName: this.volumeName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ScaleIOVolumeSourceModel;
