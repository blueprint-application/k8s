import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeSelectorRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeSelectorRequirementModel extends BaseModel {
  // The label key that the selector applies to.
  key: string;
  // Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  operator: string;
  // An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  values?: Array<string>;

  constructor(data: IoK8sApiCoreV1NodeSelectorRequirementModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.operator = data.operator;
    this.values = data.values;
  }

  static create(data: IoK8sApiCoreV1NodeSelectorRequirementModelOptions): IoK8sApiCoreV1NodeSelectorRequirementModel {
    return new IoK8sApiCoreV1NodeSelectorRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      operator: this.operator,
      values: this.values,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeSelectorRequirementModel;
