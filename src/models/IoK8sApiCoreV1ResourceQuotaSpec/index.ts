import { IoK8sApiCoreV1ScopeSelectorModelOptions as IoK8sApiCoreV1ScopeSelector } from '../IoK8sApiCoreV1ScopeSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ResourceQuotaSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ResourceQuotaSpecModel extends BaseModel {
  // hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
  hard?: { [key: string]: string };
  scopeSelector?: IoK8sApiCoreV1ScopeSelector;
  // A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  scopes?: Array<string>;

  constructor(data: IoK8sApiCoreV1ResourceQuotaSpecModelOptions) {
    super();
    validate(data);
    this.hard = data.hard;
    this.scopeSelector = data.scopeSelector;
    this.scopes = data.scopes;
  }

  static create(data: IoK8sApiCoreV1ResourceQuotaSpecModelOptions): IoK8sApiCoreV1ResourceQuotaSpecModel {
    return new IoK8sApiCoreV1ResourceQuotaSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      hard: this.hard,
      scopeSelector: this.scopeSelector,
      scopes: this.scopes,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ResourceQuotaSpecModel;
