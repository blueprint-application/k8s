import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1ResourcePolicyRuleModel extends BaseModel {
  // `apiGroups` is a list of matching API groups and may not be empty. \"*\" matches all API groups and, if present, must be the only entry. Required.
  apiGroups: Array<string>;
  // `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
  clusterScope?: boolean;
  // `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains \"*\".  Note that \"*\" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
  namespaces?: Array<string>;
  // `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ \"services\", \"nodes/status\" ].  This list may not be empty. \"*\" matches all resources and, if present, must be the only entry. Required.
  resources: Array<string>;
  // `verbs` is a list of matching verbs and may not be empty. \"*\" matches all verbs and, if present, must be the only entry. Required.
  verbs: Array<string>;

  constructor(data: IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions) {
    super();
    validate(data);
    this.apiGroups = data.apiGroups;
    this.clusterScope = data.clusterScope;
    this.namespaces = data.namespaces;
    this.resources = data.resources;
    this.verbs = data.verbs;
  }

  static create(
    data: IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions,
  ): IoK8sApiFlowcontrolV1ResourcePolicyRuleModel {
    return new IoK8sApiFlowcontrolV1ResourcePolicyRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroups: this.apiGroups,
      clusterScope: this.clusterScope,
      namespaces: this.namespaces,
      resources: this.resources,
      verbs: this.verbs,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1ResourcePolicyRuleModel;
