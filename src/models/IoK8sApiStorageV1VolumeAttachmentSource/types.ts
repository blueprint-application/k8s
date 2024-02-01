import { IoK8sApiCoreV1PersistentVolumeSpecModelOptions as IoK8sApiCoreV1PersistentVolumeSpec } from '../IoK8sApiCoreV1PersistentVolumeSpec';

export interface IoK8sApiStorageV1VolumeAttachmentSourceModelOptions {
  inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
  persistentVolumeName?: string;
}
