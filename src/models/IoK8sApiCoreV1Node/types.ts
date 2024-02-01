import { IoK8sApiCoreV1NodeSpecModelOptions as IoK8sApiCoreV1NodeSpec } from '../IoK8sApiCoreV1NodeSpec';
import { IoK8sApiCoreV1NodeStatusModelOptions as IoK8sApiCoreV1NodeStatus } from '../IoK8sApiCoreV1NodeStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1NodeModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1NodeSpec;
  status?: IoK8sApiCoreV1NodeStatus;
}
