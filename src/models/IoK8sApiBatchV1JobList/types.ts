import { IoK8sApiBatchV1JobModelOptions as IoK8sApiBatchV1Job } from '../IoK8sApiBatchV1Job';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiBatchV1JobListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiBatchV1Job>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
