import { IoK8sApiCoordinationV1LeaseSpecModelOptions as IoK8sApiCoordinationV1LeaseSpec } from '../IoK8sApiCoordinationV1LeaseSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoordinationV1LeaseModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoordinationV1LeaseSpec;
}
