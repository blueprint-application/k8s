import { IoK8sApiAppsV1StatefulSetConditionModelOptions as IoK8sApiAppsV1StatefulSetCondition } from '../IoK8sApiAppsV1StatefulSetCondition';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetStatusModel extends BaseModel {
  // Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset.
  availableReplicas?: number;
  // collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
  collisionCount?: number;
  // Represents the latest available observations of a statefulset\'s current state.
  conditions?: Array<IoK8sApiAppsV1StatefulSetCondition>;
  // currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
  currentReplicas?: number;
  // currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
  currentRevision?: string;
  // observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\'s generation, which is updated on mutation by the API Server.
  observedGeneration?: number;
  // readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.
  readyReplicas?: number;
  // replicas is the number of Pods created by the StatefulSet controller.
  replicas: number;
  // updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
  updateRevision?: string;
  // updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
  updatedReplicas?: number;

  constructor(data: IoK8sApiAppsV1StatefulSetStatusModelOptions) {
    super();
    validate(data);
    this.availableReplicas = data.availableReplicas;
    this.collisionCount = data.collisionCount;
    this.conditions = data.conditions;
    this.currentReplicas = data.currentReplicas;
    this.currentRevision = data.currentRevision;
    this.observedGeneration = data.observedGeneration;
    this.readyReplicas = data.readyReplicas;
    this.replicas = data.replicas;
    this.updateRevision = data.updateRevision;
    this.updatedReplicas = data.updatedReplicas;
  }

  static create(data: IoK8sApiAppsV1StatefulSetStatusModelOptions): IoK8sApiAppsV1StatefulSetStatusModel {
    return new IoK8sApiAppsV1StatefulSetStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      availableReplicas: this.availableReplicas,
      collisionCount: this.collisionCount,
      conditions: this.conditions,
      currentReplicas: this.currentReplicas,
      currentRevision: this.currentRevision,
      observedGeneration: this.observedGeneration,
      readyReplicas: this.readyReplicas,
      replicas: this.replicas,
      updateRevision: this.updateRevision,
      updatedReplicas: this.updatedReplicas,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetStatusModel;
