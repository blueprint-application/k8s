import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ResourceMetricStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ResourceMetricStatusModel extends BaseModel {
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  // name is the name of the resource in question.
  name: string;

  constructor(data: IoK8sApiAutoscalingV2ResourceMetricStatusModelOptions) {
    super();
    validate(data);
    this.current = data.current;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiAutoscalingV2ResourceMetricStatusModelOptions,
  ): IoK8sApiAutoscalingV2ResourceMetricStatusModel {
    return new IoK8sApiAutoscalingV2ResourceMetricStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      current: this.current,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ResourceMetricStatusModel;
