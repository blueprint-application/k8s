import { IoK8sApiNetworkingV1IngressBackendModelOptions as IoK8sApiNetworkingV1IngressBackend } from '../IoK8sApiNetworkingV1IngressBackend';
import { IoK8sApiNetworkingV1IngressRuleModelOptions as IoK8sApiNetworkingV1IngressRule } from '../IoK8sApiNetworkingV1IngressRule';
import { IoK8sApiNetworkingV1IngressTLSModelOptions as IoK8sApiNetworkingV1IngressTLS } from '../IoK8sApiNetworkingV1IngressTLS';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressSpecModel extends BaseModel {
  defaultBackend?: IoK8sApiNetworkingV1IngressBackend;
  // ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
  ingressClassName?: string;
  // rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
  rules?: Array<IoK8sApiNetworkingV1IngressRule>;
  // tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
  tls?: Array<IoK8sApiNetworkingV1IngressTLS>;

  constructor(data: IoK8sApiNetworkingV1IngressSpecModelOptions) {
    super();
    validate(data);
    this.defaultBackend = data.defaultBackend;
    this.ingressClassName = data.ingressClassName;
    this.rules = data.rules;
    this.tls = data.tls;
  }

  static create(data: IoK8sApiNetworkingV1IngressSpecModelOptions): IoK8sApiNetworkingV1IngressSpecModel {
    return new IoK8sApiNetworkingV1IngressSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      defaultBackend: this.defaultBackend,
      ingressClassName: this.ingressClassName,
      rules: this.rules,
      tls: this.tls,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressSpecModel;
