import { BaseModel } from '../types';
import type { IoK8sApiCertificatesV1CertificateSigningRequestConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCertificatesV1CertificateSigningRequestConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastUpdateTime?: Date;
  // message contains a human readable message with details about the request state
  message?: string;
  // reason indicates a brief reason for the request state
  reason?: string;
  // status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be \"False\" or \"Unknown\".
  status: string;
  // type of the condition. Known conditions are \"Approved\", \"Denied\", and \"Failed\".  An \"Approved\" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.  A \"Denied\" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.  A \"Failed\" condition is added via the /status subresource, indicating the signer failed to issue the certificate.  Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.  Only one condition of a given type is allowed.
  type: string;

  constructor(data: IoK8sApiCertificatesV1CertificateSigningRequestConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.lastUpdateTime = data.lastUpdateTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiCertificatesV1CertificateSigningRequestConditionModelOptions,
  ): IoK8sApiCertificatesV1CertificateSigningRequestConditionModel {
    return new IoK8sApiCertificatesV1CertificateSigningRequestConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      lastUpdateTime: this.lastUpdateTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCertificatesV1CertificateSigningRequestConditionModel;
