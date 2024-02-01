import { IoK8sApiFlowcontrolV1QueuingConfigurationModelOptions as IoK8sApiFlowcontrolV1QueuingConfiguration } from '../IoK8sApiFlowcontrolV1QueuingConfiguration';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1LimitResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1LimitResponseModel extends BaseModel {
  queuing?: IoK8sApiFlowcontrolV1QueuingConfiguration;
  // `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
  type: string;

  constructor(data: IoK8sApiFlowcontrolV1LimitResponseModelOptions) {
    super();
    validate(data);
    this.queuing = data.queuing;
    this.type = data.type;
  }

  static create(data: IoK8sApiFlowcontrolV1LimitResponseModelOptions): IoK8sApiFlowcontrolV1LimitResponseModel {
    return new IoK8sApiFlowcontrolV1LimitResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      queuing: this.queuing,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1LimitResponseModel;
