import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3QueuingConfigurationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3QueuingConfigurationModel extends BaseModel {
  // `handSize` is a small positive number that configures the shuffle sharding of requests into queues.  When enqueuing a request at this priority level the request\'s flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here.  The request is put into one of the shortest queues in that hand. `handSize` must be no larger than `queues`, and should be significantly smaller (so that a few heavy flows do not saturate most of the queues).  See the user-facing documentation for more extensive guidance on setting this field.  This field has a default value of 8.
  handSize?: number;
  // `queueLengthLimit` is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected.  This value must be positive.  If not specified, it will be defaulted to 50.
  queueLengthLimit?: number;
  // `queues` is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive.  Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant.  This field has a default value of 64.
  queues?: number;

  constructor(data: IoK8sApiFlowcontrolV1beta3QueuingConfigurationModelOptions) {
    super();
    validate(data);
    this.handSize = data.handSize;
    this.queueLengthLimit = data.queueLengthLimit;
    this.queues = data.queues;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3QueuingConfigurationModelOptions,
  ): IoK8sApiFlowcontrolV1beta3QueuingConfigurationModel {
    return new IoK8sApiFlowcontrolV1beta3QueuingConfigurationModel(data);
  }

  toObject(): Partial<this> {
    return {
      handSize: this.handSize,
      queueLengthLimit: this.queueLengthLimit,
      queues: this.queues,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3QueuingConfigurationModel;
