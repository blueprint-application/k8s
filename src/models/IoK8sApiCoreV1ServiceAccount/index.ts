import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ServiceAccountModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ServiceAccountModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
  automountServiceAccountToken?: boolean;
  // ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
  imagePullSecrets?: Array<IoK8sApiCoreV1LocalObjectReference>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // Secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. Pods are only limited to this list if this service account has a \"kubernetes.io/enforce-mountable-secrets\" annotation set to \"true\". This field should not be used to find auto-generated service account token secrets for use outside of pods. Instead, tokens can be requested directly using the TokenRequest API, or service account token secrets can be manually created. More info: https://kubernetes.io/docs/concepts/configuration/secret
  secrets?: Array<IoK8sApiCoreV1ObjectReference>;

  constructor(data: IoK8sApiCoreV1ServiceAccountModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.automountServiceAccountToken = data.automountServiceAccountToken;
    this.imagePullSecrets = data.imagePullSecrets;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.secrets = data.secrets;
  }

  static create(data: IoK8sApiCoreV1ServiceAccountModelOptions): IoK8sApiCoreV1ServiceAccountModel {
    return new IoK8sApiCoreV1ServiceAccountModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      automountServiceAccountToken: this.automountServiceAccountToken,
      imagePullSecrets: this.imagePullSecrets,
      kind: this.kind,
      metadata: this.metadata,
      secrets: this.secrets,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ServiceAccountModel;
