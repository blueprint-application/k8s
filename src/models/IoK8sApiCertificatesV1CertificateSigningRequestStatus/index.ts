import { IoK8sApiCertificatesV1CertificateSigningRequestConditionModelOptions as IoK8sApiCertificatesV1CertificateSigningRequestCondition } from '../IoK8sApiCertificatesV1CertificateSigningRequestCondition';
import { BaseModel } from '../types';
import type { IoK8sApiCertificatesV1CertificateSigningRequestStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCertificatesV1CertificateSigningRequestStatusModel extends BaseModel {
  // certificate is populated with an issued certificate by the signer after an Approved condition is present. This field is set via the /status subresource. Once populated, this field is immutable.  If the certificate signing request is denied, a condition of type \"Denied\" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type \"Failed\" is added and this field remains empty.  Validation requirements:  1. certificate must contain one or more PEM blocks.  2. All PEM blocks must have the \"CERTIFICATE\" label, contain no headers, and the encoded data   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.  3. Non-PEM content may appear before or after the \"CERTIFICATE\" PEM blocks and is unvalidated,   to allow for explanatory text as described in section 5.2 of RFC7468.  If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.  The certificate is encoded in PEM format.  When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:      base64(     -----BEGIN CERTIFICATE-----     ...     -----END CERTIFICATE-----     )
  certificate?: string;
  // conditions applied to the request. Known conditions are \"Approved\", \"Denied\", and \"Failed\".
  conditions?: Array<IoK8sApiCertificatesV1CertificateSigningRequestCondition>;

  constructor(data: IoK8sApiCertificatesV1CertificateSigningRequestStatusModelOptions) {
    super();
    validate(data);
    this.certificate = data.certificate;
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sApiCertificatesV1CertificateSigningRequestStatusModelOptions,
  ): IoK8sApiCertificatesV1CertificateSigningRequestStatusModel {
    return new IoK8sApiCertificatesV1CertificateSigningRequestStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      certificate: this.certificate,
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sApiCertificatesV1CertificateSigningRequestStatusModel;
