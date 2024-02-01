import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiCoreV1TopologySpreadConstraintModelOptions {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  matchLabelKeys?: Array<string>;
  maxSkew: number;
  minDomains?: number;
  nodeAffinityPolicy?: string;
  nodeTaintsPolicy?: string;
  topologyKey: string;
  whenUnsatisfiable: string;
}
