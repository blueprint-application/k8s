import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1ConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime: Date;
  // message is a human readable message indicating details about the transition. This may be an empty string.
  message: string;
  // observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
  observedGeneration?: number;
  // reason contains a programmatic identifier indicating the reason for the condition\'s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
  reason: string;
  // status of the condition, one of True, False, Unknown.
  status: string;
  // type of condition in CamelCase or in foo.example.com/CamelCase.
  type: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1ConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.observedGeneration = data.observedGeneration;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1ConditionModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1ConditionModel {
    return new IoK8sApimachineryPkgApisMetaV1ConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      observedGeneration: this.observedGeneration,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1ConditionModel;
