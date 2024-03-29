import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ObjectReferenceModel extends BaseModel {
  // API version of the referent.
  apiVersion?: string;
  // If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: \"spec.containers{name}\" (where \"name\" refers to the name of the container that triggered the event) or if no container name is specified \"spec.containers[2]\" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  fieldPath?: string;
  // Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  namespace?: string;
  // Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  resourceVersion?: string;
  // UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  uid?: string;

  constructor(data: IoK8sApiCoreV1ObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.fieldPath = data.fieldPath;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.resourceVersion = data.resourceVersion;
    this.uid = data.uid;
  }

  static create(data: IoK8sApiCoreV1ObjectReferenceModelOptions): IoK8sApiCoreV1ObjectReferenceModel {
    return new IoK8sApiCoreV1ObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      fieldPath: this.fieldPath,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      resourceVersion: this.resourceVersion,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ObjectReferenceModel;
