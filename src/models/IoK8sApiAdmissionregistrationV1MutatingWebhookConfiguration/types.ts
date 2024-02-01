import { IoK8sApiAdmissionregistrationV1MutatingWebhookModelOptions as IoK8sApiAdmissionregistrationV1MutatingWebhook } from '../IoK8sApiAdmissionregistrationV1MutatingWebhook';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  webhooks?: Array<IoK8sApiAdmissionregistrationV1MutatingWebhook>;
}
