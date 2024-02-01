import { IoK8sApiRbacV1PolicyRuleModelOptions as IoK8sApiRbacV1PolicyRule } from '../IoK8sApiRbacV1PolicyRule';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiRbacV1RoleModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  rules?: Array<IoK8sApiRbacV1PolicyRule>;
}
