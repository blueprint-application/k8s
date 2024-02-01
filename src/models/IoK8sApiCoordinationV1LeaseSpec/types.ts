export interface IoK8sApiCoordinationV1LeaseSpecModelOptions {
  acquireTime?: Date;
  holderIdentity?: string;
  leaseDurationSeconds?: number;
  leaseTransitions?: number;
  renewTime?: Date;
}
