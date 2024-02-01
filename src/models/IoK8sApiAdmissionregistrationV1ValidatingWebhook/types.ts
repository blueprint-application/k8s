import { IoK8sApiAdmissionregistrationV1MatchConditionModelOptions as IoK8sApiAdmissionregistrationV1MatchCondition } from '../IoK8sApiAdmissionregistrationV1MatchCondition';
import { IoK8sApiAdmissionregistrationV1RuleWithOperationsModelOptions as IoK8sApiAdmissionregistrationV1RuleWithOperations } from '../IoK8sApiAdmissionregistrationV1RuleWithOperations';
import { IoK8sApiAdmissionregistrationV1WebhookClientConfigModelOptions as IoK8sApiAdmissionregistrationV1WebhookClientConfig } from '../IoK8sApiAdmissionregistrationV1WebhookClientConfig';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookModelOptions {
  admissionReviewVersions: Array<string>;
  clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfig;
  failurePolicy?: string;
  matchConditions?: Array<IoK8sApiAdmissionregistrationV1MatchCondition>;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  rules?: Array<IoK8sApiAdmissionregistrationV1RuleWithOperations>;
  sideEffects: string;
  timeoutSeconds?: number;
}
