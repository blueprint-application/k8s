import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2MetricStatusModelOptions as IoK8sApiAutoscalingV2MetricStatus } from '../IoK8sApiAutoscalingV2MetricStatus';

export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions {
  conditions?: Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>;
  currentMetrics?: Array<IoK8sApiAutoscalingV2MetricStatus>;
  currentReplicas?: number;
  desiredReplicas: number;
  lastScaleTime?: Date;
  observedGeneration?: number;
}
