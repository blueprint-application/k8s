import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModel extends BaseModel {
  scale?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale;
  // CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
  status?: any;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModelOptions) {
    super();
    validate(data);
    this.scale = data.scale;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModel(data);
  }

  toObject(): Partial<this> {
    return {
      scale: this.scale,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModel;
