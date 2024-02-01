import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ScopedResourceSelectorRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ScopedResourceSelectorRequirementModel extends BaseModel {
  // Represents a scope\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
  operator: string;
  // The name of the scope that the selector applies to.
  scopeName: string;
  // An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  values?: Array<string>;

  constructor(data: IoK8sApiCoreV1ScopedResourceSelectorRequirementModelOptions) {
    super();
    validate(data);
    this.operator = data.operator;
    this.scopeName = data.scopeName;
    this.values = data.values;
  }

  static create(
    data: IoK8sApiCoreV1ScopedResourceSelectorRequirementModelOptions,
  ): IoK8sApiCoreV1ScopedResourceSelectorRequirementModel {
    return new IoK8sApiCoreV1ScopedResourceSelectorRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      operator: this.operator,
      scopeName: this.scopeName,
      values: this.values,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ScopedResourceSelectorRequirementModel;
