import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ResourceClaimModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ResourceClaimModel extends BaseModel {
  // Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  name: string;

  constructor(data: IoK8sApiCoreV1ResourceClaimModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1ResourceClaimModelOptions): IoK8sApiCoreV1ResourceClaimModel {
    return new IoK8sApiCoreV1ResourceClaimModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ResourceClaimModel;
