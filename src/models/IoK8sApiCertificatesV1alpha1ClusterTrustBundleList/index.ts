import { IoK8sApiCertificatesV1alpha1ClusterTrustBundleModelOptions as IoK8sApiCertificatesV1alpha1ClusterTrustBundle } from '../IoK8sApiCertificatesV1alpha1ClusterTrustBundle';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is a collection of ClusterTrustBundle objects
  items: Array<IoK8sApiCertificatesV1alpha1ClusterTrustBundle>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModelOptions,
  ): IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModel {
    return new IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      items: this.items,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiCertificatesV1alpha1ClusterTrustBundleListModel;
