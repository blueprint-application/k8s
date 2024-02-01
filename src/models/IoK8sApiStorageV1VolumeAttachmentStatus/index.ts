import { IoK8sApiStorageV1VolumeErrorModelOptions as IoK8sApiStorageV1VolumeError } from '../IoK8sApiStorageV1VolumeError';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeAttachmentStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeAttachmentStatusModel extends BaseModel {
  attachError?: IoK8sApiStorageV1VolumeError;
  // attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
  attached: boolean;
  // attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
  attachmentMetadata?: { [key: string]: string };
  detachError?: IoK8sApiStorageV1VolumeError;

  constructor(data: IoK8sApiStorageV1VolumeAttachmentStatusModelOptions) {
    super();
    validate(data);
    this.attachError = data.attachError;
    this.attached = data.attached;
    this.attachmentMetadata = data.attachmentMetadata;
    this.detachError = data.detachError;
  }

  static create(
    data: IoK8sApiStorageV1VolumeAttachmentStatusModelOptions,
  ): IoK8sApiStorageV1VolumeAttachmentStatusModel {
    return new IoK8sApiStorageV1VolumeAttachmentStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      attachError: this.attachError,
      attached: this.attached,
      attachmentMetadata: this.attachmentMetadata,
      detachError: this.detachError,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeAttachmentStatusModel;
