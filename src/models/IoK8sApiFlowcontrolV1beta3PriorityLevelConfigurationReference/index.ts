import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModel extends BaseModel {
  // `name` is the name of the priority level configuration being referenced Required.
  name: string;

  constructor(data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModelOptions,
  ): IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModel {
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModel;
