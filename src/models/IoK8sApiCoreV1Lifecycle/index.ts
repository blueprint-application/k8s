import { IoK8sApiCoreV1LifecycleHandlerModelOptions as IoK8sApiCoreV1LifecycleHandler } from '../IoK8sApiCoreV1LifecycleHandler';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LifecycleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LifecycleModel extends BaseModel {
  postStart?: IoK8sApiCoreV1LifecycleHandler;
  preStop?: IoK8sApiCoreV1LifecycleHandler;

  constructor(data: IoK8sApiCoreV1LifecycleModelOptions) {
    super();
    validate(data);
    this.postStart = data.postStart;
    this.preStop = data.preStop;
  }

  static create(data: IoK8sApiCoreV1LifecycleModelOptions): IoK8sApiCoreV1LifecycleModel {
    return new IoK8sApiCoreV1LifecycleModel(data);
  }

  toObject(): Partial<this> {
    return {
      postStart: this.postStart,
      preStop: this.preStop,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LifecycleModel;
