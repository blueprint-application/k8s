import { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from '../IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1LabelSelectorModel extends BaseModel {
  // matchExpressions is a list of label selector requirements. The requirements are ANDed.
  matchExpressions?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;
  // matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
  matchLabels?: { [key: string]: string };

  constructor(data: IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions) {
    super();
    validate(data);
    this.matchExpressions = data.matchExpressions;
    this.matchLabels = data.matchLabels;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1LabelSelectorModel {
    return new IoK8sApimachineryPkgApisMetaV1LabelSelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchExpressions: this.matchExpressions,
      matchLabels: this.matchLabels,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1LabelSelectorModel;
