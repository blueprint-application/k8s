import { IoK8sApiCertificatesV1CertificateSigningRequestSpecModelOptions as IoK8sApiCertificatesV1CertificateSigningRequestSpec } from '../IoK8sApiCertificatesV1CertificateSigningRequestSpec';
import { IoK8sApiCertificatesV1CertificateSigningRequestStatusModelOptions as IoK8sApiCertificatesV1CertificateSigningRequestStatus } from '../IoK8sApiCertificatesV1CertificateSigningRequestStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCertificatesV1CertificateSigningRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCertificatesV1CertificateSigningRequestModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiCertificatesV1CertificateSigningRequestSpec;
  status?: IoK8sApiCertificatesV1CertificateSigningRequestStatus;

  constructor(data: IoK8sApiCertificatesV1CertificateSigningRequestModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiCertificatesV1CertificateSigningRequestModelOptions,
  ): IoK8sApiCertificatesV1CertificateSigningRequestModel {
    return new IoK8sApiCertificatesV1CertificateSigningRequestModel(data);
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

export default IoK8sApiCertificatesV1CertificateSigningRequestModel;
