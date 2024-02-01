import { IoK8sApiAdmissionregistrationV1MutatingWebhookModelOptions as IoK8sApiAdmissionregistrationV1MutatingWebhook } from '../IoK8sApiAdmissionregistrationV1MutatingWebhook';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // Webhooks is a list of webhooks and the affected resources and operations.
  webhooks?: Array<IoK8sApiAdmissionregistrationV1MutatingWebhook>;

  constructor(data: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.webhooks = data.webhooks;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModelOptions,
  ): IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModel {
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      webhooks: this.webhooks,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModel;
