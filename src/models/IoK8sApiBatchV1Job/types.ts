import { IoK8sApiBatchV1JobSpecModelOptions as IoK8sApiBatchV1JobSpec } from '../IoK8sApiBatchV1JobSpec';
import { IoK8sApiBatchV1JobStatusModelOptions as IoK8sApiBatchV1JobStatus } from '../IoK8sApiBatchV1JobStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiBatchV1JobModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;
  status?: IoK8sApiBatchV1JobStatus;
}
