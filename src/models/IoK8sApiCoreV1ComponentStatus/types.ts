import { IoK8sApiCoreV1ComponentConditionModelOptions as IoK8sApiCoreV1ComponentCondition } from '../IoK8sApiCoreV1ComponentCondition';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1ComponentStatusModelOptions {
  apiVersion?: string;
  conditions?: Array<IoK8sApiCoreV1ComponentCondition>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}
