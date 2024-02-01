import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1CSIVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1CSIVolumeSourceModel extends BaseModel {
  // driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  driver: string;
  // fsType to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  fsType?: string;
  nodePublishSecretRef?: IoK8sApiCoreV1LocalObjectReference;
  // readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  readOnly?: boolean;
  // volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver\'s documentation for supported values.
  volumeAttributes?: { [key: string]: string };

  constructor(data: IoK8sApiCoreV1CSIVolumeSourceModelOptions) {
    super();
    validate(data);
    this.driver = data.driver;
    this.fsType = data.fsType;
    this.nodePublishSecretRef = data.nodePublishSecretRef;
    this.readOnly = data.readOnly;
    this.volumeAttributes = data.volumeAttributes;
  }

  static create(data: IoK8sApiCoreV1CSIVolumeSourceModelOptions): IoK8sApiCoreV1CSIVolumeSourceModel {
    return new IoK8sApiCoreV1CSIVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      driver: this.driver,
      fsType: this.fsType,
      nodePublishSecretRef: this.nodePublishSecretRef,
      readOnly: this.readOnly,
      volumeAttributes: this.volumeAttributes,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1CSIVolumeSourceModel;
