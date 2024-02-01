import { IoK8sApiAdmissionregistrationV1ServiceReferenceModelOptions as IoK8sApiAdmissionregistrationV1ServiceReference } from '../IoK8sApiAdmissionregistrationV1ServiceReference';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1WebhookClientConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1WebhookClientConfigModel extends BaseModel {
  // `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook\'s server certificate. If unspecified, system trust roots on the apiserver are used.
  caBundle?: string;
  service?: IoK8sApiAdmissionregistrationV1ServiceReference;
  // `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.  The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.  Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.  The scheme must be \"https\"; the URL must begin with \"https://\".  A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.  Attempting to use a user or basic auth e.g. \"user:password@\" is not allowed. Fragments (\"#...\") and query parameters (\"?...\") are not allowed, either.
  url?: string;

  constructor(data: IoK8sApiAdmissionregistrationV1WebhookClientConfigModelOptions) {
    super();
    validate(data);
    this.caBundle = data.caBundle;
    this.service = data.service;
    this.url = data.url;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1WebhookClientConfigModelOptions,
  ): IoK8sApiAdmissionregistrationV1WebhookClientConfigModel {
    return new IoK8sApiAdmissionregistrationV1WebhookClientConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      caBundle: this.caBundle,
      service: this.service,
      url: this.url,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1WebhookClientConfigModel;
