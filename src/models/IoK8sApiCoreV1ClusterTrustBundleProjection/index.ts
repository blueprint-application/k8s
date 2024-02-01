import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ClusterTrustBundleProjectionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ClusterTrustBundleProjectionModel extends BaseModel {
  labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
  name?: string;
  // If true, don\'t block pod startup if the referenced ClusterTrustBundle(s) aren\'t available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  optional?: boolean;
  // Relative path from the volume root to write the bundle.
  path: string;
  // Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  signerName?: string;

  constructor(data: IoK8sApiCoreV1ClusterTrustBundleProjectionModelOptions) {
    super();
    validate(data);
    this.labelSelector = data.labelSelector;
    this.name = data.name;
    this.optional = data.optional;
    this.path = data.path;
    this.signerName = data.signerName;
  }

  static create(
    data: IoK8sApiCoreV1ClusterTrustBundleProjectionModelOptions,
  ): IoK8sApiCoreV1ClusterTrustBundleProjectionModel {
    return new IoK8sApiCoreV1ClusterTrustBundleProjectionModel(data);
  }

  toObject(): Partial<this> {
    return {
      labelSelector: this.labelSelector,
      name: this.name,
      optional: this.optional,
      path: this.path,
      signerName: this.signerName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ClusterTrustBundleProjectionModel;
