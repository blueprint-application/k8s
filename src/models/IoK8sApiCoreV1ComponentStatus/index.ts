import { IoK8sApiCoreV1ComponentConditionModelOptions as IoK8sApiCoreV1ComponentCondition } from '../IoK8sApiCoreV1ComponentCondition';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ComponentStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ComponentStatusModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // List of component conditions observed
  conditions?: Array<IoK8sApiCoreV1ComponentCondition>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;

  constructor(data: IoK8sApiCoreV1ComponentStatusModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.conditions = data.conditions;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiCoreV1ComponentStatusModelOptions): IoK8sApiCoreV1ComponentStatusModel {
    return new IoK8sApiCoreV1ComponentStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      conditions: this.conditions,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ComponentStatusModel;
