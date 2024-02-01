import { IoK8sApiCoreV1NodeSelectorRequirementModelOptions as IoK8sApiCoreV1NodeSelectorRequirement } from '../IoK8sApiCoreV1NodeSelectorRequirement';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeSelectorTermModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeSelectorTermModel extends BaseModel {
  // A list of node selector requirements by node\'s labels.
  matchExpressions?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;
  // A list of node selector requirements by node\'s fields.
  matchFields?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;

  constructor(data: IoK8sApiCoreV1NodeSelectorTermModelOptions) {
    super();
    validate(data);
    this.matchExpressions = data.matchExpressions;
    this.matchFields = data.matchFields;
  }

  static create(data: IoK8sApiCoreV1NodeSelectorTermModelOptions): IoK8sApiCoreV1NodeSelectorTermModel {
    return new IoK8sApiCoreV1NodeSelectorTermModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchExpressions: this.matchExpressions,
      matchFields: this.matchFields,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeSelectorTermModel;
