import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';

export interface IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions {
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
  target: IoK8sApiAutoscalingV2MetricTarget;
}
