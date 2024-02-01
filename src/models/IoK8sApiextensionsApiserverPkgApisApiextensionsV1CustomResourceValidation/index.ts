import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModel extends BaseModel {
  openAPIV3Schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModelOptions) {
    super();
    validate(data);
    this.openAPIV3Schema = data.openAPIV3Schema;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModel(data);
  }

  toObject(): Partial<this> {
    return {
      openAPIV3Schema: this.openAPIV3Schema,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidationModel;
