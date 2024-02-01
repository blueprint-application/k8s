import { IoK8sApiCoreV1LimitRangeItemModelOptions as IoK8sApiCoreV1LimitRangeItem } from '../IoK8sApiCoreV1LimitRangeItem';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LimitRangeSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LimitRangeSpecModel extends BaseModel {
  // Limits is the list of LimitRangeItem objects that are enforced.
  limits: Array<IoK8sApiCoreV1LimitRangeItem>;

  constructor(data: IoK8sApiCoreV1LimitRangeSpecModelOptions) {
    super();
    validate(data);
    this.limits = data.limits;
  }

  static create(data: IoK8sApiCoreV1LimitRangeSpecModelOptions): IoK8sApiCoreV1LimitRangeSpecModel {
    return new IoK8sApiCoreV1LimitRangeSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      limits: this.limits,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LimitRangeSpecModel;
