import { IoK8sApiCoreV1EnvVarSourceModelOptions as IoK8sApiCoreV1EnvVarSource } from '../IoK8sApiCoreV1EnvVarSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EnvVarModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EnvVarModel extends BaseModel {
  // Name of the environment variable. Must be a C_IDENTIFIER.
  name: string;
  // Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
  value?: string;
  valueFrom?: IoK8sApiCoreV1EnvVarSource;

  constructor(data: IoK8sApiCoreV1EnvVarModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
    this.valueFrom = data.valueFrom;
  }

  static create(data: IoK8sApiCoreV1EnvVarModelOptions): IoK8sApiCoreV1EnvVarModel {
    return new IoK8sApiCoreV1EnvVarModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
      valueFrom: this.valueFrom,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EnvVarModel;
