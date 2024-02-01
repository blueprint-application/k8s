import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1PriorityLevelConfigurationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1PriorityLevelConfigurationModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec;
  status?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus;

  constructor(data: IoK8sApiFlowcontrolV1PriorityLevelConfigurationModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiFlowcontrolV1PriorityLevelConfigurationModelOptions,
  ): IoK8sApiFlowcontrolV1PriorityLevelConfigurationModel {
    return new IoK8sApiFlowcontrolV1PriorityLevelConfigurationModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1PriorityLevelConfigurationModel;
