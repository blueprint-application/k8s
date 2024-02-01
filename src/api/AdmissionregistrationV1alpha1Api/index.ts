import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyModel as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy,
  IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingModel as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding,
  IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListModel as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList,
  IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyListModel as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  CreateAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  DeleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicyBindingParams,
  DeleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicyParams,
  DeleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  DeleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  ListAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  ListAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
  ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
  ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
  ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
  WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListParams,
  WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
  WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyListParams,
  WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
} from './types';

export class AdmissionregistrationV1alpha1Api extends BaseApi {
  async createAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: CreateAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies');

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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async createAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: CreateAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings');

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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(result);
  }

  async deleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicy(
    params: DeleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies');

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

  async deleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicyBinding(
    params: DeleteAdmissionregistrationV1alpha1CollectionValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings');

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

  async deleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: DeleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}', {
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

  async deleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: DeleteAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}', {
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

  async getAdmissionregistrationV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/');

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

  async listAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params?: ListAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyList(result);
  }

  async listAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params?: ListAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList(result);
  }

  async patchAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async patchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(result);
  }

  async patchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus(
    params: PatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async readAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async readAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(result);
  }

  async readAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus(
    params: ReadAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async replaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async replaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(result);
  }

  async replaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus(
    params: ReplaceAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status', {
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
    return new IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(result);
  }

  async watchAdmissionregistrationV1alpha1ValidatingAdmissionPolicy(
    params: WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies/{name}', {
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

  async watchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBinding(
    params: WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl(
      '/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings/{name}',
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

  async watchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingList(
    params?: WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings');

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

  async watchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyList(
    params?: WatchAdmissionregistrationV1alpha1ValidatingAdmissionPolicyListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies');

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

export default AdmissionregistrationV1alpha1Api;
