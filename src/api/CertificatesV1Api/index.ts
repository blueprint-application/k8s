import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiCertificatesV1CertificateSigningRequestModel as IoK8sApiCertificatesV1CertificateSigningRequest,
  IoK8sApiCertificatesV1CertificateSigningRequestListModel as IoK8sApiCertificatesV1CertificateSigningRequestList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateCertificatesV1CertificateSigningRequestParams,
  DeleteCertificatesV1CertificateSigningRequestParams,
  DeleteCertificatesV1CollectionCertificateSigningRequestParams,
  ListCertificatesV1CertificateSigningRequestParams,
  PatchCertificatesV1CertificateSigningRequestApprovalParams,
  PatchCertificatesV1CertificateSigningRequestParams,
  PatchCertificatesV1CertificateSigningRequestStatusParams,
  ReadCertificatesV1CertificateSigningRequestApprovalParams,
  ReadCertificatesV1CertificateSigningRequestParams,
  ReadCertificatesV1CertificateSigningRequestStatusParams,
  ReplaceCertificatesV1CertificateSigningRequestApprovalParams,
  ReplaceCertificatesV1CertificateSigningRequestParams,
  ReplaceCertificatesV1CertificateSigningRequestStatusParams,
  WatchCertificatesV1CertificateSigningRequestListParams,
  WatchCertificatesV1CertificateSigningRequestParams,
} from './types';

export class CertificatesV1Api extends BaseApi {
  async createCertificatesV1CertificateSigningRequest(
    params: CreateCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests');

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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async deleteCertificatesV1CertificateSigningRequest(
    params: DeleteCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}', {
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

  async deleteCertificatesV1CollectionCertificateSigningRequest(
    params: DeleteCertificatesV1CollectionCertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests');

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

  async getCertificatesV1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/');

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

  async listCertificatesV1CertificateSigningRequest(
    params?: ListCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequestList> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCertificatesV1CertificateSigningRequestList(result);
  }

  async patchCertificatesV1CertificateSigningRequest(
    params: PatchCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async patchCertificatesV1CertificateSigningRequestApproval(
    params: PatchCertificatesV1CertificateSigningRequestApprovalParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async patchCertificatesV1CertificateSigningRequestStatus(
    params: PatchCertificatesV1CertificateSigningRequestStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async readCertificatesV1CertificateSigningRequest(
    params: ReadCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async readCertificatesV1CertificateSigningRequestApproval(
    params: ReadCertificatesV1CertificateSigningRequestApprovalParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async readCertificatesV1CertificateSigningRequestStatus(
    params: ReadCertificatesV1CertificateSigningRequestStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async replaceCertificatesV1CertificateSigningRequest(
    params: ReplaceCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async replaceCertificatesV1CertificateSigningRequestApproval(
    params: ReplaceCertificatesV1CertificateSigningRequestApprovalParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async replaceCertificatesV1CertificateSigningRequestStatus(
    params: ReplaceCertificatesV1CertificateSigningRequestStatusParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1CertificateSigningRequest> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status', {
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
    return new IoK8sApiCertificatesV1CertificateSigningRequest(result);
  }

  async watchCertificatesV1CertificateSigningRequest(
    params: WatchCertificatesV1CertificateSigningRequestParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/{name}', {
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

  async watchCertificatesV1CertificateSigningRequestList(
    params?: WatchCertificatesV1CertificateSigningRequestListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests');

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

export default CertificatesV1Api;
