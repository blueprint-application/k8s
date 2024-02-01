export interface IoK8sApiCertificatesV1CertificateSigningRequestSpecModelOptions {
  expirationSeconds?: number;
  extra?: { [key: string]: Array<string> };
  groups?: Array<string>;
  request: string;
  signerName: string;
  uid?: string;
  usages?: Array<string>;
  username?: string;
}
