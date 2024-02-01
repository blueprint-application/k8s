import { IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions as IoK8sApiAutoscalingV2ContainerResourceMetricSource } from '../IoK8sApiAutoscalingV2ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions as IoK8sApiAutoscalingV2ExternalMetricSource } from '../IoK8sApiAutoscalingV2ExternalMetricSource';
import { IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions as IoK8sApiAutoscalingV2ObjectMetricSource } from '../IoK8sApiAutoscalingV2ObjectMetricSource';
import { IoK8sApiAutoscalingV2PodsMetricSourceModelOptions as IoK8sApiAutoscalingV2PodsMetricSource } from '../IoK8sApiAutoscalingV2PodsMetricSource';
import { IoK8sApiAutoscalingV2ResourceMetricSourceModelOptions as IoK8sApiAutoscalingV2ResourceMetricSource } from '../IoK8sApiAutoscalingV2ResourceMetricSource';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2MetricSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2MetricSpecModel extends BaseModel {
  containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricSource;
  external?: IoK8sApiAutoscalingV2ExternalMetricSource;
  object?: IoK8sApiAutoscalingV2ObjectMetricSource;
  pods?: IoK8sApiAutoscalingV2PodsMetricSource;
  resource?: IoK8sApiAutoscalingV2ResourceMetricSource;
  // type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
  type: string;

  constructor(data: IoK8sApiAutoscalingV2MetricSpecModelOptions) {
    super();
    validate(data);
    this.containerResource = data.containerResource;
    this.external = data.external;
    this.object = data.object;
    this.pods = data.pods;
    this.resource = data.resource;
    this.type = data.type;
  }

  static create(data: IoK8sApiAutoscalingV2MetricSpecModelOptions): IoK8sApiAutoscalingV2MetricSpecModel {
    return new IoK8sApiAutoscalingV2MetricSpecModel(data);
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

export default IoK8sApiAutoscalingV2MetricSpecModel;
