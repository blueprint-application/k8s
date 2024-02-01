import { IoK8sApiAutoscalingV1CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV1CrossVersionObjectReference } from '../IoK8sApiAutoscalingV1CrossVersionObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModel extends BaseModel {
  // maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
  maxReplicas: number;
  // minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV1CrossVersionObjectReference;
  // targetCPUUtilizationPercentage is the target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
  targetCPUUtilizationPercentage?: number;

  constructor(data: IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModelOptions) {
    super();
    validate(data);
    this.maxReplicas = data.maxReplicas;
    this.minReplicas = data.minReplicas;
    this.scaleTargetRef = data.scaleTargetRef;
    this.targetCPUUtilizationPercentage = data.targetCPUUtilizationPercentage;
  }

  static create(
    data: IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModelOptions,
  ): IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModel {
    return new IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      maxReplicas: this.maxReplicas,
      minReplicas: this.minReplicas,
      scaleTargetRef: this.scaleTargetRef,
      targetCPUUtilizationPercentage: this.targetCPUUtilizationPercentage,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModel;
