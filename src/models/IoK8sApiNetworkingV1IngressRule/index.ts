import { IoK8sApiNetworkingV1HTTPIngressRuleValueModelOptions as IoK8sApiNetworkingV1HTTPIngressRuleValue } from '../IoK8sApiNetworkingV1HTTPIngressRuleValue';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressRuleModel extends BaseModel {
  // host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the \"host\" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to    the IP in the Spec of the parent Ingress. 2. The `:` delimiter is not respected because ports are not allowed.    Currently the port of an Ingress is implicitly :80 for http and    :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.  host can be \"precise\" which is a domain name without the terminating dot of a network host (e.g. \"foo.bar.com\") or \"wildcard\", which is a domain name prefixed with a single wildcard label (e.g. \"*.foo.com\"). The wildcard character \'*\' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == \"*\"). Requests will be matched against the Host field in the following way: 1. If host is precise, the request matches this rule if the http host header is equal to Host. 2. If host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  host?: string;
  http?: IoK8sApiNetworkingV1HTTPIngressRuleValue;

  constructor(data: IoK8sApiNetworkingV1IngressRuleModelOptions) {
    super();
    validate(data);
    this.host = data.host;
    this.http = data.http;
  }

  static create(data: IoK8sApiNetworkingV1IngressRuleModelOptions): IoK8sApiNetworkingV1IngressRuleModel {
    return new IoK8sApiNetworkingV1IngressRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      host: this.host,
      http: this.http,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressRuleModel;
