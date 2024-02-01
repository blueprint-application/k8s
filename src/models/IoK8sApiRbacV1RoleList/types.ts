import { IoK8sApiRbacV1RoleModelOptions as IoK8sApiRbacV1Role } from '../IoK8sApiRbacV1Role';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiRbacV1RoleListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiRbacV1Role>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
