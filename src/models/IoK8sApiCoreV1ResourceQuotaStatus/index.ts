import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ResourceQuotaStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ResourceQuotaStatusModel extends BaseModel {
  // Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
  hard?: { [key: string]: string };
  // Used is the current observed total usage of the resource in the namespace.
  used?: { [key: string]: string };

  constructor(data: IoK8sApiCoreV1ResourceQuotaStatusModelOptions) {
    super();
    validate(data);
    this.hard = data.hard;
    this.used = data.used;
  }

  static create(data: IoK8sApiCoreV1ResourceQuotaStatusModelOptions): IoK8sApiCoreV1ResourceQuotaStatusModel {
    return new IoK8sApiCoreV1ResourceQuotaStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      hard: this.hard,
      used: this.used,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ResourceQuotaStatusModel;
