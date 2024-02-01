import { IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsModelOptions as IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations } from '../IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1MatchResourcesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1MatchResourcesModel extends BaseModel {
  // ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
  excludeResourceRules?: Array<IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations>;
  // matchPolicy defines how the \"MatchResources\" list is used to match incoming requests. Allowed values are \"Exact\" or \"Equivalent\".  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.  Defaults to \"Equivalent\"
  matchPolicy?: string;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.
  resourceRules?: Array<IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations>;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1MatchResourcesModelOptions) {
    super();
    validate(data);
    this.excludeResourceRules = data.excludeResourceRules;
    this.matchPolicy = data.matchPolicy;
    this.namespaceSelector = data.namespaceSelector;
    this.objectSelector = data.objectSelector;
    this.resourceRules = data.resourceRules;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1MatchResourcesModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1MatchResourcesModel {
    return new IoK8sApiAdmissionregistrationV1beta1MatchResourcesModel(data);
  }

  toObject(): Partial<this> {
    return {
      excludeResourceRules: this.excludeResourceRules,
      matchPolicy: this.matchPolicy,
      namespaceSelector: this.namespaceSelector,
      objectSelector: this.objectSelector,
      resourceRules: this.resourceRules,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1MatchResourcesModel;
