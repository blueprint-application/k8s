import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1ScaleStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1ScaleStatusModel extends BaseModel {
  // replicas is the actual number of observed instances of the scaled object.
  replicas: number;
  // selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  selector?: string;

  constructor(data: IoK8sApiAutoscalingV1ScaleStatusModelOptions) {
    super();
    validate(data);
    this.replicas = data.replicas;
    this.selector = data.selector;
  }

  static create(data: IoK8sApiAutoscalingV1ScaleStatusModelOptions): IoK8sApiAutoscalingV1ScaleStatusModel {
    return new IoK8sApiAutoscalingV1ScaleStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      replicas: this.replicas,
      selector: this.selector,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1ScaleStatusModel;
