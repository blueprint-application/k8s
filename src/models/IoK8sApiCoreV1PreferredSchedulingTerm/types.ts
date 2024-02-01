import { IoK8sApiCoreV1NodeSelectorTermModelOptions as IoK8sApiCoreV1NodeSelectorTerm } from '../IoK8sApiCoreV1NodeSelectorTerm';

export interface IoK8sApiCoreV1PreferredSchedulingTermModelOptions {
  preference: IoK8sApiCoreV1NodeSelectorTerm;
  weight: number;
}
