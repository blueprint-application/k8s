import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ResourceMetricSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ResourceMetricSourceModel extends BaseModel {
  // name is the name of the resource in question.
  name: string;
  target: IoK8sApiAutoscalingV2MetricTarget;

  constructor(data: IoK8sApiAutoscalingV2ResourceMetricSourceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.target = data.target;
  }

  static create(
    data: IoK8sApiAutoscalingV2ResourceMetricSourceModelOptions,
  ): IoK8sApiAutoscalingV2ResourceMetricSourceModel {
    return new IoK8sApiAutoscalingV2ResourceMetricSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      target: this.target,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ResourceMetricSourceModel;
