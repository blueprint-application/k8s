import { IoK8sApiCoreV1PodAffinityTermModelOptions as IoK8sApiCoreV1PodAffinityTerm } from '../IoK8sApiCoreV1PodAffinityTerm';
import { IoK8sApiCoreV1WeightedPodAffinityTermModelOptions as IoK8sApiCoreV1WeightedPodAffinityTerm } from '../IoK8sApiCoreV1WeightedPodAffinityTerm';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodAntiAffinityModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodAntiAffinityModel extends BaseModel {
  // The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  preferredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1WeightedPodAffinityTerm>;
  // If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  requiredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1PodAffinityTerm>;

  constructor(data: IoK8sApiCoreV1PodAntiAffinityModelOptions) {
    super();
    validate(data);
    this.preferredDuringSchedulingIgnoredDuringExecution = data.preferredDuringSchedulingIgnoredDuringExecution;
    this.requiredDuringSchedulingIgnoredDuringExecution = data.requiredDuringSchedulingIgnoredDuringExecution;
  }

  static create(data: IoK8sApiCoreV1PodAntiAffinityModelOptions): IoK8sApiCoreV1PodAntiAffinityModel {
    return new IoK8sApiCoreV1PodAntiAffinityModel(data);
  }

  toObject(): Partial<this> {
    return {
      preferredDuringSchedulingIgnoredDuringExecution: this.preferredDuringSchedulingIgnoredDuringExecution,
      requiredDuringSchedulingIgnoredDuringExecution: this.requiredDuringSchedulingIgnoredDuringExecution,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodAntiAffinityModel;
