import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodIPModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodIPModel extends BaseModel {
  // IP is the IP address assigned to the pod
  ip?: string;

  constructor(data: IoK8sApiCoreV1PodIPModelOptions) {
    super();
    validate(data);
    this.ip = data.ip;
  }

  static create(data: IoK8sApiCoreV1PodIPModelOptions): IoK8sApiCoreV1PodIPModel {
    return new IoK8sApiCoreV1PodIPModel(data);
  }

  toObject(): Partial<this> {
    return {
      ip: this.ip,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodIPModel;
