import { IoK8sApiAdmissionregistrationV1beta1AuditAnnotationModelOptions as IoK8sApiAdmissionregistrationV1beta1AuditAnnotation } from '../IoK8sApiAdmissionregistrationV1beta1AuditAnnotation';
import { IoK8sApiAdmissionregistrationV1beta1MatchConditionModelOptions as IoK8sApiAdmissionregistrationV1beta1MatchCondition } from '../IoK8sApiAdmissionregistrationV1beta1MatchCondition';
import { IoK8sApiAdmissionregistrationV1beta1MatchResourcesModelOptions as IoK8sApiAdmissionregistrationV1beta1MatchResources } from '../IoK8sApiAdmissionregistrationV1beta1MatchResources';
import { IoK8sApiAdmissionregistrationV1beta1ParamKindModelOptions as IoK8sApiAdmissionregistrationV1beta1ParamKind } from '../IoK8sApiAdmissionregistrationV1beta1ParamKind';
import { IoK8sApiAdmissionregistrationV1beta1ValidationModelOptions as IoK8sApiAdmissionregistrationV1beta1Validation } from '../IoK8sApiAdmissionregistrationV1beta1Validation';
import { IoK8sApiAdmissionregistrationV1beta1VariableModelOptions as IoK8sApiAdmissionregistrationV1beta1Variable } from '../IoK8sApiAdmissionregistrationV1beta1Variable';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModel extends BaseModel {
  // auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
  auditAnnotations?: Array<IoK8sApiAdmissionregistrationV1beta1AuditAnnotation>;
  // failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.  A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.  failurePolicy does not define how validations that evaluate to false are handled.  When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.  Allowed values are Ignore or Fail. Defaults to Fail.
  failurePolicy?: string;
  // MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy=Fail, reject the request      - If failurePolicy=Ignore, the policy is skipped
  matchConditions?: Array<IoK8sApiAdmissionregistrationV1beta1MatchCondition>;
  matchConstraints?: IoK8sApiAdmissionregistrationV1beta1MatchResources;
  paramKind?: IoK8sApiAdmissionregistrationV1beta1ParamKind;
  // Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
  validations?: Array<IoK8sApiAdmissionregistrationV1beta1Validation>;
  // Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.  The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
  variables?: Array<IoK8sApiAdmissionregistrationV1beta1Variable>;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModelOptions) {
    super();
    validate(data);
    this.auditAnnotations = data.auditAnnotations;
    this.failurePolicy = data.failurePolicy;
    this.matchConditions = data.matchConditions;
    this.matchConstraints = data.matchConstraints;
    this.paramKind = data.paramKind;
    this.validations = data.validations;
    this.variables = data.variables;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModel {
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      auditAnnotations: this.auditAnnotations,
      failurePolicy: this.failurePolicy,
      matchConditions: this.matchConditions,
      matchConstraints: this.matchConstraints,
      paramKind: this.paramKind,
      validations: this.validations,
      variables: this.variables,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModel;
