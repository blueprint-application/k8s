import { IoK8sApiCoreV1ConfigMapKeySelectorModelOptions as IoK8sApiCoreV1ConfigMapKeySelector } from '../IoK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1ObjectFieldSelectorModelOptions as IoK8sApiCoreV1ObjectFieldSelector } from '../IoK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ResourceFieldSelectorModelOptions as IoK8sApiCoreV1ResourceFieldSelector } from '../IoK8sApiCoreV1ResourceFieldSelector';
import { IoK8sApiCoreV1SecretKeySelectorModelOptions as IoK8sApiCoreV1SecretKeySelector } from '../IoK8sApiCoreV1SecretKeySelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EnvVarSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EnvVarSourceModel extends BaseModel {
  configMapKeyRef?: IoK8sApiCoreV1ConfigMapKeySelector;
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
  secretKeyRef?: IoK8sApiCoreV1SecretKeySelector;

  constructor(data: IoK8sApiCoreV1EnvVarSourceModelOptions) {
    super();
    validate(data);
    this.configMapKeyRef = data.configMapKeyRef;
    this.fieldRef = data.fieldRef;
    this.resourceFieldRef = data.resourceFieldRef;
    this.secretKeyRef = data.secretKeyRef;
  }

  static create(data: IoK8sApiCoreV1EnvVarSourceModelOptions): IoK8sApiCoreV1EnvVarSourceModel {
    return new IoK8sApiCoreV1EnvVarSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      configMapKeyRef: this.configMapKeyRef,
      fieldRef: this.fieldRef,
      resourceFieldRef: this.resourceFieldRef,
      secretKeyRef: this.secretKeyRef,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EnvVarSourceModel;
