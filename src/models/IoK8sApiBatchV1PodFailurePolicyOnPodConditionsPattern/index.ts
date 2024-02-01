import { BaseModel } from '../types';
import type { IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModel extends BaseModel {
  // Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
  status: string;
  // Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
  type: string;

  constructor(data: IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModelOptions) {
    super();
    validate(data);
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModelOptions,
  ): IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModel {
    return new IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModel(data);
  }

  toObject(): Partial<this> {
    return {
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModel;
