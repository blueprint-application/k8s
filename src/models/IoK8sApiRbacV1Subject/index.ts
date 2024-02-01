import { BaseModel } from '../types';
import type { IoK8sApiRbacV1SubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1SubjectModel extends BaseModel {
  // APIGroup holds the API group of the referenced subject. Defaults to \"\" for ServiceAccount subjects. Defaults to \"rbac.authorization.k8s.io\" for User and Group subjects.
  apiGroup?: string;
  // Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
  kind: string;
  // Name of the object being referenced.
  name: string;
  // Namespace of the referenced object.  If the object kind is non-namespace, such as \"User\" or \"Group\", and this value is not empty the Authorizer should report an error.
  namespace?: string;

  constructor(data: IoK8sApiRbacV1SubjectModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: IoK8sApiRbacV1SubjectModelOptions): IoK8sApiRbacV1SubjectModel {
    return new IoK8sApiRbacV1SubjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1SubjectModel;
