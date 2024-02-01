import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SysctlModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SysctlModel extends BaseModel {
  // Name of a property to set
  name: string;
  // Value of a property to set
  value: string;

  constructor(data: IoK8sApiCoreV1SysctlModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: IoK8sApiCoreV1SysctlModelOptions): IoK8sApiCoreV1SysctlModel {
    return new IoK8sApiCoreV1SysctlModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SysctlModel;
