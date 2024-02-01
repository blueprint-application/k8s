import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiCoreV1PodAffinityTermModelOptions {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  matchLabelKeys?: Array<string>;
  mismatchLabelKeys?: Array<string>;
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  namespaces?: Array<string>;
  topologyKey: string;
}
