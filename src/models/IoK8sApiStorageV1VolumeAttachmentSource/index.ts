import { IoK8sApiCoreV1PersistentVolumeSpecModelOptions as IoK8sApiCoreV1PersistentVolumeSpec } from '../IoK8sApiCoreV1PersistentVolumeSpec';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeAttachmentSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeAttachmentSourceModel extends BaseModel {
  inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
  // persistentVolumeName represents the name of the persistent volume to attach.
  persistentVolumeName?: string;

  constructor(data: IoK8sApiStorageV1VolumeAttachmentSourceModelOptions) {
    super();
    validate(data);
    this.inlineVolumeSpec = data.inlineVolumeSpec;
    this.persistentVolumeName = data.persistentVolumeName;
  }

  static create(
    data: IoK8sApiStorageV1VolumeAttachmentSourceModelOptions,
  ): IoK8sApiStorageV1VolumeAttachmentSourceModel {
    return new IoK8sApiStorageV1VolumeAttachmentSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      inlineVolumeSpec: this.inlineVolumeSpec,
      persistentVolumeName: this.persistentVolumeName,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeAttachmentSourceModel;
