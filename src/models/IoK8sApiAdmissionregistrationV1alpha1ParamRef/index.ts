import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1ParamRefModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1ParamRefModel extends BaseModel {
  // `name` is the name of the resource being referenced.  `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
  name?: string;
  // namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.  A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.  - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.  - If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
  namespace?: string;
  // `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.  Allowed values are `Allow` or `Deny` Default to `Deny`
  parameterNotFoundAction?: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1ParamRefModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
    this.parameterNotFoundAction = data.parameterNotFoundAction;
    this.selector = data.selector;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1ParamRefModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1ParamRefModel {
    return new IoK8sApiAdmissionregistrationV1alpha1ParamRefModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
      parameterNotFoundAction: this.parameterNotFoundAction,
      selector: this.selector,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1ParamRefModel;
