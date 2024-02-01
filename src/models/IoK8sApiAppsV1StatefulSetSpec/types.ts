import { IoK8sApiAppsV1StatefulSetOrdinalsModelOptions as IoK8sApiAppsV1StatefulSetOrdinals } from '../IoK8sApiAppsV1StatefulSetOrdinals';
import { IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModelOptions as IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy } from '../IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy';
import { IoK8sApiAppsV1StatefulSetUpdateStrategyModelOptions as IoK8sApiAppsV1StatefulSetUpdateStrategy } from '../IoK8sApiAppsV1StatefulSetUpdateStrategy';
import { IoK8sApiCoreV1PersistentVolumeClaimModelOptions as IoK8sApiCoreV1PersistentVolumeClaim } from '../IoK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiAppsV1StatefulSetSpecModelOptions {
  minReadySeconds?: number;
  ordinals?: IoK8sApiAppsV1StatefulSetOrdinals;
  persistentVolumeClaimRetentionPolicy?: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy;
  podManagementPolicy?: string;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  serviceName: string;
  template: IoK8sApiCoreV1PodTemplateSpec;
  updateStrategy?: IoK8sApiAppsV1StatefulSetUpdateStrategy;
  volumeClaimTemplates?: Array<IoK8sApiCoreV1PersistentVolumeClaim>;
}
