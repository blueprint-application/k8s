import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ExternalMetricStatusModel extends BaseModel {
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;

  constructor(data: IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions) {
    super();
    validate(data);
    this.current = data.current;
    this.metric = data.metric;
  }

  static create(
    data: IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions,
  ): IoK8sApiAutoscalingV2ExternalMetricStatusModel {
    return new IoK8sApiAutoscalingV2ExternalMetricStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      current: this.current,
      metric: this.metric,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ExternalMetricStatusModel;
