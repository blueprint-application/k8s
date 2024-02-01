import { BaseModel } from '../types';
import type { IoK8sApiRbacV1PolicyRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1PolicyRuleModel extends BaseModel {
  // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. \"\" represents the core API group and \"*\" represents all API groups.
  apiGroups?: Array<string>;
  // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
  nonResourceURLs?: Array<string>;
  // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
  resourceNames?: Array<string>;
  // Resources is a list of resources this rule applies to. \'*\' represents all resources.
  resources?: Array<string>;
  // Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. \'*\' represents all verbs.
  verbs: Array<string>;

  constructor(data: IoK8sApiRbacV1PolicyRuleModelOptions) {
    super();
    validate(data);
    this.apiGroups = data.apiGroups;
    this.nonResourceURLs = data.nonResourceURLs;
    this.resourceNames = data.resourceNames;
    this.resources = data.resources;
    this.verbs = data.verbs;
  }

  static create(data: IoK8sApiRbacV1PolicyRuleModelOptions): IoK8sApiRbacV1PolicyRuleModel {
    return new IoK8sApiRbacV1PolicyRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroups: this.apiGroups,
      nonResourceURLs: this.nonResourceURLs,
      resourceNames: this.resourceNames,
      resources: this.resources,
      verbs: this.verbs,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1PolicyRuleModel;
