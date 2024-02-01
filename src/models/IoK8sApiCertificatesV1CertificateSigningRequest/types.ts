import { IoK8sApiCertificatesV1CertificateSigningRequestSpecModelOptions as IoK8sApiCertificatesV1CertificateSigningRequestSpec } from '../IoK8sApiCertificatesV1CertificateSigningRequestSpec';
import { IoK8sApiCertificatesV1CertificateSigningRequestStatusModelOptions as IoK8sApiCertificatesV1CertificateSigningRequestStatus } from '../IoK8sApiCertificatesV1CertificateSigningRequestStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCertificatesV1CertificateSigningRequestModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiCertificatesV1CertificateSigningRequestSpec;
  status?: IoK8sApiCertificatesV1CertificateSigningRequestStatus;
}
