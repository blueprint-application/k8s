import { IoK8sApiStorageV1VolumeErrorModelOptions as IoK8sApiStorageV1VolumeError } from '../IoK8sApiStorageV1VolumeError';

export interface IoK8sApiStorageV1VolumeAttachmentStatusModelOptions {
  attachError?: IoK8sApiStorageV1VolumeError;
  attached: boolean;
  attachmentMetadata?: { [key: string]: string };
  detachError?: IoK8sApiStorageV1VolumeError;
}
