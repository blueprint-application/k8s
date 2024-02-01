import { IoK8sApiStorageV1VolumeAttachmentSourceModelOptions as IoK8sApiStorageV1VolumeAttachmentSource } from '../IoK8sApiStorageV1VolumeAttachmentSource';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeAttachmentSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeAttachmentSpecModel extends BaseModel {
  // attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
  attacher: string;
  // nodeName represents the node that the volume should be attached to.
  nodeName: string;
  source: IoK8sApiStorageV1VolumeAttachmentSource;

  constructor(data: IoK8sApiStorageV1VolumeAttachmentSpecModelOptions) {
    super();
    validate(data);
    this.attacher = data.attacher;
    this.nodeName = data.nodeName;
    this.source = data.source;
  }

  static create(data: IoK8sApiStorageV1VolumeAttachmentSpecModelOptions): IoK8sApiStorageV1VolumeAttachmentSpecModel {
    return new IoK8sApiStorageV1VolumeAttachmentSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      attacher: this.attacher,
      nodeName: this.nodeName,
      source: this.source,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeAttachmentSpecModel;
