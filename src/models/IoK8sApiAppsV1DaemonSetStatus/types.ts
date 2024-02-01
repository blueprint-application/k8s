import { IoK8sApiAppsV1DaemonSetConditionModelOptions as IoK8sApiAppsV1DaemonSetCondition } from '../IoK8sApiAppsV1DaemonSetCondition';

export interface IoK8sApiAppsV1DaemonSetStatusModelOptions {
  collisionCount?: number;
  conditions?: Array<IoK8sApiAppsV1DaemonSetCondition>;
  currentNumberScheduled: number;
  desiredNumberScheduled: number;
  numberAvailable?: number;
  numberMisscheduled: number;
  numberReady: number;
  numberUnavailable?: number;
  observedGeneration?: number;
  updatedNumberScheduled?: number;
}
