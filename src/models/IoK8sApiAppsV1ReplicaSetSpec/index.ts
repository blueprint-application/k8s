import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1ReplicaSetSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1ReplicaSetSpecModel extends BaseModel {
  // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  minReadySeconds?: number;
  // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
  replicas?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  template?: IoK8sApiCoreV1PodTemplateSpec;

  constructor(data: IoK8sApiAppsV1ReplicaSetSpecModelOptions) {
    super();
    validate(data);
    this.minReadySeconds = data.minReadySeconds;
    this.replicas = data.replicas;
    this.selector = data.selector;
    this.template = data.template;
  }

  static create(data: IoK8sApiAppsV1ReplicaSetSpecModelOptions): IoK8sApiAppsV1ReplicaSetSpecModel {
    return new IoK8sApiAppsV1ReplicaSetSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      minReadySeconds: this.minReadySeconds,
      replicas: this.replicas,
      selector: this.selector,
      template: this.template,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1ReplicaSetSpecModel;
