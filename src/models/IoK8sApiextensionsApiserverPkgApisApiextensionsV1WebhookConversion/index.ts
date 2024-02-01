import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfigModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModel extends BaseModel {
  clientConfig?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
  // conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
  conversionReviewVersions: Array<string>;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModelOptions) {
    super();
    validate(data);
    this.clientConfig = data.clientConfig;
    this.conversionReviewVersions = data.conversionReviewVersions;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModel(data);
  }

  toObject(): Partial<this> {
    return {
      clientConfig: this.clientConfig,
      conversionReviewVersions: this.conversionReviewVersions,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversionModel;
