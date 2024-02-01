import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior';
import { IoK8sApiAutoscalingV2MetricSpecModelOptions as IoK8sApiAutoscalingV2MetricSpec } from '../IoK8sApiAutoscalingV2MetricSpec';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModel extends BaseModel {
  behavior?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior;
  // maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
  maxReplicas: number;
  // metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
  metrics?: Array<IoK8sApiAutoscalingV2MetricSpec>;
  // minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV2CrossVersionObjectReference;

  constructor(data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions) {
    super();
    validate(data);
    this.behavior = data.behavior;
    this.maxReplicas = data.maxReplicas;
    this.metrics = data.metrics;
    this.minReplicas = data.minReplicas;
    this.scaleTargetRef = data.scaleTargetRef;
  }

  static create(
    data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions,
  ): IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModel {
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      behavior: this.behavior,
      maxReplicas: this.maxReplicas,
      metrics: this.metrics,
      minReplicas: this.minReplicas,
      scaleTargetRef: this.scaleTargetRef,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModel;
