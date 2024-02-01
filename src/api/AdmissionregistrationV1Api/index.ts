import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationModel as IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration,
  IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListModel as IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList,
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationModel as IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration,
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListModel as IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAdmissionregistrationV1MutatingWebhookConfigurationParams,
  CreateAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationParams,
  DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationParams,
  DeleteAdmissionregistrationV1MutatingWebhookConfigurationParams,
  DeleteAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  ListAdmissionregistrationV1MutatingWebhookConfigurationParams,
  ListAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  PatchAdmissionregistrationV1MutatingWebhookConfigurationParams,
  PatchAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  ReadAdmissionregistrationV1MutatingWebhookConfigurationParams,
  ReadAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  ReplaceAdmissionregistrationV1MutatingWebhookConfigurationParams,
  ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationParams,
  WatchAdmissionregistrationV1MutatingWebhookConfigurationListParams,
  WatchAdmissionregistrationV1MutatingWebhookConfigurationParams,
  WatchAdmissionregistrationV1ValidatingWebhookConfigurationListParams,
  WatchAdmissionregistrationV1ValidatingWebhookConfigurationParams,
} from './types';

export class AdmissionregistrationV1Api extends BaseApi {
  async createAdmissionregistrationV1MutatingWebhookConfiguration(
    params: CreateAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration(result);
  }

  async createAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: CreateAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.POST,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration(result);
  }

  async deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration(
    params: DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration(
    params: DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async deleteAdmissionregistrationV1MutatingWebhookConfiguration(
    params: DeleteAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async deleteAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: DeleteAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.DELETE,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1Status(result);
  }

  async getAdmissionregistrationV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1APIResourceList(result);
  }

  async listAdmissionregistrationV1MutatingWebhookConfiguration(
    params?: ListAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList(result);
  }

  async listAdmissionregistrationV1ValidatingWebhookConfiguration(
    params?: ListAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList(result);
  }

  async patchAdmissionregistrationV1MutatingWebhookConfiguration(
    params: PatchAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration(result);
  }

  async patchAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: PatchAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PATCH,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration(result);
  }

  async readAdmissionregistrationV1MutatingWebhookConfiguration(
    params: ReadAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration(result);
  }

  async readAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: ReadAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration(result);
  }

  async replaceAdmissionregistrationV1MutatingWebhookConfiguration(
    params: ReplaceAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration(result);
  }

  async replaceAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.PUT,
        url,
        params: params?.query,
        data: params.body,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration(result);
  }

  async watchAdmissionregistrationV1MutatingWebhookConfiguration(
    params: WatchAdmissionregistrationV1MutatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }

  async watchAdmissionregistrationV1MutatingWebhookConfigurationList(
    params?: WatchAdmissionregistrationV1MutatingWebhookConfigurationListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }

  async watchAdmissionregistrationV1ValidatingWebhookConfiguration(
    params: WatchAdmissionregistrationV1ValidatingWebhookConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }

  async watchAdmissionregistrationV1ValidatingWebhookConfigurationList(
    params?: WatchAdmissionregistrationV1ValidatingWebhookConfigurationListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApimachineryPkgApisMetaV1WatchEvent(result);
  }
}

export default AdmissionregistrationV1Api;
