import { IoK8sApiCoreV1ConfigMapEnvSourceModelOptions as IoK8sApiCoreV1ConfigMapEnvSource } from '../IoK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1SecretEnvSourceModelOptions as IoK8sApiCoreV1SecretEnvSource } from '../IoK8sApiCoreV1SecretEnvSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EnvFromSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EnvFromSourceModel extends BaseModel {
  configMapRef?: IoK8sApiCoreV1ConfigMapEnvSource;
  // An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  prefix?: string;
  secretRef?: IoK8sApiCoreV1SecretEnvSource;

  constructor(data: IoK8sApiCoreV1EnvFromSourceModelOptions) {
    super();
    validate(data);
    this.configMapRef = data.configMapRef;
    this.prefix = data.prefix;
    this.secretRef = data.secretRef;
  }

  static create(data: IoK8sApiCoreV1EnvFromSourceModelOptions): IoK8sApiCoreV1EnvFromSourceModel {
    return new IoK8sApiCoreV1EnvFromSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      configMapRef: this.configMapRef,
      prefix: this.prefix,
      secretRef: this.secretRef,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EnvFromSourceModel;
