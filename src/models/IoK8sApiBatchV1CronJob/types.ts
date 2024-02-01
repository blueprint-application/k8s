import { IoK8sApiBatchV1CronJobSpecModelOptions as IoK8sApiBatchV1CronJobSpec } from '../IoK8sApiBatchV1CronJobSpec';
import { IoK8sApiBatchV1CronJobStatusModelOptions as IoK8sApiBatchV1CronJobStatus } from '../IoK8sApiBatchV1CronJobStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiBatchV1CronJobModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1CronJobSpec;
  status?: IoK8sApiBatchV1CronJobStatus;
}
