import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1ResourceAttributesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1ResourceAttributesModel extends BaseModel {
  // Group is the API Group of the Resource.  \"*\" means all.
  group?: string;
  // Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
  name?: string;
  // Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
  namespace?: string;
  // Resource is one of the existing resource types.  \"*\" means all.
  resource?: string;
  // Subresource is one of the existing resource types.  \"\" means none.
  subresource?: string;
  // Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
  verb?: string;
  // Version is the API Version of the Resource.  \"*\" means all.
  version?: string;

  constructor(data: IoK8sApiAuthorizationV1ResourceAttributesModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.name = data.name;
    this.namespace = data.namespace;
    this.resource = data.resource;
    this.subresource = data.subresource;
    this.verb = data.verb;
    this.version = data.version;
  }

  static create(
    data: IoK8sApiAuthorizationV1ResourceAttributesModelOptions,
  ): IoK8sApiAuthorizationV1ResourceAttributesModel {
    return new IoK8sApiAuthorizationV1ResourceAttributesModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      name: this.name,
      namespace: this.namespace,
      resource: this.resource,
      subresource: this.subresource,
      verb: this.verb,
      version: this.version,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1ResourceAttributesModel;
