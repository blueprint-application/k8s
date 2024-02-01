import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerStateWaitingModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerStateWaitingModel extends BaseModel {
  // Message regarding why the container is not yet running.
  message?: string;
  // (brief) reason the container is not yet running.
  reason?: string;

  constructor(data: IoK8sApiCoreV1ContainerStateWaitingModelOptions) {
    super();
    validate(data);
    this.message = data.message;
    this.reason = data.reason;
  }

  static create(data: IoK8sApiCoreV1ContainerStateWaitingModelOptions): IoK8sApiCoreV1ContainerStateWaitingModel {
    return new IoK8sApiCoreV1ContainerStateWaitingModel(data);
  }

  toObject(): Partial<this> {
    return {
      message: this.message,
      reason: this.reason,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerStateWaitingModel;
