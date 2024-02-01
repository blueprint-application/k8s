import { BaseModel } from '../types';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Human-readable message indicating details about last transition.
  message?: string;
  // Unique, one-word, CamelCase reason for the condition\'s last transition.
  reason?: string;
  // Status is the status of the condition. Can be True, False, Unknown.
  status: string;
  // Type is the type of the condition.
  type: string;

  constructor(data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModelOptions,
  ): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModel {
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModel(data);
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

export default IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModel;
