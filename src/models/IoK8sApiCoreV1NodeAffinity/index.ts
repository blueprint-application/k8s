import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiCoreV1PreferredSchedulingTermModelOptions as IoK8sApiCoreV1PreferredSchedulingTerm } from '../IoK8sApiCoreV1PreferredSchedulingTerm';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeAffinityModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeAffinityModel extends BaseModel {
  // The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  preferredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1PreferredSchedulingTerm>;
  requiredDuringSchedulingIgnoredDuringExecution?: IoK8sApiCoreV1NodeSelector;

  constructor(data: IoK8sApiCoreV1NodeAffinityModelOptions) {
    super();
    validate(data);
    this.preferredDuringSchedulingIgnoredDuringExecution = data.preferredDuringSchedulingIgnoredDuringExecution;
    this.requiredDuringSchedulingIgnoredDuringExecution = data.requiredDuringSchedulingIgnoredDuringExecution;
  }

  static create(data: IoK8sApiCoreV1NodeAffinityModelOptions): IoK8sApiCoreV1NodeAffinityModel {
    return new IoK8sApiCoreV1NodeAffinityModel(data);
  }

  toObject(): Partial<this> {
    return {
      preferredDuringSchedulingIgnoredDuringExecution: this.preferredDuringSchedulingIgnoredDuringExecution,
      requiredDuringSchedulingIgnoredDuringExecution: this.requiredDuringSchedulingIgnoredDuringExecution,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeAffinityModel;
