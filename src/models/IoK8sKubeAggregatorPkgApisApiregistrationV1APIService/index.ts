import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModelOptions as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec } from '../IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModelOptions as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus } from '../IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus';
import { BaseModel } from '../types';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec;
  status?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus;

  constructor(data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModelOptions,
  ): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModel {
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModel(data);
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

export default IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceModel;
