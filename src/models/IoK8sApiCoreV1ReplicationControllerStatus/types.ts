import { IoK8sApiCoreV1ReplicationControllerConditionModelOptions as IoK8sApiCoreV1ReplicationControllerCondition } from '../IoK8sApiCoreV1ReplicationControllerCondition';

export interface IoK8sApiCoreV1ReplicationControllerStatusModelOptions {
  availableReplicas?: number;
  conditions?: Array<IoK8sApiCoreV1ReplicationControllerCondition>;
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
