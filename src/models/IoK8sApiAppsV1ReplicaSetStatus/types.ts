import { IoK8sApiAppsV1ReplicaSetConditionModelOptions as IoK8sApiAppsV1ReplicaSetCondition } from '../IoK8sApiAppsV1ReplicaSetCondition';

export interface IoK8sApiAppsV1ReplicaSetStatusModelOptions {
  availableReplicas?: number;
  conditions?: Array<IoK8sApiAppsV1ReplicaSetCondition>;
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
