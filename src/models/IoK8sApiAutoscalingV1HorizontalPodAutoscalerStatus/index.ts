import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModel extends BaseModel {
  // currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
  currentCPUUtilizationPercentage?: number;
  // currentReplicas is the current number of replicas of pods managed by this autoscaler.
  currentReplicas: number;
  // desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.
  desiredReplicas: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastScaleTime?: Date;
  // observedGeneration is the most recent generation observed by this autoscaler.
  observedGeneration?: number;

  constructor(data: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModelOptions) {
    super();
    validate(data);
    this.currentCPUUtilizationPercentage = data.currentCPUUtilizationPercentage;
    this.currentReplicas = data.currentReplicas;
    this.desiredReplicas = data.desiredReplicas;
    this.lastScaleTime = data.lastScaleTime;
    this.observedGeneration = data.observedGeneration;
  }

  static create(
    data: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModelOptions,
  ): IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModel {
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      currentCPUUtilizationPercentage: this.currentCPUUtilizationPercentage,
      currentReplicas: this.currentReplicas,
      desiredReplicas: this.desiredReplicas,
      lastScaleTime: this.lastScaleTime,
      observedGeneration: this.observedGeneration,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModel;
