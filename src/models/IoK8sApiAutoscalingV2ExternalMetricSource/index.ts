import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ExternalMetricSourceModel extends BaseModel {
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  target: IoK8sApiAutoscalingV2MetricTarget;

  constructor(data: IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions) {
    super();
    validate(data);
    this.metric = data.metric;
    this.target = data.target;
  }

  static create(
    data: IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions,
  ): IoK8sApiAutoscalingV2ExternalMetricSourceModel {
    return new IoK8sApiAutoscalingV2ExternalMetricSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      metric: this.metric,
      target: this.target,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ExternalMetricSourceModel;
