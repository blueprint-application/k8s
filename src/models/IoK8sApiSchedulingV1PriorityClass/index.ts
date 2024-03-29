import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiSchedulingV1PriorityClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiSchedulingV1PriorityClassModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // description is an arbitrary string that usually provides guidelines on when this priority class should be used.
  description?: string;
  // globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
  globalDefault?: boolean;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
  preemptionPolicy?: string;
  // value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
  value: number;

  constructor(data: IoK8sApiSchedulingV1PriorityClassModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.description = data.description;
    this.globalDefault = data.globalDefault;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.preemptionPolicy = data.preemptionPolicy;
    this.value = data.value;
  }

  static create(data: IoK8sApiSchedulingV1PriorityClassModelOptions): IoK8sApiSchedulingV1PriorityClassModel {
    return new IoK8sApiSchedulingV1PriorityClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      description: this.description,
      globalDefault: this.globalDefault,
      kind: this.kind,
      metadata: this.metadata,
      preemptionPolicy: this.preemptionPolicy,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiSchedulingV1PriorityClassModel;
