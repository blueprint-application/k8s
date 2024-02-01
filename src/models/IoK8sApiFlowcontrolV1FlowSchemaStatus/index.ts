import { IoK8sApiFlowcontrolV1FlowSchemaConditionModelOptions as IoK8sApiFlowcontrolV1FlowSchemaCondition } from '../IoK8sApiFlowcontrolV1FlowSchemaCondition';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1FlowSchemaStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1FlowSchemaStatusModel extends BaseModel {
  // `conditions` is a list of the current states of FlowSchema.
  conditions?: Array<IoK8sApiFlowcontrolV1FlowSchemaCondition>;

  constructor(data: IoK8sApiFlowcontrolV1FlowSchemaStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(data: IoK8sApiFlowcontrolV1FlowSchemaStatusModelOptions): IoK8sApiFlowcontrolV1FlowSchemaStatusModel {
    return new IoK8sApiFlowcontrolV1FlowSchemaStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1FlowSchemaStatusModel;
