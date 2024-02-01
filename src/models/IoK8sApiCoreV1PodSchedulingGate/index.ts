import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodSchedulingGateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodSchedulingGateModel extends BaseModel {
  // Name of the scheduling gate. Each scheduling gate must have a unique name field.
  name: string;

  constructor(data: IoK8sApiCoreV1PodSchedulingGateModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1PodSchedulingGateModelOptions): IoK8sApiCoreV1PodSchedulingGateModel {
    return new IoK8sApiCoreV1PodSchedulingGateModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodSchedulingGateModel;
