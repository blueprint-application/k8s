import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceHandleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceHandleModel extends BaseModel {
  // Data contains the opaque data associated with this ResourceHandle. It is set by the controller component of the resource driver whose name matches the DriverName set in the ResourceClaimStatus this ResourceHandle is embedded in. It is set at allocation time and is intended for processing by the kubelet plugin whose name matches the DriverName set in this ResourceHandle.  The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
  data?: string;
  // DriverName specifies the name of the resource driver whose kubelet plugin should be invoked to process this ResourceHandle\'s data once it lands on a node. This may differ from the DriverName set in ResourceClaimStatus this ResourceHandle is embedded in.
  driverName?: string;

  constructor(data: IoK8sApiResourceV1alpha2ResourceHandleModelOptions) {
    super();
    validate(data);
    this.data = data.data;
    this.driverName = data.driverName;
  }

  static create(data: IoK8sApiResourceV1alpha2ResourceHandleModelOptions): IoK8sApiResourceV1alpha2ResourceHandleModel {
    return new IoK8sApiResourceV1alpha2ResourceHandleModel(data);
  }

  toObject(): Partial<this> {
    return {
      data: this.data,
      driverName: this.driverName,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceHandleModel;
