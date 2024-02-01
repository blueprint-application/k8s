import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1ResourceRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1ResourceRuleModel extends BaseModel {
  // APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \"*\" means all.
  apiGroups?: Array<string>;
  // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \"*\" means all.
  resourceNames?: Array<string>;
  // Resources is a list of resources this rule applies to.  \"*\" means all in the specified apiGroups.  \"*_/foo\" represents the subresource \'foo\' for all resources in the specified apiGroups.
  resources?: Array<string>;
  // Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
  verbs: Array<string>;

  constructor(data: IoK8sApiAuthorizationV1ResourceRuleModelOptions) {
    super();
    validate(data);
    this.apiGroups = data.apiGroups;
    this.resourceNames = data.resourceNames;
    this.resources = data.resources;
    this.verbs = data.verbs;
  }

  static create(data: IoK8sApiAuthorizationV1ResourceRuleModelOptions): IoK8sApiAuthorizationV1ResourceRuleModel {
    return new IoK8sApiAuthorizationV1ResourceRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroups: this.apiGroups,
      resourceNames: this.resourceNames,
      resources: this.resources,
      verbs: this.verbs,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1ResourceRuleModel;
