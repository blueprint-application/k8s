import { AxiosRequestConfig } from 'axios';
import {
  IoK8sApiCertificatesV1alpha1ClusterTrustBundleModel as IoK8sApiCertificatesV1alpha1ClusterTrustBundle,
  IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModel as IoK8sApiCertificatesV1alpha1ClusterTrustBundleList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListModel as IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1StatusModel as IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1WatchEventModel as IoK8sApimachineryPkgApisMetaV1WatchEvent,
} from '../../models';
import { BaseApi } from '../base';
import {
  CreateCertificatesV1alpha1ClusterTrustBundleParams,
  DeleteCertificatesV1alpha1ClusterTrustBundleParams,
  DeleteCertificatesV1alpha1CollectionClusterTrustBundleParams,
  ListCertificatesV1alpha1ClusterTrustBundleParams,
  PatchCertificatesV1alpha1ClusterTrustBundleParams,
  ReadCertificatesV1alpha1ClusterTrustBundleParams,
  ReplaceCertificatesV1alpha1ClusterTrustBundleParams,
  WatchCertificatesV1alpha1ClusterTrustBundleListParams,
  WatchCertificatesV1alpha1ClusterTrustBundleParams,
} from './types';

export class CertificatesV1alpha1Api extends BaseApi {
  async createCertificatesV1alpha1ClusterTrustBundle(
    params: CreateCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1alpha1ClusterTrustBundle> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles');

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
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundle(result);
  }

  async deleteCertificatesV1alpha1ClusterTrustBundle(
    params: DeleteCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}', {
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

  async deleteCertificatesV1alpha1CollectionClusterTrustBundle(
    params: DeleteCertificatesV1alpha1CollectionClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles');

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

  async getCertificatesV1alpha1APIResources(
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/');

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

  async listCertificatesV1alpha1ClusterTrustBundle(
    params?: ListCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1alpha1ClusterTrustBundleList> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles');

    const result = await this.apiClient.request(
      {
        ...(options || {}),
        method: this.HTTP_METHODS.GET,
        url,
        params: params?.query,
      },
      'apiKey',
    );
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundleList(result);
  }

  async patchCertificatesV1alpha1ClusterTrustBundle(
    params: PatchCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1alpha1ClusterTrustBundle> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}', {
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
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundle(result);
  }

  async readCertificatesV1alpha1ClusterTrustBundle(
    params: ReadCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1alpha1ClusterTrustBundle> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}', {
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
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundle(result);
  }

  async replaceCertificatesV1alpha1ClusterTrustBundle(
    params: ReplaceCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApiCertificatesV1alpha1ClusterTrustBundle> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}', {
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
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundle(result);
  }

  async watchCertificatesV1alpha1ClusterTrustBundle(
    params: WatchCertificatesV1alpha1ClusterTrustBundleParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles/{name}', {
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

  async watchCertificatesV1alpha1ClusterTrustBundleList(
    params?: WatchCertificatesV1alpha1ClusterTrustBundleListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const url = this.buildUrl('/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles');

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

export default CertificatesV1alpha1Api;
