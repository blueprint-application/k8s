import { IoK8sApiRbacV1RoleRefModelOptions as IoK8sApiRbacV1RoleRef } from '../IoK8sApiRbacV1RoleRef';
import { IoK8sApiRbacV1SubjectModelOptions as IoK8sApiRbacV1Subject } from '../IoK8sApiRbacV1Subject';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiRbacV1RoleBindingModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  roleRef: IoK8sApiRbacV1RoleRef;
  subjects?: Array<IoK8sApiRbacV1Subject>;
}
