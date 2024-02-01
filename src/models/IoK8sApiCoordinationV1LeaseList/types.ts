import { IoK8sApiCoordinationV1LeaseModelOptions as IoK8sApiCoordinationV1Lease } from '../IoK8sApiCoordinationV1Lease';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoordinationV1LeaseListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoordinationV1Lease>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
