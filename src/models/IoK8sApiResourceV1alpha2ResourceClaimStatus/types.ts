import { IoK8sApiResourceV1alpha2AllocationResultModelOptions as IoK8sApiResourceV1alpha2AllocationResult } from '../IoK8sApiResourceV1alpha2AllocationResult';
import { IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModelOptions as IoK8sApiResourceV1alpha2ResourceClaimConsumerReference } from '../IoK8sApiResourceV1alpha2ResourceClaimConsumerReference';

export interface IoK8sApiResourceV1alpha2ResourceClaimStatusModelOptions {
  allocation?: IoK8sApiResourceV1alpha2AllocationResult;
  deallocationRequested?: boolean;
  driverName?: string;
  reservedFor?: Array<IoK8sApiResourceV1alpha2ResourceClaimConsumerReference>;
}
