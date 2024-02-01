import { IoK8sApiResourceV1alpha2PodSchedulingContextSpecModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContextSpec } from '../IoK8sApiResourceV1alpha2PodSchedulingContextSpec';
import { IoK8sApiResourceV1alpha2PodSchedulingContextStatusModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContextStatus } from '../IoK8sApiResourceV1alpha2PodSchedulingContextStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2PodSchedulingContextModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiResourceV1alpha2PodSchedulingContextSpec;
  status?: IoK8sApiResourceV1alpha2PodSchedulingContextStatus;

  constructor(data: IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions,
  ): IoK8sApiResourceV1alpha2PodSchedulingContextModel {
    return new IoK8sApiResourceV1alpha2PodSchedulingContextModel(data);
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

export default IoK8sApiResourceV1alpha2PodSchedulingContextModel;
