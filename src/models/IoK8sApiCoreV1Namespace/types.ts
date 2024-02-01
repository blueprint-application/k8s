import { IoK8sApiCoreV1NamespaceSpecModelOptions as IoK8sApiCoreV1NamespaceSpec } from '../IoK8sApiCoreV1NamespaceSpec';
import { IoK8sApiCoreV1NamespaceStatusModelOptions as IoK8sApiCoreV1NamespaceStatus } from '../IoK8sApiCoreV1NamespaceStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1NamespaceModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1NamespaceSpec;
  status?: IoK8sApiCoreV1NamespaceStatus;
}
