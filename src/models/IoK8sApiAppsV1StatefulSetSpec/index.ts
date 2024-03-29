import { IoK8sApiAppsV1StatefulSetOrdinalsModelOptions as IoK8sApiAppsV1StatefulSetOrdinals } from '../IoK8sApiAppsV1StatefulSetOrdinals';
import { IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModelOptions as IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy } from '../IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy';
import { IoK8sApiAppsV1StatefulSetUpdateStrategyModelOptions as IoK8sApiAppsV1StatefulSetUpdateStrategy } from '../IoK8sApiAppsV1StatefulSetUpdateStrategy';
import { IoK8sApiCoreV1PersistentVolumeClaimModelOptions as IoK8sApiCoreV1PersistentVolumeClaim } from '../IoK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetSpecModel extends BaseModel {
  // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  minReadySeconds?: number;
  ordinals?: IoK8sApiAppsV1StatefulSetOrdinals;
  persistentVolumeClaimRetentionPolicy?: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy;
  // podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
  podManagementPolicy?: string;
  // replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
  replicas?: number;
  // revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet\'s revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where \"pod-specific-string\" is managed by the StatefulSet controller.
  serviceName: string;
  template: IoK8sApiCoreV1PodTemplateSpec;
  updateStrategy?: IoK8sApiAppsV1StatefulSetUpdateStrategy;
  // volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
  volumeClaimTemplates?: Array<IoK8sApiCoreV1PersistentVolumeClaim>;

  constructor(data: IoK8sApiAppsV1StatefulSetSpecModelOptions) {
    super();
    validate(data);
    this.minReadySeconds = data.minReadySeconds;
    this.ordinals = data.ordinals;
    this.persistentVolumeClaimRetentionPolicy = data.persistentVolumeClaimRetentionPolicy;
    this.podManagementPolicy = data.podManagementPolicy;
    this.replicas = data.replicas;
    this.revisionHistoryLimit = data.revisionHistoryLimit;
    this.selector = data.selector;
    this.serviceName = data.serviceName;
    this.template = data.template;
    this.updateStrategy = data.updateStrategy;
    this.volumeClaimTemplates = data.volumeClaimTemplates;
  }

  static create(data: IoK8sApiAppsV1StatefulSetSpecModelOptions): IoK8sApiAppsV1StatefulSetSpecModel {
    return new IoK8sApiAppsV1StatefulSetSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      minReadySeconds: this.minReadySeconds,
      ordinals: this.ordinals,
      persistentVolumeClaimRetentionPolicy: this.persistentVolumeClaimRetentionPolicy,
      podManagementPolicy: this.podManagementPolicy,
      replicas: this.replicas,
      revisionHistoryLimit: this.revisionHistoryLimit,
      selector: this.selector,
      serviceName: this.serviceName,
      template: this.template,
      updateStrategy: this.updateStrategy,
      volumeClaimTemplates: this.volumeClaimTemplates,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetSpecModel;
