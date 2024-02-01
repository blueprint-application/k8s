import { IoK8sApiStorageV1VolumeAttachmentSpecModelOptions as IoK8sApiStorageV1VolumeAttachmentSpec } from '../IoK8sApiStorageV1VolumeAttachmentSpec';
import { IoK8sApiStorageV1VolumeAttachmentStatusModelOptions as IoK8sApiStorageV1VolumeAttachmentStatus } from '../IoK8sApiStorageV1VolumeAttachmentStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeAttachmentModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeAttachmentModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1VolumeAttachmentSpec;
  status?: IoK8sApiStorageV1VolumeAttachmentStatus;

  constructor(data: IoK8sApiStorageV1VolumeAttachmentModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiStorageV1VolumeAttachmentModelOptions): IoK8sApiStorageV1VolumeAttachmentModel {
    return new IoK8sApiStorageV1VolumeAttachmentModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeAttachmentModel;
