import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2MetricStatusModelOptions as IoK8sApiAutoscalingV2MetricStatus } from '../IoK8sApiAutoscalingV2MetricStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModel extends BaseModel {
  // conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
  conditions?: Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>;
  // currentMetrics is the last read state of the metrics used by this autoscaler.
  currentMetrics?: Array<IoK8sApiAutoscalingV2MetricStatus>;
  // currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
  currentReplicas?: number;
  // desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
  desiredReplicas: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastScaleTime?: Date;
  // observedGeneration is the most recent generation observed by this autoscaler.
  observedGeneration?: number;

  constructor(data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.currentMetrics = data.currentMetrics;
    this.currentReplicas = data.currentReplicas;
    this.desiredReplicas = data.desiredReplicas;
    this.lastScaleTime = data.lastScaleTime;
    this.observedGeneration = data.observedGeneration;
  }

  static create(
    data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions,
  ): IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModel {
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      currentMetrics: this.currentMetrics,
      currentReplicas: this.currentReplicas,
      desiredReplicas: this.desiredReplicas,
      lastScaleTime: this.lastScaleTime,
      observedGeneration: this.observedGeneration,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModel;
