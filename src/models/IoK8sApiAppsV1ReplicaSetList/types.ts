import { IoK8sApiAppsV1ReplicaSetModelOptions as IoK8sApiAppsV1ReplicaSet } from '../IoK8sApiAppsV1ReplicaSet';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiAppsV1ReplicaSetListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiAppsV1ReplicaSet>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
