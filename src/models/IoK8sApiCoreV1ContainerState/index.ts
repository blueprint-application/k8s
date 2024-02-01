import { IoK8sApiCoreV1ContainerStateRunningModelOptions as IoK8sApiCoreV1ContainerStateRunning } from '../IoK8sApiCoreV1ContainerStateRunning';
import { IoK8sApiCoreV1ContainerStateTerminatedModelOptions as IoK8sApiCoreV1ContainerStateTerminated } from '../IoK8sApiCoreV1ContainerStateTerminated';
import { IoK8sApiCoreV1ContainerStateWaitingModelOptions as IoK8sApiCoreV1ContainerStateWaiting } from '../IoK8sApiCoreV1ContainerStateWaiting';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerStateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerStateModel extends BaseModel {
  running?: IoK8sApiCoreV1ContainerStateRunning;
  terminated?: IoK8sApiCoreV1ContainerStateTerminated;
  waiting?: IoK8sApiCoreV1ContainerStateWaiting;

  constructor(data: IoK8sApiCoreV1ContainerStateModelOptions) {
    super();
    validate(data);
    this.running = data.running;
    this.terminated = data.terminated;
    this.waiting = data.waiting;
  }

  static create(data: IoK8sApiCoreV1ContainerStateModelOptions): IoK8sApiCoreV1ContainerStateModel {
    return new IoK8sApiCoreV1ContainerStateModel(data);
  }

  toObject(): Partial<this> {
    return {
      running: this.running,
      terminated: this.terminated,
      waiting: this.waiting,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerStateModel;
