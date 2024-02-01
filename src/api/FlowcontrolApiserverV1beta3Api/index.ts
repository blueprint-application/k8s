import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiFlowcontrolV1beta3FlowSchemaModel as IoK8sApiFlowcontrolV1beta3FlowSchema,
  IoK8sApiFlowcontrolV1beta3FlowSchemaListModel as IoK8sApiFlowcontrolV1beta3FlowSchemaList,
  IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationModel as IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration,
  IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationListModel as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateFlowcontrolApiserverV1beta3FlowSchemaParams,
  CreateFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  DeleteFlowcontrolApiserverV1beta3CollectionFlowSchemaParams,
  DeleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfigurationParams,
  DeleteFlowcontrolApiserverV1beta3FlowSchemaParams,
  DeleteFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  ListFlowcontrolApiserverV1beta3FlowSchemaParams,
  ListFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  PatchFlowcontrolApiserverV1beta3FlowSchemaParams,
  PatchFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
  PatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  PatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
  ReadFlowcontrolApiserverV1beta3FlowSchemaParams,
  ReadFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
  ReadFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  ReadFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
  ReplaceFlowcontrolApiserverV1beta3FlowSchemaParams,
  ReplaceFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
  ReplaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
  ReplaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
  WatchFlowcontrolApiserverV1beta3FlowSchemaListParams,
  WatchFlowcontrolApiserverV1beta3FlowSchemaParams,
  WatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationListParams,
  WatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
} from './types';

export class FlowcontrolApiserverV1beta3Api extends BaseApi {
  async createFlowcontrolApiserverV1beta3FlowSchema(
    params: CreateFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas');

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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async createFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: CreateFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations');

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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async deleteFlowcontrolApiserverV1beta3CollectionFlowSchema(
    params: DeleteFlowcontrolApiserverV1beta3CollectionFlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas');

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

  async deleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfiguration(
    params: DeleteFlowcontrolApiserverV1beta3CollectionPriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations');

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

  async deleteFlowcontrolApiserverV1beta3FlowSchema(
    params: DeleteFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}', {
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

  async deleteFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: DeleteFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}', {
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

  async getFlowcontrolApiserverV1beta3APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/');

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

  async listFlowcontrolApiserverV1beta3FlowSchema(
    params?: ListFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchemaList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiFlowcontrolV1beta3FlowSchemaList(result);
  }

  async listFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params?: ListFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationList(result);
  }

  async patchFlowcontrolApiserverV1beta3FlowSchema(
    params: PatchFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async patchFlowcontrolApiserverV1beta3FlowSchemaStatus(
    params: PatchFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async patchFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: PatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async patchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(
    params: PatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async readFlowcontrolApiserverV1beta3FlowSchema(
    params: ReadFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async readFlowcontrolApiserverV1beta3FlowSchemaStatus(
    params: ReadFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async readFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: ReadFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async readFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(
    params: ReadFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async replaceFlowcontrolApiserverV1beta3FlowSchema(
    params: ReplaceFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async replaceFlowcontrolApiserverV1beta3FlowSchemaStatus(
    params: ReplaceFlowcontrolApiserverV1beta3FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3FlowSchema(result);
  }

  async replaceFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: ReplaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async replaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatus(
    params: ReplaceFlowcontrolApiserverV1beta3PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1beta3PriorityLevelConfiguration(result);
  }

  async watchFlowcontrolApiserverV1beta3FlowSchema(
    params: WatchFlowcontrolApiserverV1beta3FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas/{name}', {
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

  async watchFlowcontrolApiserverV1beta3FlowSchemaList(
    params?: WatchFlowcontrolApiserverV1beta3FlowSchemaListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas');

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

  async watchFlowcontrolApiserverV1beta3PriorityLevelConfiguration(
    params: WatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations/{name}', {
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

  async watchFlowcontrolApiserverV1beta3PriorityLevelConfigurationList(
    params?: WatchFlowcontrolApiserverV1beta3PriorityLevelConfigurationListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations');

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

export default FlowcontrolApiserverV1beta3Api;
