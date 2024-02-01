import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModel as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingModel as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingListModel as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyListModel as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBindingParams,
  DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyParams,
  DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
  ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
  ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
  ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
  WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingListParams,
  WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
  WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyListParams,
  WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
} from './types';

export class AdmissionregistrationV1beta1Api extends BaseApi {
  async createAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies');

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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async createAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: CreateAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings');

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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(result);
  }

  async deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicy(
    params: DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies');

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

  async deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBinding(
    params: DeleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings');

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

  async deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}', {
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

  async deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: DeleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}', {
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

  async getAdmissionregistrationV1beta1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/');

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

  async listAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params?: ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList(result);
  }

  async listAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params?: ListAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList(result);
  }

  async patchAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(result);
  }

  async patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus(
    params: PatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async readAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(result);
  }

  async readAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus(
    params: ReadAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(result);
  }

  async replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus(
    params: ReplaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy(result);
  }

  async watchAdmissionregistrationV1beta1ValidatingAdmissionPolicy(
    params: WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies/{name}', {
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

  async watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding(
    params: WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl(
      '/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings/{name}',
      {
        params: params.path,
        required: ['name'],
      },
    );

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

  async watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList(
    params?: WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings');

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

  async watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyList(
    params?: WatchAdmissionregistrationV1beta1ValidatingAdmissionPolicyListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies');

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

export default AdmissionregistrationV1beta1Api;
