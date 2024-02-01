import { IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethodModelOptions as IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod } from '../IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsModelOptions as IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects } from '../IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReferenceModelOptions as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference } from '../IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModel extends BaseModel {
  distinguisherMethod?: IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod;
  // `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
  matchingPrecedence?: number;
  priorityLevelConfiguration: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference;
  // `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
  rules?: Array<IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects>;

  constructor(data: IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModelOptions) {
    super();
    validate(data);
    this.distinguisherMethod = data.distinguisherMethod;
    this.matchingPrecedence = data.matchingPrecedence;
    this.priorityLevelConfiguration = data.priorityLevelConfiguration;
    this.rules = data.rules;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModelOptions,
  ): IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModel {
    return new IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModel(data);
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

export default IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModel;
