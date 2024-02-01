import { IoK8sApiAutoscalingV2MetricIdentifierModelOptions as IoK8sApiAutoscalingV2MetricIdentifier } from '../IoK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions {
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  metric: IoK8sApiAutoscalingV2MetricIdentifier;
}
