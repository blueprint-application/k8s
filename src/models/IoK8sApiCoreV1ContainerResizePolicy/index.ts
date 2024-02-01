import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerResizePolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerResizePolicyModel extends BaseModel {
  // Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
  resourceName: string;
  // Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
  restartPolicy: string;

  constructor(data: IoK8sApiCoreV1ContainerResizePolicyModelOptions) {
    super();
    validate(data);
    this.resourceName = data.resourceName;
    this.restartPolicy = data.restartPolicy;
  }

  static create(data: IoK8sApiCoreV1ContainerResizePolicyModelOptions): IoK8sApiCoreV1ContainerResizePolicyModel {
    return new IoK8sApiCoreV1ContainerResizePolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      resourceName: this.resourceName,
      restartPolicy: this.restartPolicy,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerResizePolicyModel;
