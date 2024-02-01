import { IoK8sApiRbacV1AggregationRuleModelOptions as IoK8sApiRbacV1AggregationRule } from '../IoK8sApiRbacV1AggregationRule';
import { IoK8sApiRbacV1PolicyRuleModelOptions as IoK8sApiRbacV1PolicyRule } from '../IoK8sApiRbacV1PolicyRule';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiRbacV1ClusterRoleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1ClusterRoleModel extends BaseModel {
  aggregationRule?: IoK8sApiRbacV1AggregationRule;
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // Rules holds all the PolicyRules for this ClusterRole
  rules?: Array<IoK8sApiRbacV1PolicyRule>;

  constructor(data: IoK8sApiRbacV1ClusterRoleModelOptions) {
    super();
    validate(data);
    this.aggregationRule = data.aggregationRule;
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.rules = data.rules;
  }

  static create(data: IoK8sApiRbacV1ClusterRoleModelOptions): IoK8sApiRbacV1ClusterRoleModel {
    return new IoK8sApiRbacV1ClusterRoleModel(data);
  }

  toObject(): Partial<this> {
    return {
      aggregationRule: this.aggregationRule,
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      rules: this.rules,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1ClusterRoleModel;
