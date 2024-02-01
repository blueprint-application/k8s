import { AxiosRequestConfig } from 'axios';
import {} from '../../models';
import { BaseApi } from '../base';
import { LogFileHandlerParams } from './types';

export class LogsApi extends BaseApi {
  async logFileHandler(params: LogFileHandlerParams, options?: Partial<AxiosRequestConfig>): Promise<void> {
    const url = this.buildUrl('/logs/{logpath}', {
      params: params.path,
      required: ['logpath'],
    });

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new result();
  }

  async logFileListHandler(options?: Partial<AxiosRequestConfig>): Promise<void> {
    const url = this.buildUrl('/logs/');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
      },
      'apiKey',
    );
    return new result();
  }
}

export default LogsApi;
