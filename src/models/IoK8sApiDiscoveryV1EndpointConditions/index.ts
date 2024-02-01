import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1EndpointConditionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1EndpointConditionsModel extends BaseModel {
  // ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be \"true\" for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.
  ready?: boolean;
  // serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.
  serving?: boolean;
  // terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.
  terminating?: boolean;

  constructor(data: IoK8sApiDiscoveryV1EndpointConditionsModelOptions) {
    super();
    validate(data);
    this.ready = data.ready;
    this.serving = data.serving;
    this.terminating = data.terminating;
  }

  static create(data: IoK8sApiDiscoveryV1EndpointConditionsModelOptions): IoK8sApiDiscoveryV1EndpointConditionsModel {
    return new IoK8sApiDiscoveryV1EndpointConditionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      ready: this.ready,
      serving: this.serving,
      terminating: this.terminating,
    } as Partial<this>;
  }
}

export default IoK8sApiDiscoveryV1EndpointConditionsModel;
