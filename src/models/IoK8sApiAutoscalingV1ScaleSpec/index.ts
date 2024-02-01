import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1ScaleSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1ScaleSpecModel extends BaseModel {
  // replicas is the desired number of instances for the scaled object.
  replicas?: number;

  constructor(data: IoK8sApiAutoscalingV1ScaleSpecModelOptions) {
    super();
    validate(data);
    this.replicas = data.replicas;
  }

  static create(data: IoK8sApiAutoscalingV1ScaleSpecModelOptions): IoK8sApiAutoscalingV1ScaleSpecModel {
    return new IoK8sApiAutoscalingV1ScaleSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      replicas: this.replicas,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1ScaleSpecModel;
