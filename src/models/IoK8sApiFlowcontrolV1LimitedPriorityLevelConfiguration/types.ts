import { IoK8sApiFlowcontrolV1LimitResponseModelOptions as IoK8sApiFlowcontrolV1LimitResponse } from '../IoK8sApiFlowcontrolV1LimitResponse';

export interface IoK8sApiFlowcontrolV1LimitedPriorityLevelConfigurationModelOptions {
  borrowingLimitPercent?: number;
  lendablePercent?: number;
  limitResponse?: IoK8sApiFlowcontrolV1LimitResponse;
  nominalConcurrencyShares?: number;
}
