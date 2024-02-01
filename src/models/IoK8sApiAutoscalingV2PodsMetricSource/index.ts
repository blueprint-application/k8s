import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2PodsMetricSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2PodsMetricSourceModel extends BaseModel {
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  target: IoK8sApiAutoscalingV2MetricTarget;

  constructor(data: IoK8sApiAutoscalingV2PodsMetricSourceModelOptions) {
    super();
    validate(data);
    this.metric = data.metric;
    this.target = data.target;
  }

  static create(data: IoK8sApiAutoscalingV2PodsMetricSourceModelOptions): IoK8sApiAutoscalingV2PodsMetricSourceModel {
    return new IoK8sApiAutoscalingV2PodsMetricSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      metric: this.metric,
      target: this.target,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2PodsMetricSourceModel;
