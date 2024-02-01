import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModel extends BaseModel {
  // description is a human readable description of this column.
  description?: string;
  // format is an optional OpenAPI type definition for this column. The \'name\' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
  format?: string;
  // jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
  jsonPath: string;
  // name is a human readable name for the column.
  name: string;
  // priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
  priority?: number;
  // type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
  type: string;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.format = data.format;
    this.jsonPath = data.jsonPath;
    this.name = data.name;
    this.priority = data.priority;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      format: this.format,
      jsonPath: this.jsonPath,
      name: this.name,
      priority: this.priority,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionModel;
