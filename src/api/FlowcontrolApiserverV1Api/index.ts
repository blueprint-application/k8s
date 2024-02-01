import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiFlowcontrolV1FlowSchemaModel as IoK8sApiFlowcontrolV1FlowSchema,
  IoK8sApiFlowcontrolV1FlowSchemaListModel as IoK8sApiFlowcontrolV1FlowSchemaList,
  IoK8sApiFlowcontrolV1PriorityLevelConfigurationModel as IoK8sApiFlowcontrolV1PriorityLevelConfiguration,
  IoK8sApiFlowcontrolV1PriorityLevelConfigurationListModel as IoK8sApiFlowcontrolV1PriorityLevelConfigurationList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateFlowcontrolApiserverV1FlowSchemaParams,
  CreateFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  DeleteFlowcontrolApiserverV1CollectionFlowSchemaParams,
  DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationParams,
  DeleteFlowcontrolApiserverV1FlowSchemaParams,
  DeleteFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  ListFlowcontrolApiserverV1FlowSchemaParams,
  ListFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  PatchFlowcontrolApiserverV1FlowSchemaParams,
  PatchFlowcontrolApiserverV1FlowSchemaStatusParams,
  PatchFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
  ReadFlowcontrolApiserverV1FlowSchemaParams,
  ReadFlowcontrolApiserverV1FlowSchemaStatusParams,
  ReadFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
  ReplaceFlowcontrolApiserverV1FlowSchemaParams,
  ReplaceFlowcontrolApiserverV1FlowSchemaStatusParams,
  ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationParams,
  ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
  WatchFlowcontrolApiserverV1FlowSchemaListParams,
  WatchFlowcontrolApiserverV1FlowSchemaParams,
  WatchFlowcontrolApiserverV1PriorityLevelConfigurationListParams,
  WatchFlowcontrolApiserverV1PriorityLevelConfigurationParams,
} from './types';

export class FlowcontrolApiserverV1Api extends BaseApi {
  async createFlowcontrolApiserverV1FlowSchema(
    params: CreateFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas');

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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async createFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: CreateFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations');

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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async deleteFlowcontrolApiserverV1CollectionFlowSchema(
    params: DeleteFlowcontrolApiserverV1CollectionFlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas');

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

  async deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration(
    params: DeleteFlowcontrolApiserverV1CollectionPriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations');

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

  async deleteFlowcontrolApiserverV1FlowSchema(
    params: DeleteFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}', {
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

  async deleteFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: DeleteFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}', {
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

  async getFlowcontrolApiserverV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/');

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

  async listFlowcontrolApiserverV1FlowSchema(
    params?: ListFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchemaList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiFlowcontrolV1FlowSchemaList(result);
  }

  async listFlowcontrolApiserverV1PriorityLevelConfiguration(
    params?: ListFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfigurationList> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiFlowcontrolV1PriorityLevelConfigurationList(result);
  }

  async patchFlowcontrolApiserverV1FlowSchema(
    params: PatchFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async patchFlowcontrolApiserverV1FlowSchemaStatus(
    params: PatchFlowcontrolApiserverV1FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async patchFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: PatchFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus(
    params: PatchFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async readFlowcontrolApiserverV1FlowSchema(
    params: ReadFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async readFlowcontrolApiserverV1FlowSchemaStatus(
    params: ReadFlowcontrolApiserverV1FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async readFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: ReadFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async readFlowcontrolApiserverV1PriorityLevelConfigurationStatus(
    params: ReadFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async replaceFlowcontrolApiserverV1FlowSchema(
    params: ReplaceFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async replaceFlowcontrolApiserverV1FlowSchemaStatus(
    params: ReplaceFlowcontrolApiserverV1FlowSchemaStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1FlowSchema> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1FlowSchema(result);
  }

  async replaceFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus(
    params: ReplaceFlowcontrolApiserverV1PriorityLevelConfigurationStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiFlowcontrolV1PriorityLevelConfiguration> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status', {
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
    return new IoK8sApiFlowcontrolV1PriorityLevelConfiguration(result);
  }

  async watchFlowcontrolApiserverV1FlowSchema(
    params: WatchFlowcontrolApiserverV1FlowSchemaParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/{name}', {
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

  async watchFlowcontrolApiserverV1FlowSchemaList(
    params?: WatchFlowcontrolApiserverV1FlowSchemaListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas');

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

  async watchFlowcontrolApiserverV1PriorityLevelConfiguration(
    params: WatchFlowcontrolApiserverV1PriorityLevelConfigurationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/{name}', {
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

  async watchFlowcontrolApiserverV1PriorityLevelConfigurationList(
    params?: WatchFlowcontrolApiserverV1PriorityLevelConfigurationListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations');

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

export default FlowcontrolApiserverV1Api;
