import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiBatchV1CronJobModel as IoK8sApiBatchV1CronJob,
  IoK8sApiBatchV1CronJobListModel as IoK8sApiBatchV1CronJobList,
  IoK8sApiBatchV1JobModel as IoK8sApiBatchV1Job,
  IoK8sApiBatchV1JobListModel as IoK8sApiBatchV1JobList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateBatchV1NamespacedCronJobParams,
  CreateBatchV1NamespacedJobParams,
  DeleteBatchV1CollectionNamespacedCronJobParams,
  DeleteBatchV1CollectionNamespacedJobParams,
  DeleteBatchV1NamespacedCronJobParams,
  DeleteBatchV1NamespacedJobParams,
  ListBatchV1CronJobForAllNamespacesParams,
  ListBatchV1JobForAllNamespacesParams,
  ListBatchV1NamespacedCronJobParams,
  ListBatchV1NamespacedJobParams,
  PatchBatchV1NamespacedCronJobParams,
  PatchBatchV1NamespacedCronJobStatusParams,
  PatchBatchV1NamespacedJobParams,
  PatchBatchV1NamespacedJobStatusParams,
  ReadBatchV1NamespacedCronJobParams,
  ReadBatchV1NamespacedCronJobStatusParams,
  ReadBatchV1NamespacedJobParams,
  ReadBatchV1NamespacedJobStatusParams,
  ReplaceBatchV1NamespacedCronJobParams,
  ReplaceBatchV1NamespacedCronJobStatusParams,
  ReplaceBatchV1NamespacedJobParams,
  ReplaceBatchV1NamespacedJobStatusParams,
  WatchBatchV1CronJobListForAllNamespacesParams,
  WatchBatchV1JobListForAllNamespacesParams,
  WatchBatchV1NamespacedCronJobListParams,
  WatchBatchV1NamespacedCronJobParams,
  WatchBatchV1NamespacedJobListParams,
  WatchBatchV1NamespacedJobParams,
} from './types';

export class BatchV1Api extends BaseApi {
  async createBatchV1NamespacedCronJob(
    params: CreateBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs', {
      params: params.path,
      required: ['namespace'],
    });

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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async createBatchV1NamespacedJob(
    params: CreateBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs', {
      params: params.path,
      required: ['namespace'],
    });

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
    return new IoK8sApiBatchV1Job(result);
  }

  async deleteBatchV1CollectionNamespacedCronJob(
    params: DeleteBatchV1CollectionNamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs', {
      params: params.path,
      required: ['namespace'],
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

  async deleteBatchV1CollectionNamespacedJob(
    params: DeleteBatchV1CollectionNamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs', {
      params: params.path,
      required: ['namespace'],
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

  async deleteBatchV1NamespacedCronJob(
    params: DeleteBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async deleteBatchV1NamespacedJob(
    params: DeleteBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async getBatchV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/batch/v1/');

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

  async listBatchV1CronJobForAllNamespaces(
    params?: ListBatchV1CronJobForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJobList> {
    const url = this.buildUrl('/apis/batch/v1/cronjobs');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiBatchV1CronJobList(result);
  }

  async listBatchV1JobForAllNamespaces(
    params?: ListBatchV1JobForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1JobList> {
    const url = this.buildUrl('/apis/batch/v1/jobs');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiBatchV1JobList(result);
  }

  async listBatchV1NamespacedCronJob(
    params: ListBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJobList> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs', {
      params: params.path,
      required: ['namespace'],
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
    return new IoK8sApiBatchV1CronJobList(result);
  }

  async listBatchV1NamespacedJob(
    params: ListBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1JobList> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs', {
      params: params.path,
      required: ['namespace'],
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
    return new IoK8sApiBatchV1JobList(result);
  }

  async patchBatchV1NamespacedCronJob(
    params: PatchBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async patchBatchV1NamespacedCronJobStatus(
    params: PatchBatchV1NamespacedCronJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async patchBatchV1NamespacedJob(
    params: PatchBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async patchBatchV1NamespacedJobStatus(
    params: PatchBatchV1NamespacedJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async readBatchV1NamespacedCronJob(
    params: ReadBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async readBatchV1NamespacedCronJobStatus(
    params: ReadBatchV1NamespacedCronJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async readBatchV1NamespacedJob(
    params: ReadBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async readBatchV1NamespacedJobStatus(
    params: ReadBatchV1NamespacedJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async replaceBatchV1NamespacedCronJob(
    params: ReplaceBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async replaceBatchV1NamespacedCronJobStatus(
    params: ReplaceBatchV1NamespacedCronJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1CronJob> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1CronJob(result);
  }

  async replaceBatchV1NamespacedJob(
    params: ReplaceBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async replaceBatchV1NamespacedJobStatus(
    params: ReplaceBatchV1NamespacedJobStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiBatchV1Job> {
    const url = this.buildUrl('/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status', {
      params: params.path,
      required: ['name', 'namespace'],
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
    return new IoK8sApiBatchV1Job(result);
  }

  async watchBatchV1CronJobListForAllNamespaces(
    params?: WatchBatchV1CronJobListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/cronjobs');

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

  async watchBatchV1JobListForAllNamespaces(
    params?: WatchBatchV1JobListForAllNamespacesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/jobs');

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

  async watchBatchV1NamespacedCronJob(
    params: WatchBatchV1NamespacedCronJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async watchBatchV1NamespacedCronJobList(
    params: WatchBatchV1NamespacedCronJobListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/namespaces/{namespace}/cronjobs', {
      params: params.path,
      required: ['namespace'],
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

  async watchBatchV1NamespacedJob(
    params: WatchBatchV1NamespacedJobParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}', {
      params: params.path,
      required: ['name', 'namespace'],
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

  async watchBatchV1NamespacedJobList(
    params: WatchBatchV1NamespacedJobListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/batch/v1/watch/namespaces/{namespace}/jobs', {
      params: params.path,
      required: ['namespace'],
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
}

export default BatchV1Api;
