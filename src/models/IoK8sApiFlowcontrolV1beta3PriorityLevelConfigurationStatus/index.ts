import { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationConditionModelOptions as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition } from '../IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModel extends BaseModel {
  // `conditions` is the current state of \"request-priority\".
  conditions?: Array<IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition>;

  constructor(data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModelOptions,
  ): IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModel {
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModel;
