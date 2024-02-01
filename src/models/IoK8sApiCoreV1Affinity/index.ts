import { IoK8sApiCoreV1NodeAffinityModelOptions as IoK8sApiCoreV1NodeAffinity } from '../IoK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1PodAffinityModelOptions as IoK8sApiCoreV1PodAffinity } from '../IoK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAntiAffinityModelOptions as IoK8sApiCoreV1PodAntiAffinity } from '../IoK8sApiCoreV1PodAntiAffinity';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AffinityModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AffinityModel extends BaseModel {
  nodeAffinity?: IoK8sApiCoreV1NodeAffinity;
  podAffinity?: IoK8sApiCoreV1PodAffinity;
  podAntiAffinity?: IoK8sApiCoreV1PodAntiAffinity;

  constructor(data: IoK8sApiCoreV1AffinityModelOptions) {
    super();
    validate(data);
    this.nodeAffinity = data.nodeAffinity;
    this.podAffinity = data.podAffinity;
    this.podAntiAffinity = data.podAntiAffinity;
  }

  static create(data: IoK8sApiCoreV1AffinityModelOptions): IoK8sApiCoreV1AffinityModel {
    return new IoK8sApiCoreV1AffinityModel(data);
  }

  toObject(): Partial<this> {
    return {
      nodeAffinity: this.nodeAffinity,
      podAffinity: this.podAffinity,
      podAntiAffinity: this.podAntiAffinity,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AffinityModel;
