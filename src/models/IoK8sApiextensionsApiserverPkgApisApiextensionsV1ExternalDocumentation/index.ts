import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModel extends BaseModel {
  description?: string;
  url?: string;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.url = data.url;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      url: this.url,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1ExternalDocumentationModel;
