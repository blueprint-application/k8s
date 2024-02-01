import { IoK8sApiFlowcontrolV1beta3LimitResponseModelOptions as IoK8sApiFlowcontrolV1beta3LimitResponse } from '../IoK8sApiFlowcontrolV1beta3LimitResponse';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModel extends BaseModel {
  // `borrowingLimitPercent`, if present, configures a limit on how many seats this priority level can borrow from other priority levels. The limit is known as this level\'s BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level\'s nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows.  BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 )  The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left `nil`, the limit is effectively infinite.
  borrowingLimitPercent?: number;
  // `lendablePercent` prescribes the fraction of the level\'s NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level\'s LendableConcurrencyLimit (LendableCL), is defined as follows.  LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
  lendablePercent?: number;
  limitResponse?: IoK8sApiFlowcontrolV1beta3LimitResponse;
  // `nominalConcurrencyShares` (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server\'s concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values:  NominalCL(i)  = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k)  Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of 30.
  nominalConcurrencyShares?: number;

  constructor(data: IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModelOptions) {
    super();
    validate(data);
    this.borrowingLimitPercent = data.borrowingLimitPercent;
    this.lendablePercent = data.lendablePercent;
    this.limitResponse = data.limitResponse;
    this.nominalConcurrencyShares = data.nominalConcurrencyShares;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModelOptions,
  ): IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModel {
    return new IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModel(data);
  }

  toObject(): Partial<this> {
    return {
      borrowingLimitPercent: this.borrowingLimitPercent,
      lendablePercent: this.lendablePercent,
      limitResponse: this.limitResponse,
      nominalConcurrencyShares: this.nominalConcurrencyShares,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModel;