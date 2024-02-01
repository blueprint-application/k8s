import { IoK8sApiRbacV1AggregationRuleModelOptions as IoK8sApiRbacV1AggregationRule } from '../IoK8sApiRbacV1AggregationRule';
import { IoK8sApiRbacV1PolicyRuleModelOptions as IoK8sApiRbacV1PolicyRule } from '../IoK8sApiRbacV1PolicyRule';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiRbacV1ClusterRoleModelOptions {
  aggregationRule?: IoK8sApiRbacV1AggregationRule;
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  rules?: Array<IoK8sApiRbacV1PolicyRule>;
}
