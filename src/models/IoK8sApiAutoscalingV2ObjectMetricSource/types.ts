import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';

export interface IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions {
  describedObject: IoK8sApiAutoscalingV2CrossVersionObjectReference;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  target: IoK8sApiAutoscalingV2MetricTarget;
}
