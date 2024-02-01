import { IoK8sApiCoreV1TopologySelectorLabelRequirementModelOptions as IoK8sApiCoreV1TopologySelectorLabelRequirement } from '../IoK8sApiCoreV1TopologySelectorLabelRequirement';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TopologySelectorTermModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TopologySelectorTermModel extends BaseModel {
  // A list of topology selector requirements by labels.
  matchLabelExpressions?: Array<IoK8sApiCoreV1TopologySelectorLabelRequirement>;

  constructor(data: IoK8sApiCoreV1TopologySelectorTermModelOptions) {
    super();
    validate(data);
    this.matchLabelExpressions = data.matchLabelExpressions;
  }

  static create(data: IoK8sApiCoreV1TopologySelectorTermModelOptions): IoK8sApiCoreV1TopologySelectorTermModel {
    return new IoK8sApiCoreV1TopologySelectorTermModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchLabelExpressions: this.matchLabelExpressions,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TopologySelectorTermModel;
