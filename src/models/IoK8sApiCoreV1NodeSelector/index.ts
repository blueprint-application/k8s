import { IoK8sApiCoreV1NodeSelectorTermModelOptions as IoK8sApiCoreV1NodeSelectorTerm } from '../IoK8sApiCoreV1NodeSelectorTerm';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeSelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeSelectorModel extends BaseModel {
  // Required. A list of node selector terms. The terms are ORed.
  nodeSelectorTerms: Array<IoK8sApiCoreV1NodeSelectorTerm>;

  constructor(data: IoK8sApiCoreV1NodeSelectorModelOptions) {
    super();
    validate(data);
    this.nodeSelectorTerms = data.nodeSelectorTerms;
  }

  static create(data: IoK8sApiCoreV1NodeSelectorModelOptions): IoK8sApiCoreV1NodeSelectorModel {
    return new IoK8sApiCoreV1NodeSelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      nodeSelectorTerms: this.nodeSelectorTerms,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeSelectorModel;
