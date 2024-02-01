import { BaseModel } from '../types';
import type { IoK8sApiStorageV1VolumeErrorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1VolumeErrorModel extends BaseModel {
  // message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
  message?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  time?: Date;

  constructor(data: IoK8sApiStorageV1VolumeErrorModelOptions) {
    super();
    validate(data);
    this.message = data.message;
    this.time = data.time;
  }

  static create(data: IoK8sApiStorageV1VolumeErrorModelOptions): IoK8sApiStorageV1VolumeErrorModel {
    return new IoK8sApiStorageV1VolumeErrorModel(data);
  }

  toObject(): Partial<this> {
    return {
      message: this.message,
      time: this.time,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1VolumeErrorModel;
