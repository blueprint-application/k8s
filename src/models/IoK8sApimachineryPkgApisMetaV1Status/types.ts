import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1StatusDetailsModelOptions as IoK8sApimachineryPkgApisMetaV1StatusDetails } from '../IoK8sApimachineryPkgApisMetaV1StatusDetails';

export interface IoK8sApimachineryPkgApisMetaV1StatusModelOptions {
  apiVersion?: string;
  code?: number;
  details?: IoK8sApimachineryPkgApisMetaV1StatusDetails;
  kind?: string;
  message?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
  reason?: string;
  status?: string;
}
