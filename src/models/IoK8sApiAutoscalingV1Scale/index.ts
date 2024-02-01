import { IoK8sApiAutoscalingV1ScaleSpecModelOptions as IoK8sApiAutoscalingV1ScaleSpec } from '../IoK8sApiAutoscalingV1ScaleSpec';
import { IoK8sApiAutoscalingV1ScaleStatusModelOptions as IoK8sApiAutoscalingV1ScaleStatus } from '../IoK8sApiAutoscalingV1ScaleStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1ScaleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1ScaleModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV1ScaleSpec;
  status?: IoK8sApiAutoscalingV1ScaleStatus;

  constructor(data: IoK8sApiAutoscalingV1ScaleModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiAutoscalingV1ScaleModelOptions): IoK8sApiAutoscalingV1ScaleModel {
    return new IoK8sApiAutoscalingV1ScaleModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1ScaleModel;
