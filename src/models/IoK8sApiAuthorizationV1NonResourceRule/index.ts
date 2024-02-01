import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1NonResourceRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1NonResourceRuleModel extends BaseModel {
  // NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \"*\" means all.
  nonResourceURLs?: Array<string>;
  // Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
  verbs: Array<string>;

  constructor(data: IoK8sApiAuthorizationV1NonResourceRuleModelOptions) {
    super();
    validate(data);
    this.nonResourceURLs = data.nonResourceURLs;
    this.verbs = data.verbs;
  }

  static create(data: IoK8sApiAuthorizationV1NonResourceRuleModelOptions): IoK8sApiAuthorizationV1NonResourceRuleModel {
    return new IoK8sApiAuthorizationV1NonResourceRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      nonResourceURLs: this.nonResourceURLs,
      verbs: this.verbs,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1NonResourceRuleModel;
