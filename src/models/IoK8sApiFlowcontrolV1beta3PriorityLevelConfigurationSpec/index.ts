import { IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModelOptions as IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration } from '../IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModelOptions as IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration } from '../IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModel extends BaseModel {
  exempt?: IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration;
  limited?: IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration;
  // `type` indicates whether this priority level is subject to limitation on request execution.  A value of `\"Exempt\"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `\"Limited\"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server\'s limited capacity is made available exclusively to this priority level. Required.
  type: string;

  constructor(data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModelOptions) {
    super();
    validate(data);
    this.exempt = data.exempt;
    this.limited = data.limited;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModelOptions,
  ): IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModel {
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      exempt: this.exempt,
      limited: this.limited,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModel;
