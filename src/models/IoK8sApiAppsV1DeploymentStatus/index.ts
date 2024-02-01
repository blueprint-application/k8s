import { IoK8sApiAppsV1DeploymentConditionModelOptions as IoK8sApiAppsV1DeploymentCondition } from '../IoK8sApiAppsV1DeploymentCondition';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DeploymentStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DeploymentStatusModel extends BaseModel {
  // Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
  availableReplicas?: number;
  // Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
  collisionCount?: number;
  // Represents the latest available observations of a deployment\'s current state.
  conditions?: Array<IoK8sApiAppsV1DeploymentCondition>;
  // The generation observed by the deployment controller.
  observedGeneration?: number;
  // readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
  readyReplicas?: number;
  // Total number of non-terminated pods targeted by this deployment (their labels match the selector).
  replicas?: number;
  // Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
  unavailableReplicas?: number;
  // Total number of non-terminated pods targeted by this deployment that have the desired template spec.
  updatedReplicas?: number;

  constructor(data: IoK8sApiAppsV1DeploymentStatusModelOptions) {
    super();
    validate(data);
    this.availableReplicas = data.availableReplicas;
    this.collisionCount = data.collisionCount;
    this.conditions = data.conditions;
    this.observedGeneration = data.observedGeneration;
    this.readyReplicas = data.readyReplicas;
    this.replicas = data.replicas;
    this.unavailableReplicas = data.unavailableReplicas;
    this.updatedReplicas = data.updatedReplicas;
  }

  static create(data: IoK8sApiAppsV1DeploymentStatusModelOptions): IoK8sApiAppsV1DeploymentStatusModel {
    return new IoK8sApiAppsV1DeploymentStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      availableReplicas: this.availableReplicas,
      collisionCount: this.collisionCount,
      conditions: this.conditions,
      observedGeneration: this.observedGeneration,
      readyReplicas: this.readyReplicas,
      replicas: this.replicas,
      unavailableReplicas: this.unavailableReplicas,
      updatedReplicas: this.updatedReplicas,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DeploymentStatusModel;
