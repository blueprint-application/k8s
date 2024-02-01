import { IoK8sApiAdmissionregistrationV1alpha1MatchResourcesModelOptions as IoK8sApiAdmissionregistrationV1alpha1MatchResources } from '../IoK8sApiAdmissionregistrationV1alpha1MatchResources';
import { IoK8sApiAdmissionregistrationV1alpha1ParamRefModelOptions as IoK8sApiAdmissionregistrationV1alpha1ParamRef } from '../IoK8sApiAdmissionregistrationV1alpha1ParamRef';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModel extends BaseModel {
  matchResources?: IoK8sApiAdmissionregistrationV1alpha1MatchResources;
  paramRef?: IoK8sApiAdmissionregistrationV1alpha1ParamRef;
  // PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
  policyName?: string;
  // validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.  Failures defined by the ValidatingAdmissionPolicy\'s FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.  validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.  The supported actions values are:  \"Deny\" specifies that a validation failure results in a denied request.  \"Warn\" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.  \"Audit\" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `\"validation.policy.admission.k8s.io/validation_failure\": \"[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]\"`  Clients should expect to handle additional values by ignoring any values not recognized.  \"Deny\" and \"Warn\" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.  Required.
  validationActions?: Array<string>;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModelOptions) {
    super();
    validate(data);
    this.matchResources = data.matchResources;
    this.paramRef = data.paramRef;
    this.policyName = data.policyName;
    this.validationActions = data.validationActions;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModel {
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchResources: this.matchResources,
      paramRef: this.paramRef,
      policyName: this.policyName,
      validationActions: this.validationActions,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModel;
