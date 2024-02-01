import { IoK8sApiFlowcontrolV1beta3LimitResponseModelOptions as IoK8sApiFlowcontrolV1beta3LimitResponse } from '../IoK8sApiFlowcontrolV1beta3LimitResponse';

export interface IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfigurationModelOptions {
  borrowingLimitPercent?: number;
  lendablePercent?: number;
  limitResponse?: IoK8sApiFlowcontrolV1beta3LimitResponse;
  nominalConcurrencyShares?: number;
}
