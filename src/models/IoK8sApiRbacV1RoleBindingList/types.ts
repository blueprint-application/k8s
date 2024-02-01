import { IoK8sApiRbacV1RoleBindingModelOptions as IoK8sApiRbacV1RoleBinding } from '../IoK8sApiRbacV1RoleBinding';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiRbacV1RoleBindingListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiRbacV1RoleBinding>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
