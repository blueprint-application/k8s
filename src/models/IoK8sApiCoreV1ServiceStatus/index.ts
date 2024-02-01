import { IoK8sApiCoreV1LoadBalancerStatusModelOptions as IoK8sApiCoreV1LoadBalancerStatus } from '../IoK8sApiCoreV1LoadBalancerStatus';
import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ServiceStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ServiceStatusModel extends BaseModel {
  // Current service state
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  loadBalancer?: IoK8sApiCoreV1LoadBalancerStatus;

  constructor(data: IoK8sApiCoreV1ServiceStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.loadBalancer = data.loadBalancer;
  }

  static create(data: IoK8sApiCoreV1ServiceStatusModelOptions): IoK8sApiCoreV1ServiceStatusModel {
    return new IoK8sApiCoreV1ServiceStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      loadBalancer: this.loadBalancer,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ServiceStatusModel;
