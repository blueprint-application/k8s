import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ContainerResourceMetricSourceModel extends BaseModel {
  // container is the name of the container in the pods of the scaling target
  container: string;
  // name is the name of the resource in question.
  name: string;
  target: IoK8sApiAutoscalingV2MetricTarget;

  constructor(data: IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions) {
    super();
    validate(data);
    this.container = data.container;
    this.name = data.name;
    this.target = data.target;
  }

  static create(
    data: IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions,
  ): IoK8sApiAutoscalingV2ContainerResourceMetricSourceModel {
    return new IoK8sApiAutoscalingV2ContainerResourceMetricSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      container: this.container,
      name: this.name,
      target: this.target,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ContainerResourceMetricSourceModel;
