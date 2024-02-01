import { BaseModel } from '../types';
import type { IoK8sApiCoordinationV1LeaseSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoordinationV1LeaseSpecModel extends BaseModel {
  // MicroTime is version of Time with microsecond level precision.
  acquireTime?: Date;
  // holderIdentity contains the identity of the holder of a current lease.
  holderIdentity?: string;
  // leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.
  leaseDurationSeconds?: number;
  // leaseTransitions is the number of transitions of a lease between holders.
  leaseTransitions?: number;
  // MicroTime is version of Time with microsecond level precision.
  renewTime?: Date;

  constructor(data: IoK8sApiCoordinationV1LeaseSpecModelOptions) {
    super();
    validate(data);
    this.acquireTime = data.acquireTime;
    this.holderIdentity = data.holderIdentity;
    this.leaseDurationSeconds = data.leaseDurationSeconds;
    this.leaseTransitions = data.leaseTransitions;
    this.renewTime = data.renewTime;
  }

  static create(data: IoK8sApiCoordinationV1LeaseSpecModelOptions): IoK8sApiCoordinationV1LeaseSpecModel {
    return new IoK8sApiCoordinationV1LeaseSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      acquireTime: this.acquireTime,
      holderIdentity: this.holderIdentity,
      leaseDurationSeconds: this.leaseDurationSeconds,
      leaseTransitions: this.leaseTransitions,
      renewTime: this.renewTime,
    } as Partial<this>;
  }
}

export default IoK8sApiCoordinationV1LeaseSpecModel;
