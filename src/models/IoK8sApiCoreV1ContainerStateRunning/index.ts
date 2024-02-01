import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerStateRunningModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerStateRunningModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  startedAt?: Date;

  constructor(data: IoK8sApiCoreV1ContainerStateRunningModelOptions) {
    super();
    validate(data);
    this.startedAt = data.startedAt;
  }

  static create(data: IoK8sApiCoreV1ContainerStateRunningModelOptions): IoK8sApiCoreV1ContainerStateRunningModel {
    return new IoK8sApiCoreV1ContainerStateRunningModel(data);
  }

  toObject(): Partial<this> {
    return {
      startedAt: this.startedAt,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerStateRunningModel;
