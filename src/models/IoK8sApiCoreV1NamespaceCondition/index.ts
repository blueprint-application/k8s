import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NamespaceConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NamespaceConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  message?: string;
  reason?: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of namespace controller condition.
  type: string;

  constructor(data: IoK8sApiCoreV1NamespaceConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1NamespaceConditionModelOptions): IoK8sApiCoreV1NamespaceConditionModel {
    return new IoK8sApiCoreV1NamespaceConditionModel(data);
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

export default IoK8sApiCoreV1NamespaceConditionModel;
