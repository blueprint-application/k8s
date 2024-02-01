import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;

  constructor(data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerModelOptions,
  ): IoK8sApiAutoscalingV2HorizontalPodAutoscalerModel {
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerModel(data);
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

export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerModel;
