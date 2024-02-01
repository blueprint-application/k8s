import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions {
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
}
