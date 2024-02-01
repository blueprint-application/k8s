import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodReadinessGateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodReadinessGateModel extends BaseModel {
  // ConditionType refers to a condition in the pod\'s condition list with matching type.
  conditionType: string;

  constructor(data: IoK8sApiCoreV1PodReadinessGateModelOptions) {
    super();
    validate(data);
    this.conditionType = data.conditionType;
  }

  static create(data: IoK8sApiCoreV1PodReadinessGateModelOptions): IoK8sApiCoreV1PodReadinessGateModel {
    return new IoK8sApiCoreV1PodReadinessGateModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditionType: this.conditionType,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodReadinessGateModel;
