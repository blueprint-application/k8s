import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModel extends BaseModel {
  // APIGroups is the API groups the resources belong to. \'*\' is all groups. If \'*\' is present, the length of the slice must be one. Required.
  apiGroups?: Array<string>;
  // APIVersions is the API versions the resources belong to. \'*\' is all versions. If \'*\' is present, the length of the slice must be one. Required.
  apiVersions?: Array<string>;
  // Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If \'*\' is present, the length of the slice must be one. Required.
  operations?: Array<string>;
  // ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
  resourceNames?: Array<string>;
  // Resources is a list of resources this rule applies to.  For example: \'pods\' means pods. \'pods/log\' means the log subresource of pods. \'*\' means all resources, but not subresources. \'pods/_*\' means all subresources of pods. \'*_/scale\' means all scale subresources. \'*_/_*\' means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required.
  resources?: Array<string>;
  // scope specifies the scope of this rule. Valid values are \"Cluster\", \"Namespaced\", and \"*\" \"Cluster\" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \"Namespaced\" means that only namespaced resources will match this rule. \"*\" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \"*\".
  scope?: string;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModelOptions) {
    super();
    validate(data);
    this.apiGroups = data.apiGroups;
    this.apiVersions = data.apiVersions;
    this.operations = data.operations;
    this.resourceNames = data.resourceNames;
    this.resources = data.resources;
    this.scope = data.scope;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModel {
    return new IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroups: this.apiGroups,
      apiVersions: this.apiVersions,
      operations: this.operations,
      resourceNames: this.resourceNames,
      resources: this.resources,
      scope: this.scope,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModel;
