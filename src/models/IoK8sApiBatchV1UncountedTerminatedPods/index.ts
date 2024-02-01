import { BaseModel } from '../types';
import type { IoK8sApiBatchV1UncountedTerminatedPodsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1UncountedTerminatedPodsModel extends BaseModel {
  // failed holds UIDs of failed Pods.
  failed?: Array<string>;
  // succeeded holds UIDs of succeeded Pods.
  succeeded?: Array<string>;

  constructor(data: IoK8sApiBatchV1UncountedTerminatedPodsModelOptions) {
    super();
    validate(data);
    this.failed = data.failed;
    this.succeeded = data.succeeded;
  }

  static create(data: IoK8sApiBatchV1UncountedTerminatedPodsModelOptions): IoK8sApiBatchV1UncountedTerminatedPodsModel {
    return new IoK8sApiBatchV1UncountedTerminatedPodsModel(data);
  }

  toObject(): Partial<this> {
    return {
      failed: this.failed,
      succeeded: this.succeeded,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1UncountedTerminatedPodsModel;
