import { IoK8sApiAdmissionregistrationV1MatchConditionModelOptions as IoK8sApiAdmissionregistrationV1MatchCondition } from '../IoK8sApiAdmissionregistrationV1MatchCondition';
import { IoK8sApiAdmissionregistrationV1RuleWithOperationsModelOptions as IoK8sApiAdmissionregistrationV1RuleWithOperations } from '../IoK8sApiAdmissionregistrationV1RuleWithOperations';
import { IoK8sApiAdmissionregistrationV1WebhookClientConfigModelOptions as IoK8sApiAdmissionregistrationV1WebhookClientConfig } from '../IoK8sApiAdmissionregistrationV1WebhookClientConfig';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1MutatingWebhookModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1MutatingWebhookModel extends BaseModel {
  // AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
  admissionReviewVersions: Array<string>;
  clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfig;
  // FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
  failurePolicy?: string;
  // MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.   2. If ALL matchConditions evaluate to TRUE, the webhook is called.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy=Fail, reject the request      - If failurePolicy=Ignore, the error is ignored and the webhook is skipped  This is a beta feature and managed by the AdmissionWebhookMatchConditions feature gate.
  matchConditions?: Array<IoK8sApiAdmissionregistrationV1MatchCondition>;
  // matchPolicy defines how the \"rules\" list is used to match incoming requests. Allowed values are \"Exact\" or \"Equivalent\".  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.  Defaults to \"Equivalent\"
  matchPolicy?: string;
  // The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where \"imagepolicy\" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
  name: string;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are \"Never\" and \"IfNeeded\".  Never: the webhook will not be called more than once in a single admission evaluation.  IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.  Defaults to \"Never\".
  reinvocationPolicy?: string;
  // Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
  rules?: Array<IoK8sApiAdmissionregistrationV1RuleWithOperations>;
  // SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
  sideEffects: string;
  // TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  timeoutSeconds?: number;

  constructor(data: IoK8sApiAdmissionregistrationV1MutatingWebhookModelOptions) {
    super();
    validate(data);
    this.admissionReviewVersions = data.admissionReviewVersions;
    this.clientConfig = data.clientConfig;
    this.failurePolicy = data.failurePolicy;
    this.matchConditions = data.matchConditions;
    this.matchPolicy = data.matchPolicy;
    this.name = data.name;
    this.namespaceSelector = data.namespaceSelector;
    this.objectSelector = data.objectSelector;
    this.reinvocationPolicy = data.reinvocationPolicy;
    this.rules = data.rules;
    this.sideEffects = data.sideEffects;
    this.timeoutSeconds = data.timeoutSeconds;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1MutatingWebhookModelOptions,
  ): IoK8sApiAdmissionregistrationV1MutatingWebhookModel {
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookModel(data);
  }

  toObject(): Partial<this> {
    return {
      admissionReviewVersions: this.admissionReviewVersions,
      clientConfig: this.clientConfig,
      failurePolicy: this.failurePolicy,
      matchConditions: this.matchConditions,
      matchPolicy: this.matchPolicy,
      name: this.name,
      namespaceSelector: this.namespaceSelector,
      objectSelector: this.objectSelector,
      reinvocationPolicy: this.reinvocationPolicy,
      rules: this.rules,
      sideEffects: this.sideEffects,
      timeoutSeconds: this.timeoutSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1MutatingWebhookModel;
