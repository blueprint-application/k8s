import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModel extends BaseModel {
  // additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
  additionalPrinterColumns?: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>;
  // deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
  deprecated?: boolean;
  // deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
  deprecationWarning?: string;
  // name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
  name: string;
  schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;
  // served is a flag enabling/disabling this version from being served via REST APIs
  served: boolean;
  // storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
  storage: boolean;
  subresources?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModelOptions) {
    super();
    validate(data);
    this.additionalPrinterColumns = data.additionalPrinterColumns;
    this.deprecated = data.deprecated;
    this.deprecationWarning = data.deprecationWarning;
    this.name = data.name;
    this.schema = data.schema;
    this.served = data.served;
    this.storage = data.storage;
    this.subresources = data.subresources;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModel(data);
  }

  toObject(): Partial<this> {
    return {
      additionalPrinterColumns: this.additionalPrinterColumns,
      deprecated: this.deprecated,
      deprecationWarning: this.deprecationWarning,
      name: this.name,
      schema: this.schema,
      served: this.served,
      storage: this.storage,
      subresources: this.subresources,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModel;
