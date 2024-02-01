import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModel extends BaseModel {
  // conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;

  constructor(data: IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModelOptions,
  ): IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModel {
    return new IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModel;
