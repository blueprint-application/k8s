import { IoK8sApiAppsV1DaemonSetSpecModelOptions as IoK8sApiAppsV1DaemonSetSpec } from '../IoK8sApiAppsV1DaemonSetSpec';
import { IoK8sApiAppsV1DaemonSetStatusModelOptions as IoK8sApiAppsV1DaemonSetStatus } from '../IoK8sApiAppsV1DaemonSetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAppsV1DaemonSetModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1DaemonSetSpec;
  status?: IoK8sApiAppsV1DaemonSetStatus;
}
