import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ConfigMapModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ConfigMapModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // BinaryData contains the binary data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
  binaryData?: { [key: string]: string };
  // Data contains the configuration data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
  data?: { [key: string]: string };
  // Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
  immutable?: boolean;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;

  constructor(data: IoK8sApiCoreV1ConfigMapModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.binaryData = data.binaryData;
    this.data = data.data;
    this.immutable = data.immutable;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiCoreV1ConfigMapModelOptions): IoK8sApiCoreV1ConfigMapModel {
    return new IoK8sApiCoreV1ConfigMapModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      binaryData: this.binaryData,
      data: this.data,
      immutable: this.immutable,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ConfigMapModel;
