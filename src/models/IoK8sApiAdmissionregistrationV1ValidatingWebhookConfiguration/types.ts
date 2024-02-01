import { IoK8sApiAdmissionregistrationV1ValidatingWebhookModelOptions as IoK8sApiAdmissionregistrationV1ValidatingWebhook } from '../IoK8sApiAdmissionregistrationV1ValidatingWebhook';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  webhooks?: Array<IoK8sApiAdmissionregistrationV1ValidatingWebhook>;
}
