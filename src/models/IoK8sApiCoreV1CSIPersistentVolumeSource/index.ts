import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1CSIPersistentVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1CSIPersistentVolumeSourceModel extends BaseModel {
  controllerExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  controllerPublishSecretRef?: IoK8sApiCoreV1SecretReference;
  // driver is the name of the driver to use for this volume. Required.
  driver: string;
  // fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
  fsType?: string;
  nodeExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  nodePublishSecretRef?: IoK8sApiCoreV1SecretReference;
  nodeStageSecretRef?: IoK8sApiCoreV1SecretReference;
  // readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
  readOnly?: boolean;
  // volumeAttributes of the volume to publish.
  volumeAttributes?: { [key: string]: string };
  // volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
  volumeHandle: string;

  constructor(data: IoK8sApiCoreV1CSIPersistentVolumeSourceModelOptions) {
    super();
    validate(data);
    this.controllerExpandSecretRef = data.controllerExpandSecretRef;
    this.controllerPublishSecretRef = data.controllerPublishSecretRef;
    this.driver = data.driver;
    this.fsType = data.fsType;
    this.nodeExpandSecretRef = data.nodeExpandSecretRef;
    this.nodePublishSecretRef = data.nodePublishSecretRef;
    this.nodeStageSecretRef = data.nodeStageSecretRef;
    this.readOnly = data.readOnly;
    this.volumeAttributes = data.volumeAttributes;
    this.volumeHandle = data.volumeHandle;
  }

  static create(
    data: IoK8sApiCoreV1CSIPersistentVolumeSourceModelOptions,
  ): IoK8sApiCoreV1CSIPersistentVolumeSourceModel {
    return new IoK8sApiCoreV1CSIPersistentVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      controllerExpandSecretRef: this.controllerExpandSecretRef,
      controllerPublishSecretRef: this.controllerPublishSecretRef,
      driver: this.driver,
      fsType: this.fsType,
      nodeExpandSecretRef: this.nodeExpandSecretRef,
      nodePublishSecretRef: this.nodePublishSecretRef,
      nodeStageSecretRef: this.nodeStageSecretRef,
      readOnly: this.readOnly,
      volumeAttributes: this.volumeAttributes,
      volumeHandle: this.volumeHandle,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1CSIPersistentVolumeSourceModel;
