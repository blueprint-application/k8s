import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModel extends BaseModel {
  // categories is a list of grouped resources this custom resource belongs to (e.g. \'all\'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
  categories?: Array<string>;
  // kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
  kind: string;
  // listKind is the serialized kind of the list for this resource. Defaults to \"`kind`List\".
  listKind?: string;
  // plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
  plural: string;
  // shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
  shortNames?: Array<string>;
  // singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
  singular?: string;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModelOptions) {
    super();
    validate(data);
    this.categories = data.categories;
    this.kind = data.kind;
    this.listKind = data.listKind;
    this.plural = data.plural;
    this.shortNames = data.shortNames;
    this.singular = data.singular;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModel(data);
  }

  toObject(): Partial<this> {
    return {
      categories: this.categories,
      kind: this.kind,
      listKind: this.listKind,
      plural: this.plural,
      shortNames: this.shortNames,
      singular: this.singular,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModel;
