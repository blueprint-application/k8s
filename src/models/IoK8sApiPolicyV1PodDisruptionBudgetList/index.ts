import { IoK8sApiPolicyV1PodDisruptionBudgetModelOptions as IoK8sApiPolicyV1PodDisruptionBudget } from '../IoK8sApiPolicyV1PodDisruptionBudget';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiPolicyV1PodDisruptionBudgetListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiPolicyV1PodDisruptionBudgetListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Items is a list of PodDisruptionBudgets
  items: Array<IoK8sApiPolicyV1PodDisruptionBudget>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiPolicyV1PodDisruptionBudgetListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiPolicyV1PodDisruptionBudgetListModelOptions,
  ): IoK8sApiPolicyV1PodDisruptionBudgetListModel {
    return new IoK8sApiPolicyV1PodDisruptionBudgetListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      items: this.items,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiPolicyV1PodDisruptionBudgetListModel;
