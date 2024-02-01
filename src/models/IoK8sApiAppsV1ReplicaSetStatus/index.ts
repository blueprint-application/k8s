import { IoK8sApiAppsV1ReplicaSetConditionModelOptions as IoK8sApiAppsV1ReplicaSetCondition } from '../IoK8sApiAppsV1ReplicaSetCondition';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1ReplicaSetStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1ReplicaSetStatusModel extends BaseModel {
  // The number of available replicas (ready for at least minReadySeconds) for this replica set.
  availableReplicas?: number;
  // Represents the latest available observations of a replica set\'s current state.
  conditions?: Array<IoK8sApiAppsV1ReplicaSetCondition>;
  // The number of pods that have labels matching the labels of the pod template of the replicaset.
  fullyLabeledReplicas?: number;
  // ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
  observedGeneration?: number;
  // readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.
  readyReplicas?: number;
  // Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
  replicas: number;

  constructor(data: IoK8sApiAppsV1ReplicaSetStatusModelOptions) {
    super();
    validate(data);
    this.availableReplicas = data.availableReplicas;
    this.conditions = data.conditions;
    this.fullyLabeledReplicas = data.fullyLabeledReplicas;
    this.observedGeneration = data.observedGeneration;
    this.readyReplicas = data.readyReplicas;
    this.replicas = data.replicas;
  }

  static create(data: IoK8sApiAppsV1ReplicaSetStatusModelOptions): IoK8sApiAppsV1ReplicaSetStatusModel {
    return new IoK8sApiAppsV1ReplicaSetStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      availableReplicas: this.availableReplicas,
      conditions: this.conditions,
      fullyLabeledReplicas: this.fullyLabeledReplicas,
      observedGeneration: this.observedGeneration,
      readyReplicas: this.readyReplicas,
      replicas: this.replicas,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1ReplicaSetStatusModel;
