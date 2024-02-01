import { IoK8sApiAppsV1StatefulSetConditionModelOptions as IoK8sApiAppsV1StatefulSetCondition } from '../IoK8sApiAppsV1StatefulSetCondition';

export interface IoK8sApiAppsV1StatefulSetStatusModelOptions {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: Array<IoK8sApiAppsV1StatefulSetCondition>;
  currentReplicas?: number;
  currentRevision?: string;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
  updateRevision?: string;
  updatedReplicas?: number;
}
