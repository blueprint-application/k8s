import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerImageModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerImageModel extends BaseModel {
  // Names by which this image is known. e.g. [\"kubernetes.example/hyperkube:v1.0.7\", \"cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7\"]
  names?: Array<string>;
  // The size of the image in bytes.
  sizeBytes?: number;

  constructor(data: IoK8sApiCoreV1ContainerImageModelOptions) {
    super();
    validate(data);
    this.names = data.names;
    this.sizeBytes = data.sizeBytes;
  }

  static create(data: IoK8sApiCoreV1ContainerImageModelOptions): IoK8sApiCoreV1ContainerImageModel {
    return new IoK8sApiCoreV1ContainerImageModel(data);
  }

  toObject(): Partial<this> {
    return {
      names: this.names,
      sizeBytes: this.sizeBytes,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerImageModel;
