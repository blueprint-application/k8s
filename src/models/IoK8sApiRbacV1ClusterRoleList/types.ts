import { IoK8sApiRbacV1ClusterRoleModelOptions as IoK8sApiRbacV1ClusterRole } from '../IoK8sApiRbacV1ClusterRole';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiRbacV1ClusterRoleListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiRbacV1ClusterRole>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
