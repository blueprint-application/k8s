import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModel extends BaseModel {
  // `type` is the type of flow distinguisher method The supported types are \"ByUser\" and \"ByNamespace\". Required.
  type: string;

  constructor(data: IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModelOptions) {
    super();
    validate(data);
    this.type = data.type;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModelOptions,
  ): IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModel {
    return new IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModel(data);
  }

  toObject(): Partial<this> {
    return {
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModel;
