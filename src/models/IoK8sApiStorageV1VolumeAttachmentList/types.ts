import { IoK8sApiStorageV1VolumeAttachmentModelOptions as IoK8sApiStorageV1VolumeAttachment } from '../IoK8sApiStorageV1VolumeAttachment';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiStorageV1VolumeAttachmentListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiStorageV1VolumeAttachment>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
