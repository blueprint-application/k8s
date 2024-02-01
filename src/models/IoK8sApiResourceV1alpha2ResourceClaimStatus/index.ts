import { IoK8sApiResourceV1alpha2AllocationResultModelOptions as IoK8sApiResourceV1alpha2AllocationResult } from '../IoK8sApiResourceV1alpha2AllocationResult';
import { IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModelOptions as IoK8sApiResourceV1alpha2ResourceClaimConsumerReference } from '../IoK8sApiResourceV1alpha2ResourceClaimConsumerReference';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimStatusModel extends BaseModel {
  allocation?: IoK8sApiResourceV1alpha2AllocationResult;
  // DeallocationRequested indicates that a ResourceClaim is to be deallocated.  The driver then must deallocate this claim and reset the field together with clearing the Allocation field.  While DeallocationRequested is set, no new consumers may be added to ReservedFor.
  deallocationRequested?: boolean;
  // DriverName is a copy of the driver name from the ResourceClass at the time when allocation started.
  driverName?: string;
  // ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.  There can be at most 32 such reservations. This may get increased in the future, but not reduced.
  reservedFor?: Array<IoK8sApiResourceV1alpha2ResourceClaimConsumerReference>;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimStatusModelOptions) {
    super();
    validate(data);
    this.allocation = data.allocation;
    this.deallocationRequested = data.deallocationRequested;
    this.driverName = data.driverName;
    this.reservedFor = data.reservedFor;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimStatusModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimStatusModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      allocation: this.allocation,
      deallocationRequested: this.deallocationRequested,
      driverName: this.driverName,
      reservedFor: this.reservedFor,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimStatusModel;
