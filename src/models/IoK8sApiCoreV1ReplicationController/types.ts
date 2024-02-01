import { IoK8sApiCoreV1ReplicationControllerSpecModelOptions as IoK8sApiCoreV1ReplicationControllerSpec } from '../IoK8sApiCoreV1ReplicationControllerSpec';
import { IoK8sApiCoreV1ReplicationControllerStatusModelOptions as IoK8sApiCoreV1ReplicationControllerStatus } from '../IoK8sApiCoreV1ReplicationControllerStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1ReplicationControllerModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ReplicationControllerSpec;
  status?: IoK8sApiCoreV1ReplicationControllerStatus;
}
