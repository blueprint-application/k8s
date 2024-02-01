import { IoK8sApiStorageV1VolumeAttachmentSourceModelOptions as IoK8sApiStorageV1VolumeAttachmentSource } from '../IoK8sApiStorageV1VolumeAttachmentSource';

export interface IoK8sApiStorageV1VolumeAttachmentSpecModelOptions {
  attacher: string;
  nodeName: string;
  source: IoK8sApiStorageV1VolumeAttachmentSource;
}
