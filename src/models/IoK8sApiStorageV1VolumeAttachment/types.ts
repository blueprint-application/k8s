import { IoK8sApiStorageV1VolumeAttachmentSpecModelOptions as IoK8sApiStorageV1VolumeAttachmentSpec } from '../IoK8sApiStorageV1VolumeAttachmentSpec';
import { IoK8sApiStorageV1VolumeAttachmentStatusModelOptions as IoK8sApiStorageV1VolumeAttachmentStatus } from '../IoK8sApiStorageV1VolumeAttachmentStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1VolumeAttachmentModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1VolumeAttachmentSpec;
  status?: IoK8sApiStorageV1VolumeAttachmentStatus;
}
