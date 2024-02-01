import { IoK8sApiNodeV1OverheadModelOptions as IoK8sApiNodeV1Overhead } from '../IoK8sApiNodeV1Overhead';
import { IoK8sApiNodeV1SchedulingModelOptions as IoK8sApiNodeV1Scheduling } from '../IoK8sApiNodeV1Scheduling';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiNodeV1RuntimeClassModelOptions {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  overhead?: IoK8sApiNodeV1Overhead;
  scheduling?: IoK8sApiNodeV1Scheduling;
}
