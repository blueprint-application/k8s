import { IoK8sApiAutoscalingV2MetricValueStatusModelOptions as IoK8sApiAutoscalingV2MetricValueStatus } from '../IoK8sApiAutoscalingV2MetricValueStatus';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2ContainerResourceMetricStatusModel extends BaseModel {
  // container is the name of the container in the pods of the scaling target
  container: string;
  current: IoK8sApiAutoscalingV2MetricValueStatus;
  // name is the name of the resource in question.
  name: string;

  constructor(data: IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions) {
    super();
    validate(data);
    this.container = data.container;
    this.current = data.current;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions,
  ): IoK8sApiAutoscalingV2ContainerResourceMetricStatusModel {
    return new IoK8sApiAutoscalingV2ContainerResourceMetricStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      container: this.container,
      current: this.current,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2ContainerResourceMetricStatusModel;
