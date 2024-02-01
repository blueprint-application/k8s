import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationConditionModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModel extends BaseModel {
  // `conditions` is the current state of \"request-priority\".
  conditions?: Array<IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition>;

  constructor(data: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModelOptions,
  ): IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModel {
    return new IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModel;
