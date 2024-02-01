import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerStateTerminatedModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerStateTerminatedModel extends BaseModel {
  // Container\'s ID in the format \'<type>://<container_id>\'
  containerID?: string;
  // Exit status from the last termination of the container
  exitCode: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  finishedAt?: Date;
  // Message regarding the last termination of the container
  message?: string;
  // (brief) reason from the last termination of the container
  reason?: string;
  // Signal from the last termination of the container
  signal?: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  startedAt?: Date;

  constructor(data: IoK8sApiCoreV1ContainerStateTerminatedModelOptions) {
    super();
    validate(data);
    this.containerID = data.containerID;
    this.exitCode = data.exitCode;
    this.finishedAt = data.finishedAt;
    this.message = data.message;
    this.reason = data.reason;
    this.signal = data.signal;
    this.startedAt = data.startedAt;
  }

  static create(data: IoK8sApiCoreV1ContainerStateTerminatedModelOptions): IoK8sApiCoreV1ContainerStateTerminatedModel {
    return new IoK8sApiCoreV1ContainerStateTerminatedModel(data);
  }

  toObject(): Partial<this> {
    return {
      containerID: this.containerID,
      exitCode: this.exitCode,
      finishedAt: this.finishedAt,
      message: this.message,
      reason: this.reason,
      signal: this.signal,
      startedAt: this.startedAt,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerStateTerminatedModel;
