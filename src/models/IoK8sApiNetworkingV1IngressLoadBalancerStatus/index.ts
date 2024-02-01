import { IoK8sApiNetworkingV1IngressLoadBalancerIngressModelOptions as IoK8sApiNetworkingV1IngressLoadBalancerIngress } from '../IoK8sApiNetworkingV1IngressLoadBalancerIngress';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressLoadBalancerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressLoadBalancerStatusModel extends BaseModel {
  // ingress is a list containing ingress points for the load-balancer.
  ingress?: Array<IoK8sApiNetworkingV1IngressLoadBalancerIngress>;

  constructor(data: IoK8sApiNetworkingV1IngressLoadBalancerStatusModelOptions) {
    super();
    validate(data);
    this.ingress = data.ingress;
  }

  static create(
    data: IoK8sApiNetworkingV1IngressLoadBalancerStatusModelOptions,
  ): IoK8sApiNetworkingV1IngressLoadBalancerStatusModel {
    return new IoK8sApiNetworkingV1IngressLoadBalancerStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      ingress: this.ingress,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressLoadBalancerStatusModel;
