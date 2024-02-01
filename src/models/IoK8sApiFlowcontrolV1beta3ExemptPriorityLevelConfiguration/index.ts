import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModel extends BaseModel {
  // `lendablePercent` prescribes the fraction of the level\'s NominalCL that can be borrowed by other priority levels.  This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level\'s LendableConcurrencyLimit (LendableCL), is defined as follows.  LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
  lendablePercent?: number;
  // `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server\'s concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values:  NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)  Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.
  nominalConcurrencyShares?: number;

  constructor(data: IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModelOptions) {
    super();
    validate(data);
    this.lendablePercent = data.lendablePercent;
    this.nominalConcurrencyShares = data.nominalConcurrencyShares;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModelOptions,
  ): IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModel {
    return new IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModel(data);
  }

  toObject(): Partial<this> {
    return {
      lendablePercent: this.lendablePercent,
      nominalConcurrencyShares: this.nominalConcurrencyShares,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfigurationModel;
