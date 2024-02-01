import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModelOptions as IoK8sApiResourceV1alpha2ResourceClassParametersReference } from '../IoK8sApiResourceV1alpha2ResourceClassParametersReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClassModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // DriverName defines the name of the dynamic resource driver that is used for allocation of a ResourceClaim that uses this class.  Resource drivers have a unique name in forward domain order (acme.example.com).
  driverName: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  parametersRef?: IoK8sApiResourceV1alpha2ResourceClassParametersReference;
  suitableNodes?: IoK8sApiCoreV1NodeSelector;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClassModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.driverName = data.driverName;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.parametersRef = data.parametersRef;
    this.suitableNodes = data.suitableNodes;
  }

  static create(data: IoK8sApiResourceV1alpha2ResourceClassModelOptions): IoK8sApiResourceV1alpha2ResourceClassModel {
    return new IoK8sApiResourceV1alpha2ResourceClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      driverName: this.driverName,
      kind: this.kind,
      metadata: this.metadata,
      parametersRef: this.parametersRef,
      suitableNodes: this.suitableNodes,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClassModel;
