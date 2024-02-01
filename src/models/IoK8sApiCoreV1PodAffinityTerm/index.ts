import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodAffinityTermModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodAffinityTermModel extends BaseModel {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn\'t set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  matchLabelKeys?: Array<string>;
  // MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn\'t set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  mismatchLabelKeys?: Array<string>;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \"this pod\'s namespace\".
  namespaces?: Array<string>;
  // This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  topologyKey: string;

  constructor(data: IoK8sApiCoreV1PodAffinityTermModelOptions) {
    super();
    validate(data);
    this.labelSelector = data.labelSelector;
    this.matchLabelKeys = data.matchLabelKeys;
    this.mismatchLabelKeys = data.mismatchLabelKeys;
    this.namespaceSelector = data.namespaceSelector;
    this.namespaces = data.namespaces;
    this.topologyKey = data.topologyKey;
  }

  static create(data: IoK8sApiCoreV1PodAffinityTermModelOptions): IoK8sApiCoreV1PodAffinityTermModel {
    return new IoK8sApiCoreV1PodAffinityTermModel(data);
  }

  toObject(): Partial<this> {
    return {
      labelSelector: this.labelSelector,
      matchLabelKeys: this.matchLabelKeys,
      mismatchLabelKeys: this.mismatchLabelKeys,
      namespaceSelector: this.namespaceSelector,
      namespaces: this.namespaces,
      topologyKey: this.topologyKey,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodAffinityTermModel;
