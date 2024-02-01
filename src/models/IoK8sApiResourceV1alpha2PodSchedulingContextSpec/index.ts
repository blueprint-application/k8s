import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2PodSchedulingContextSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2PodSchedulingContextSpecModel extends BaseModel {
  // PotentialNodes lists nodes where the Pod might be able to run.  The size of this field is limited to 128. This is large enough for many clusters. Larger clusters may need more attempts to find a node that suits all pending resources. This may get increased in the future, but not reduced.
  potentialNodes?: Array<string>;
  // SelectedNode is the node for which allocation of ResourceClaims that are referenced by the Pod and that use \"WaitForFirstConsumer\" allocation is to be attempted.
  selectedNode?: string;

  constructor(data: IoK8sApiResourceV1alpha2PodSchedulingContextSpecModelOptions) {
    super();
    validate(data);
    this.potentialNodes = data.potentialNodes;
    this.selectedNode = data.selectedNode;
  }

  static create(
    data: IoK8sApiResourceV1alpha2PodSchedulingContextSpecModelOptions,
  ): IoK8sApiResourceV1alpha2PodSchedulingContextSpecModel {
    return new IoK8sApiResourceV1alpha2PodSchedulingContextSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      potentialNodes: this.potentialNodes,
      selectedNode: this.selectedNode,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2PodSchedulingContextSpecModel;
