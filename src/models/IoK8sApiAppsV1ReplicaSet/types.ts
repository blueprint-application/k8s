import { IoK8sApiAppsV1ReplicaSetSpecModelOptions as IoK8sApiAppsV1ReplicaSetSpec } from '../IoK8sApiAppsV1ReplicaSetSpec';
import { IoK8sApiAppsV1ReplicaSetStatusModelOptions as IoK8sApiAppsV1ReplicaSetStatus } from '../IoK8sApiAppsV1ReplicaSetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAppsV1ReplicaSetModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1ReplicaSetSpec;
  status?: IoK8sApiAppsV1ReplicaSetStatus;
}
