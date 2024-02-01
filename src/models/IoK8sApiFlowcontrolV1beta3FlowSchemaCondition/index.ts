import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // `message` is a human-readable message indicating details about last transition.
  message?: string;
  // `reason` is a unique, one-word, CamelCase reason for the condition\'s last transition.
  reason?: string;
  // `status` is the status of the condition. Can be True, False, Unknown. Required.
  status?: string;
  // `type` is the type of the condition. Required.
  type?: string;

  constructor(data: IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModelOptions,
  ): IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModel {
    return new IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModel;