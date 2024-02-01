import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';

export interface IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions {
  container: string;
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  name: string;
}
