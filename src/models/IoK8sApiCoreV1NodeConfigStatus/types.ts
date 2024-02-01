import { IoK8sApiCoreV1NodeConfigSourceModelOptions as IoK8sApiCoreV1NodeConfigSource } from '../IoK8sApiCoreV1NodeConfigSource';

export interface IoK8sApiCoreV1NodeConfigStatusModelOptions {
  active?: IoK8sApiCoreV1NodeConfigSource;
  assigned?: IoK8sApiCoreV1NodeConfigSource;
  error?: string;
  lastKnownGood?: IoK8sApiCoreV1NodeConfigSource;
}
