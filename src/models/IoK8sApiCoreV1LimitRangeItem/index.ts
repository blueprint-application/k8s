import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LimitRangeItemModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LimitRangeItemModel extends BaseModel {
  // Default resource requirement limit value by resource name if resource limit is omitted.
  _default?: { [key: string]: string };
  // DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
  defaultRequest?: { [key: string]: string };
  // Max usage constraints on this kind by resource name.
  max?: { [key: string]: string };
  // MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  maxLimitRequestRatio?: { [key: string]: string };
  // Min usage constraints on this kind by resource name.
  min?: { [key: string]: string };
  // Type of resource that this limit applies to.
  type: string;

  constructor(data: IoK8sApiCoreV1LimitRangeItemModelOptions) {
    super();
    validate(data);
    this._default = data._default;
    this.defaultRequest = data.defaultRequest;
    this.max = data.max;
    this.maxLimitRequestRatio = data.maxLimitRequestRatio;
    this.min = data.min;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1LimitRangeItemModelOptions): IoK8sApiCoreV1LimitRangeItemModel {
    return new IoK8sApiCoreV1LimitRangeItemModel(data);
  }

  toObject(): Partial<this> {
    return {
      _default: this._default,
      defaultRequest: this.defaultRequest,
      max: this.max,
      maxLimitRequestRatio: this.maxLimitRequestRatio,
      min: this.min,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LimitRangeItemModel;
