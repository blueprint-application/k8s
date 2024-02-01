import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ConfigMapNodeConfigSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ConfigMapNodeConfigSourceModel extends BaseModel {
  // KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
  kubeletConfigKey: string;
  // Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
  name: string;
  // Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
  namespace: string;
  // ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
  resourceVersion?: string;
  // UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
  uid?: string;

  constructor(data: IoK8sApiCoreV1ConfigMapNodeConfigSourceModelOptions) {
    super();
    validate(data);
    this.kubeletConfigKey = data.kubeletConfigKey;
    this.name = data.name;
    this.namespace = data.namespace;
    this.resourceVersion = data.resourceVersion;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApiCoreV1ConfigMapNodeConfigSourceModelOptions,
  ): IoK8sApiCoreV1ConfigMapNodeConfigSourceModel {
    return new IoK8sApiCoreV1ConfigMapNodeConfigSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      kubeletConfigKey: this.kubeletConfigKey,
      name: this.name,
      namespace: this.namespace,
      resourceVersion: this.resourceVersion,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ConfigMapNodeConfigSourceModel;
