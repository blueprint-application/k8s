import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiRbacV1AggregationRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1AggregationRuleModel extends BaseModel {
  // ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
  clusterRoleSelectors?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelector>;

  constructor(data: IoK8sApiRbacV1AggregationRuleModelOptions) {
    super();
    validate(data);
    this.clusterRoleSelectors = data.clusterRoleSelectors;
  }

  static create(data: IoK8sApiRbacV1AggregationRuleModelOptions): IoK8sApiRbacV1AggregationRuleModel {
    return new IoK8sApiRbacV1AggregationRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      clusterRoleSelectors: this.clusterRoleSelectors,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1AggregationRuleModel;
