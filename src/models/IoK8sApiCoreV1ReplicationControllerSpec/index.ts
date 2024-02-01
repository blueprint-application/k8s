import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ReplicationControllerSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ReplicationControllerSpecModel extends BaseModel {
  // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  minReadySeconds?: number;
  // Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
  replicas?: number;
  // Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
  selector?: { [key: string]: string };
  template?: IoK8sApiCoreV1PodTemplateSpec;

  constructor(data: IoK8sApiCoreV1ReplicationControllerSpecModelOptions) {
    super();
    validate(data);
    this.minReadySeconds = data.minReadySeconds;
    this.replicas = data.replicas;
    this.selector = data.selector;
    this.template = data.template;
  }

  static create(
    data: IoK8sApiCoreV1ReplicationControllerSpecModelOptions,
  ): IoK8sApiCoreV1ReplicationControllerSpecModel {
    return new IoK8sApiCoreV1ReplicationControllerSpecModel(data);
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

export default IoK8sApiCoreV1ReplicationControllerSpecModel;
