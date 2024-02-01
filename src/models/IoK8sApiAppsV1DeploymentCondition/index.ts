import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DeploymentConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DeploymentConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastUpdateTime?: Date;
  // A human readable message indicating details about the transition.
  message?: string;
  // The reason for the condition\'s last transition.
  reason?: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of deployment condition.
  type: string;

  constructor(data: IoK8sApiAppsV1DeploymentConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.lastUpdateTime = data.lastUpdateTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiAppsV1DeploymentConditionModelOptions): IoK8sApiAppsV1DeploymentConditionModel {
    return new IoK8sApiAppsV1DeploymentConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      lastUpdateTime: this.lastUpdateTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DeploymentConditionModel;
