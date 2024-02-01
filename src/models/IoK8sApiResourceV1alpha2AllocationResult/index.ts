import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiResourceV1alpha2ResourceHandleModelOptions as IoK8sApiResourceV1alpha2ResourceHandle } from '../IoK8sApiResourceV1alpha2ResourceHandle';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2AllocationResultModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2AllocationResultModel extends BaseModel {
  availableOnNodes?: IoK8sApiCoreV1NodeSelector;
  // ResourceHandles contain the state associated with an allocation that should be maintained throughout the lifetime of a claim. Each ResourceHandle contains data that should be passed to a specific kubelet plugin once it lands on a node. This data is returned by the driver after a successful allocation and is opaque to Kubernetes. Driver documentation may explain to users how to interpret this data if needed.  Setting this field is optional. It has a maximum size of 32 entries. If null (or empty), it is assumed this allocation will be processed by a single kubelet plugin with no ResourceHandle data attached. The name of the kubelet plugin invoked will match the DriverName set in the ResourceClaimStatus this AllocationResult is embedded in.
  resourceHandles?: Array<IoK8sApiResourceV1alpha2ResourceHandle>;
  // Shareable determines whether the resource supports more than one consumer at a time.
  shareable?: boolean;

  constructor(data: IoK8sApiResourceV1alpha2AllocationResultModelOptions) {
    super();
    validate(data);
    this.availableOnNodes = data.availableOnNodes;
    this.resourceHandles = data.resourceHandles;
    this.shareable = data.shareable;
  }

  static create(
    data: IoK8sApiResourceV1alpha2AllocationResultModelOptions,
  ): IoK8sApiResourceV1alpha2AllocationResultModel {
    return new IoK8sApiResourceV1alpha2AllocationResultModel(data);
  }

  toObject(): Partial<this> {
    return {
      availableOnNodes: this.availableOnNodes,
      resourceHandles: this.resourceHandles,
      shareable: this.shareable,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2AllocationResultModel;
