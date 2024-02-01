import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ObjectMetricStatusModel extends BaseModel {
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;

  constructor(data: IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions) {
    super();
    validate(data);
    this.current = data.current;
    this.describedObject = data.describedObject;
    this.metric = data.metric;
  }

  static create(
    data: IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions,
  ): IoK8sApiAutoscalingV2ObjectMetricStatusModel {
    return new IoK8sApiAutoscalingV2ObjectMetricStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      current: this.current,
      describedObject: this.describedObject,
      metric: this.metric,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ObjectMetricStatusModel;
