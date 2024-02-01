import { IoK8sApiCoreV1ResourceQuotaSpecModelOptions as IoK8sApiCoreV1ResourceQuotaSpec } from '../IoK8sApiCoreV1ResourceQuotaSpec';
import { IoK8sApiCoreV1ResourceQuotaStatusModelOptions as IoK8sApiCoreV1ResourceQuotaStatus } from '../IoK8sApiCoreV1ResourceQuotaStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1ResourceQuotaModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ResourceQuotaSpec;
  status?: IoK8sApiCoreV1ResourceQuotaStatus;
}
