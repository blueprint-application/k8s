import { IoK8sApiAppsV1DaemonSetModelOptions as IoK8sApiAppsV1DaemonSet } from '../IoK8sApiAppsV1DaemonSet';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiAppsV1DaemonSetListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiAppsV1DaemonSet>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
