import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ObjectMetricSourceModel extends BaseModel {
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  target: IoK8sApiAutoscalingV2MetricTarget;

  constructor(data: IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions) {
    super();
    validate(data);
    this.describedObject = data.describedObject;
    this.metric = data.metric;
    this.target = data.target;
  }

  static create(
    data: IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions,
  ): IoK8sApiAutoscalingV2ObjectMetricSourceModel {
    return new IoK8sApiAutoscalingV2ObjectMetricSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      describedObject: this.describedObject,
      metric: this.metric,
      target: this.target,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ObjectMetricSourceModel;
