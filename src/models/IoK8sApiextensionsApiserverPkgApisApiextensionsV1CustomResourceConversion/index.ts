import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModel extends BaseModel {
  // strategy specifies how custom resources are converted between versions. Allowed values are: - `\"None\"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `\"Webhook\"`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
  strategy: string;
  webhook?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModelOptions) {
    super();
    validate(data);
    this.strategy = data.strategy;
    this.webhook = data.webhook;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModel(data);
  }

  toObject(): Partial<this> {
    return {
      strategy: this.strategy,
      webhook: this.webhook,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModel;
