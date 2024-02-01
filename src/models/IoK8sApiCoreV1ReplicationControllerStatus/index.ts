import { IoK8sApiCoreV1ReplicationControllerConditionModelOptions as IoK8sApiCoreV1ReplicationControllerCondition } from '../IoK8sApiCoreV1ReplicationControllerCondition';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ReplicationControllerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ReplicationControllerStatusModel extends BaseModel {
  // The number of available replicas (ready for at least minReadySeconds) for this replication controller.
  availableReplicas?: number;
  // Represents the latest available observations of a replication controller\'s current state.
  conditions?: Array<IoK8sApiCoreV1ReplicationControllerCondition>;
  // The number of pods that have labels matching the labels of the pod template of the replication controller.
  fullyLabeledReplicas?: number;
  // ObservedGeneration reflects the generation of the most recently observed replication controller.
  observedGeneration?: number;
  // The number of ready replicas for this replication controller.
  readyReplicas?: number;
  // Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
  replicas: number;

  constructor(data: IoK8sApiCoreV1ReplicationControllerStatusModelOptions) {
    super();
    validate(data);
    this.availableReplicas = data.availableReplicas;
    this.conditions = data.conditions;
    this.fullyLabeledReplicas = data.fullyLabeledReplicas;
    this.observedGeneration = data.observedGeneration;
    this.readyReplicas = data.readyReplicas;
    this.replicas = data.replicas;
  }

  static create(
    data: IoK8sApiCoreV1ReplicationControllerStatusModelOptions,
  ): IoK8sApiCoreV1ReplicationControllerStatusModel {
    return new IoK8sApiCoreV1ReplicationControllerStatusModel(data);
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

export default IoK8sApiCoreV1ReplicationControllerStatusModel;
