import { IoK8sApiAppsV1DeploymentConditionModelOptions as IoK8sApiAppsV1DeploymentCondition } from '../IoK8sApiAppsV1DeploymentCondition';

export interface IoK8sApiAppsV1DeploymentStatusModelOptions {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: Array<IoK8sApiAppsV1DeploymentCondition>;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas?: number;
  unavailableReplicas?: number;
  updatedReplicas?: number;
}
