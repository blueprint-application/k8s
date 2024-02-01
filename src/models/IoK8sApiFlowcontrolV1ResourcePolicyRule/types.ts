export interface IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions {
  apiGroups: Array<string>;
  clusterScope?: boolean;
  namespaces?: Array<string>;
  resources: Array<string>;
  verbs: Array<string>;
}
