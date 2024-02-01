import { IoK8sApiCoreV1HTTPHeaderModelOptions as IoK8sApiCoreV1HTTPHeader } from '../IoK8sApiCoreV1HTTPHeader';

export interface IoK8sApiCoreV1HTTPGetActionModelOptions {
  host?: string;
  httpHeaders?: Array<IoK8sApiCoreV1HTTPHeader>;
  path?: string;
  port: string;
  scheme?: string;
}
