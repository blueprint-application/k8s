import { IoK8sApiNetworkingV1IngressLoadBalancerStatusModelOptions as IoK8sApiNetworkingV1IngressLoadBalancerStatus } from '../IoK8sApiNetworkingV1IngressLoadBalancerStatus';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressStatusModel extends BaseModel {
  loadBalancer?: IoK8sApiNetworkingV1IngressLoadBalancerStatus;

  constructor(data: IoK8sApiNetworkingV1IngressStatusModelOptions) {
    super();
    validate(data);
    this.loadBalancer = data.loadBalancer;
  }

  static create(data: IoK8sApiNetworkingV1IngressStatusModelOptions): IoK8sApiNetworkingV1IngressStatusModel {
    return new IoK8sApiNetworkingV1IngressStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      loadBalancer: this.loadBalancer,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressStatusModel;
