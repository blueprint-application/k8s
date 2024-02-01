import { IoK8sApiStorageV1VolumeAttachmentModelOptions as IoK8sApiStorageV1VolumeAttachment } from '../IoK8sApiStorageV1VolumeAttachment';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeAttachmentListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeAttachmentListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is the list of VolumeAttachments
  items: Array<IoK8sApiStorageV1VolumeAttachment>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiStorageV1VolumeAttachmentListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiStorageV1VolumeAttachmentListModelOptions): IoK8sApiStorageV1VolumeAttachmentListModel {
    return new IoK8sApiStorageV1VolumeAttachmentListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      items: this.items,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeAttachmentListModel;
