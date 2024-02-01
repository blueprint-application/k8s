import { IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModelOptions as IoK8sApiFlowcontrolV1beta3FlowSchemaCondition } from '../IoK8sApiFlowcontrolV1beta3FlowSchemaCondition';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModel extends BaseModel {
  // `conditions` is a list of the current states of FlowSchema.
  conditions?: Array<IoK8sApiFlowcontrolV1beta3FlowSchemaCondition>;

  constructor(data: IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModelOptions,
  ): IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModel {
    return new IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModel;
