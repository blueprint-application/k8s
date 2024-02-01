import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ClientIPConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ClientIPConfigModel extends BaseModel {
  // timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == \"ClientIP\". Default value is 10800(for 3 hours).
  timeoutSeconds?: number;

  constructor(data: IoK8sApiCoreV1ClientIPConfigModelOptions) {
    super();
    validate(data);
    this.timeoutSeconds = data.timeoutSeconds;
  }

  static create(data: IoK8sApiCoreV1ClientIPConfigModelOptions): IoK8sApiCoreV1ClientIPConfigModel {
    return new IoK8sApiCoreV1ClientIPConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      timeoutSeconds: this.timeoutSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ClientIPConfigModel;
