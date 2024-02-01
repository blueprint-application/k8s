import { IoK8sApiCoreV1ScopedResourceSelectorRequirementModelOptions as IoK8sApiCoreV1ScopedResourceSelectorRequirement } from '../IoK8sApiCoreV1ScopedResourceSelectorRequirement';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ScopeSelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ScopeSelectorModel extends BaseModel {
  // A list of scope selector requirements by scope of the resources.
  matchExpressions?: Array<IoK8sApiCoreV1ScopedResourceSelectorRequirement>;

  constructor(data: IoK8sApiCoreV1ScopeSelectorModelOptions) {
    super();
    validate(data);
    this.matchExpressions = data.matchExpressions;
  }

  static create(data: IoK8sApiCoreV1ScopeSelectorModelOptions): IoK8sApiCoreV1ScopeSelectorModel {
    return new IoK8sApiCoreV1ScopeSelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchExpressions: this.matchExpressions,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ScopeSelectorModel;
