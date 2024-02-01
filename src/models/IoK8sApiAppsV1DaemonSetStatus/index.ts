import { IoK8sApiAppsV1DaemonSetConditionModelOptions as IoK8sApiAppsV1DaemonSetCondition } from '../IoK8sApiAppsV1DaemonSetCondition';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DaemonSetStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DaemonSetStatusModel extends BaseModel {
  // Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
  collisionCount?: number;
  // Represents the latest available observations of a DaemonSet\'s current state.
  conditions?: Array<IoK8sApiAppsV1DaemonSetCondition>;
  // The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
  currentNumberScheduled: number;
  // The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
  desiredNumberScheduled: number;
  // The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
  numberAvailable?: number;
  // The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
  numberMisscheduled: number;
  // numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
  numberReady: number;
  // The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
  numberUnavailable?: number;
  // The most recent generation observed by the daemon set controller.
  observedGeneration?: number;
  // The total number of nodes that are running updated daemon pod
  updatedNumberScheduled?: number;

  constructor(data: IoK8sApiAppsV1DaemonSetStatusModelOptions) {
    super();
    validate(data);
    this.collisionCount = data.collisionCount;
    this.conditions = data.conditions;
    this.currentNumberScheduled = data.currentNumberScheduled;
    this.desiredNumberScheduled = data.desiredNumberScheduled;
    this.numberAvailable = data.numberAvailable;
    this.numberMisscheduled = data.numberMisscheduled;
    this.numberReady = data.numberReady;
    this.numberUnavailable = data.numberUnavailable;
    this.observedGeneration = data.observedGeneration;
    this.updatedNumberScheduled = data.updatedNumberScheduled;
  }

  static create(data: IoK8sApiAppsV1DaemonSetStatusModelOptions): IoK8sApiAppsV1DaemonSetStatusModel {
    return new IoK8sApiAppsV1DaemonSetStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      collisionCount: this.collisionCount,
      conditions: this.conditions,
      currentNumberScheduled: this.currentNumberScheduled,
      desiredNumberScheduled: this.desiredNumberScheduled,
      numberAvailable: this.numberAvailable,
      numberMisscheduled: this.numberMisscheduled,
      numberReady: this.numberReady,
      numberUnavailable: this.numberUnavailable,
      observedGeneration: this.observedGeneration,
      updatedNumberScheduled: this.updatedNumberScheduled,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DaemonSetStatusModel;
