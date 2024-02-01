import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryModelOptions as IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from '../IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1OwnerReferenceModelOptions as IoK8sApimachineryPkgApisMetaV1OwnerReference } from '../IoK8sApimachineryPkgApisMetaV1OwnerReference';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1ObjectMetaModel extends BaseModel {
  // Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  annotations?: { [key: string]: string };
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  creationTimestamp?: Date;
  // Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
  deletionGracePeriodSeconds?: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  deletionTimestamp?: Date;
  // Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
  finalizers?: Array<string>;
  // GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will return a 409.  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
  generateName?: string;
  // A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
  generation?: number;
  // Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  labels?: { [key: string]: string };
  // ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn\'t need to set or understand this field. A workflow can be the user\'s name, a controller\'s name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.
  managedFields?: Array<IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry>;
  // Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  name?: string;
  // Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
  namespace?: string;
  // List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
  ownerReferences?: Array<IoK8sApimachineryPkgApisMetaV1OwnerReference>;
  // An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  resourceVersion?: string;
  // Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
  selfLink?: string;
  // UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  uid?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions) {
    super();
    validate(data);
    this.annotations = data.annotations;
    this.creationTimestamp = data.creationTimestamp;
    this.deletionGracePeriodSeconds = data.deletionGracePeriodSeconds;
    this.deletionTimestamp = data.deletionTimestamp;
    this.finalizers = data.finalizers;
    this.generateName = data.generateName;
    this.generation = data.generation;
    this.labels = data.labels;
    this.managedFields = data.managedFields;
    this.name = data.name;
    this.namespace = data.namespace;
    this.ownerReferences = data.ownerReferences;
    this.resourceVersion = data.resourceVersion;
    this.selfLink = data.selfLink;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1ObjectMetaModel {
    return new IoK8sApimachineryPkgApisMetaV1ObjectMetaModel(data);
  }

  toObject(): Partial<this> {
    return {
      annotations: this.annotations,
      creationTimestamp: this.creationTimestamp,
      deletionGracePeriodSeconds: this.deletionGracePeriodSeconds,
      deletionTimestamp: this.deletionTimestamp,
      finalizers: this.finalizers,
      generateName: this.generateName,
      generation: this.generation,
      labels: this.labels,
      managedFields: this.managedFields,
      name: this.name,
      namespace: this.namespace,
      ownerReferences: this.ownerReferences,
      resourceVersion: this.resourceVersion,
      selfLink: this.selfLink,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1ObjectMetaModel;
