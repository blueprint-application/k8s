import { IoK8sApiCoreV1ClientIPConfigModelOptions as IoK8sApiCoreV1ClientIPConfig } from '../IoK8sApiCoreV1ClientIPConfig';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SessionAffinityConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SessionAffinityConfigModel extends BaseModel {
  clientIP?: IoK8sApiCoreV1ClientIPConfig;

  constructor(data: IoK8sApiCoreV1SessionAffinityConfigModelOptions) {
    super();
    validate(data);
    this.clientIP = data.clientIP;
  }

  static create(data: IoK8sApiCoreV1SessionAffinityConfigModelOptions): IoK8sApiCoreV1SessionAffinityConfigModel {
    return new IoK8sApiCoreV1SessionAffinityConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      clientIP: this.clientIP,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SessionAffinityConfigModel;
