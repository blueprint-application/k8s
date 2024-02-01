export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModelOptions {
  currentCPUUtilizationPercentage?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Date;
  observedGeneration?: number;
}
