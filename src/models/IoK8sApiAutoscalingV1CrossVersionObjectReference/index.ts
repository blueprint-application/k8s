import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV1CrossVersionObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV1CrossVersionObjectReferenceModel extends BaseModel {
  // apiVersion is the API version of the referent
  apiVersion?: string;
  // kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind: string;
  // name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name: string;

  constructor(data: IoK8sApiAutoscalingV1CrossVersionObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiAutoscalingV1CrossVersionObjectReferenceModelOptions,
  ): IoK8sApiAutoscalingV1CrossVersionObjectReferenceModel {
    return new IoK8sApiAutoscalingV1CrossVersionObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV1CrossVersionObjectReferenceModel;
