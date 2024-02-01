import { IoK8sApiAppsV1StatefulSetSpecModelOptions as IoK8sApiAppsV1StatefulSetSpec } from '../IoK8sApiAppsV1StatefulSetSpec';
import { IoK8sApiAppsV1StatefulSetStatusModelOptions as IoK8sApiAppsV1StatefulSetStatus } from '../IoK8sApiAppsV1StatefulSetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAppsV1StatefulSetModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1StatefulSetSpec;
  status?: IoK8sApiAppsV1StatefulSetStatus;
}
