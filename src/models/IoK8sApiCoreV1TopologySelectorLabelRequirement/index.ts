import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TopologySelectorLabelRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TopologySelectorLabelRequirementModel extends BaseModel {
  // The label key that the selector applies to.
  key: string;
  // An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
  values: Array<string>;

  constructor(data: IoK8sApiCoreV1TopologySelectorLabelRequirementModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.values = data.values;
  }

  static create(
    data: IoK8sApiCoreV1TopologySelectorLabelRequirementModelOptions,
  ): IoK8sApiCoreV1TopologySelectorLabelRequirementModel {
    return new IoK8sApiCoreV1TopologySelectorLabelRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      values: this.values,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TopologySelectorLabelRequirementModel;
