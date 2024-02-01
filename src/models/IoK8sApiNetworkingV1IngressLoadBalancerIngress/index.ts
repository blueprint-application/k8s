import { IoK8sApiNetworkingV1IngressPortStatusModelOptions as IoK8sApiNetworkingV1IngressPortStatus } from '../IoK8sApiNetworkingV1IngressPortStatus';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressLoadBalancerIngressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressLoadBalancerIngressModel extends BaseModel {
  // hostname is set for load-balancer ingress points that are DNS based.
  hostname?: string;
  // ip is set for load-balancer ingress points that are IP based.
  ip?: string;
  // ports provides information about the ports exposed by this LoadBalancer.
  ports?: Array<IoK8sApiNetworkingV1IngressPortStatus>;

  constructor(data: IoK8sApiNetworkingV1IngressLoadBalancerIngressModelOptions) {
    super();
    validate(data);
    this.hostname = data.hostname;
    this.ip = data.ip;
    this.ports = data.ports;
  }

  static create(
    data: IoK8sApiNetworkingV1IngressLoadBalancerIngressModelOptions,
  ): IoK8sApiNetworkingV1IngressLoadBalancerIngressModel {
    return new IoK8sApiNetworkingV1IngressLoadBalancerIngressModel(data);
  }

  toObject(): Partial<this> {
    return {
      hostname: this.hostname,
      ip: this.ip,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressLoadBalancerIngressModel;
