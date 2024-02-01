import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SecretModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SecretModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Data contains the secret data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
  data?: { [key: string]: string };
  // Immutable, if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
  immutable?: boolean;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // stringData allows specifying non-binary secret data in string form. It is provided as a write-only input field for convenience. All keys and values are merged into the data field on write, overwriting any existing values. The stringData field is never output when reading from the API.
  stringData?: { [key: string]: string };
  // Used to facilitate programmatic handling of secret data. More info: https://kubernetes.io/docs/concepts/configuration/secret/#secret-types
  type?: string;

  constructor(data: IoK8sApiCoreV1SecretModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.data = data.data;
    this.immutable = data.immutable;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.stringData = data.stringData;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1SecretModelOptions): IoK8sApiCoreV1SecretModel {
    return new IoK8sApiCoreV1SecretModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      data: this.data,
      immutable: this.immutable,
      kind: this.kind,
      metadata: this.metadata,
      stringData: this.stringData,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SecretModel;
