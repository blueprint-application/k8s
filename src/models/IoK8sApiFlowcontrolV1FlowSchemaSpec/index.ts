import { IoK8sApiFlowcontrolV1FlowDistinguisherMethodModelOptions as IoK8sApiFlowcontrolV1FlowDistinguisherMethod } from '../IoK8sApiFlowcontrolV1FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions as IoK8sApiFlowcontrolV1PolicyRulesWithSubjects } from '../IoK8sApiFlowcontrolV1PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationReferenceModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1FlowSchemaSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1FlowSchemaSpecModel extends BaseModel {
  distinguisherMethod?: IoK8sApiFlowcontrolV1FlowDistinguisherMethod;
  // `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
  matchingPrecedence?: number;
  priorityLevelConfiguration: IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference;
  // `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
  rules?: Array<IoK8sApiFlowcontrolV1PolicyRulesWithSubjects>;

  constructor(data: IoK8sApiFlowcontrolV1FlowSchemaSpecModelOptions) {
    super();
    validate(data);
    this.distinguisherMethod = data.distinguisherMethod;
    this.matchingPrecedence = data.matchingPrecedence;
    this.priorityLevelConfiguration = data.priorityLevelConfiguration;
    this.rules = data.rules;
  }

  static create(data: IoK8sApiFlowcontrolV1FlowSchemaSpecModelOptions): IoK8sApiFlowcontrolV1FlowSchemaSpecModel {
    return new IoK8sApiFlowcontrolV1FlowSchemaSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      distinguisherMethod: this.distinguisherMethod,
      matchingPrecedence: this.matchingPrecedence,
      priorityLevelConfiguration: this.priorityLevelConfiguration,
      rules: this.rules,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1FlowSchemaSpecModel;
