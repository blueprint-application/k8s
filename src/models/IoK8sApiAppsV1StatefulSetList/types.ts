import { IoK8sApiAppsV1StatefulSetModelOptions as IoK8sApiAppsV1StatefulSet } from '../IoK8sApiAppsV1StatefulSet';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiAppsV1StatefulSetListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiAppsV1StatefulSet>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
