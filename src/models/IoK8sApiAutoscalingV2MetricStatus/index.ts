import { IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions as IoK8sApiAutoscalingV2ContainerResourceMetricStatus } from '../IoK8sApiAutoscalingV2ContainerResourceMetricStatus';
import { IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions as IoK8sApiAutoscalingV2ExternalMetricStatus } from '../IoK8sApiAutoscalingV2ExternalMetricStatus';
import { IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions as IoK8sApiAutoscalingV2ObjectMetricStatus } from '../IoK8sApiAutoscalingV2ObjectMetricStatus';
import { IoK8sApiAutoscalingV2PodsMetricStatusModelOptions as IoK8sApiAutoscalingV2PodsMetricStatus } from '../IoK8sApiAutoscalingV2PodsMetricStatus';
import { IoK8sApiAutoscalingV2ResourceMetricStatusModelOptions as IoK8sApiAutoscalingV2ResourceMetricStatus } from '../IoK8sApiAutoscalingV2ResourceMetricStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2MetricStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2MetricStatusModel extends BaseModel {
  containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricStatus;
  external?: IoK8sApiAutoscalingV2ExternalMetricStatus;
  object?: IoK8sApiAutoscalingV2ObjectMetricStatus;
  pods?: IoK8sApiAutoscalingV2PodsMetricStatus;
  resource?: IoK8sApiAutoscalingV2ResourceMetricStatus;
  // type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
  type: string;

  constructor(data: IoK8sApiAutoscalingV2MetricStatusModelOptions) {
    super();
    validate(data);
    this.containerResource = data.containerResource;
    this.external = data.external;
    this.object = data.object;
    this.pods = data.pods;
    this.resource = data.resource;
    this.type = data.type;
  }

  static create(data: IoK8sApiAutoscalingV2MetricStatusModelOptions): IoK8sApiAutoscalingV2MetricStatusModel {
    return new IoK8sApiAutoscalingV2MetricStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      containerResource: this.containerResource,
      external: this.external,
      object: this.object,
      pods: this.pods,
      resource: this.resource,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2MetricStatusModel;
