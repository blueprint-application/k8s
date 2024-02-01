import { IoK8sApiCoreV1NodeConfigSourceModelOptions as IoK8sApiCoreV1NodeConfigSource } from '../IoK8sApiCoreV1NodeConfigSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeConfigStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeConfigStatusModel extends BaseModel {
  active?: IoK8sApiCoreV1NodeConfigSource;
  assigned?: IoK8sApiCoreV1NodeConfigSource;
  // Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions.
  error?: string;
  lastKnownGood?: IoK8sApiCoreV1NodeConfigSource;

  constructor(data: IoK8sApiCoreV1NodeConfigStatusModelOptions) {
    super();
    validate(data);
    this.active = data.active;
    this.assigned = data.assigned;
    this.error = data.error;
    this.lastKnownGood = data.lastKnownGood;
  }

  static create(data: IoK8sApiCoreV1NodeConfigStatusModelOptions): IoK8sApiCoreV1NodeConfigStatusModel {
    return new IoK8sApiCoreV1NodeConfigStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      active: this.active,
      assigned: this.assigned,
      error: this.error,
      lastKnownGood: this.lastKnownGood,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeConfigStatusModel;
