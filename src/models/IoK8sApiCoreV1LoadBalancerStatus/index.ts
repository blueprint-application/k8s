import { IoK8sApiCoreV1LoadBalancerIngressModelOptions as IoK8sApiCoreV1LoadBalancerIngress } from '../IoK8sApiCoreV1LoadBalancerIngress';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LoadBalancerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LoadBalancerStatusModel extends BaseModel {
  // Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
  ingress?: Array<IoK8sApiCoreV1LoadBalancerIngress>;

  constructor(data: IoK8sApiCoreV1LoadBalancerStatusModelOptions) {
    super();
    validate(data);
    this.ingress = data.ingress;
  }

  static create(data: IoK8sApiCoreV1LoadBalancerStatusModelOptions): IoK8sApiCoreV1LoadBalancerStatusModel {
    return new IoK8sApiCoreV1LoadBalancerStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      ingress: this.ingress,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LoadBalancerStatusModel;
