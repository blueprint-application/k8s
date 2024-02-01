import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1SecretModelOptions {
  apiVersion?: string;
  data?: { [key: string]: string };
  immutable?: boolean;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  stringData?: { [key: string]: string };
  type?: string;
}
