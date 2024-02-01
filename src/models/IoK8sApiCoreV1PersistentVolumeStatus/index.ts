import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeStatusModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastPhaseTransitionTime?: Date;
  // message is a human-readable message indicating details about why the volume is in this state.
  message?: string;
  // phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
  phase?: string;
  // reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
  reason?: string;

  constructor(data: IoK8sApiCoreV1PersistentVolumeStatusModelOptions) {
    super();
    validate(data);
    this.lastPhaseTransitionTime = data.lastPhaseTransitionTime;
    this.message = data.message;
    this.phase = data.phase;
    this.reason = data.reason;
  }

  static create(data: IoK8sApiCoreV1PersistentVolumeStatusModelOptions): IoK8sApiCoreV1PersistentVolumeStatusModel {
    return new IoK8sApiCoreV1PersistentVolumeStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastPhaseTransitionTime: this.lastPhaseTransitionTime,
      message: this.message,
      phase: this.phase,
      reason: this.reason,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PersistentVolumeStatusModel;
