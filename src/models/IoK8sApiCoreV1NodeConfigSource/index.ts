import { IoK8sApiCoreV1ConfigMapNodeConfigSourceModelOptions as IoK8sApiCoreV1ConfigMapNodeConfigSource } from '../IoK8sApiCoreV1ConfigMapNodeConfigSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeConfigSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeConfigSourceModel extends BaseModel {
  configMap?: IoK8sApiCoreV1ConfigMapNodeConfigSource;

  constructor(data: IoK8sApiCoreV1NodeConfigSourceModelOptions) {
    super();
    validate(data);
    this.configMap = data.configMap;
  }

  static create(data: IoK8sApiCoreV1NodeConfigSourceModelOptions): IoK8sApiCoreV1NodeConfigSourceModel {
    return new IoK8sApiCoreV1NodeConfigSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      configMap: this.configMap,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeConfigSourceModel;
