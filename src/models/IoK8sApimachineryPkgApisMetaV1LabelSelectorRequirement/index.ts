import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModel extends BaseModel {
  // key is the label key that the selector applies to.
  key: string;
  // operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  operator: string;
  // values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  values?: Array<string>;

  constructor(data: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.operator = data.operator;
    this.values = data.values;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModel {
    return new IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      operator: this.operator,
      values: this.values,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModel;
