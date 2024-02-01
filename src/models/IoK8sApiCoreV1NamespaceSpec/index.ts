import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NamespaceSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NamespaceSpecModel extends BaseModel {
  // Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
  finalizers?: Array<string>;

  constructor(data: IoK8sApiCoreV1NamespaceSpecModelOptions) {
    super();
    validate(data);
    this.finalizers = data.finalizers;
  }

  static create(data: IoK8sApiCoreV1NamespaceSpecModelOptions): IoK8sApiCoreV1NamespaceSpecModel {
    return new IoK8sApiCoreV1NamespaceSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      finalizers: this.finalizers,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NamespaceSpecModel;
