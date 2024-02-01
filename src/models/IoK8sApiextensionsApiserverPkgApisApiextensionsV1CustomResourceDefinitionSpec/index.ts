import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModel extends BaseModel {
  conversion?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion;
  // group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
  group: string;
  names: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
  // preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.
  preserveUnknownFields?: boolean;
  // scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
  scope: string;
  // versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
  versions: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion>;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModelOptions) {
    super();
    validate(data);
    this.conversion = data.conversion;
    this.group = data.group;
    this.names = data.names;
    this.preserveUnknownFields = data.preserveUnknownFields;
    this.scope = data.scope;
    this.versions = data.versions;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      conversion: this.conversion,
      group: this.group,
      names: this.names,
      preserveUnknownFields: this.preserveUnknownFields,
      scope: this.scope,
      versions: this.versions,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpecModel;
