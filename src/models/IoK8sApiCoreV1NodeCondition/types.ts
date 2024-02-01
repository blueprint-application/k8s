export interface IoK8sApiCoreV1NodeConditionModelOptions {
  lastHeartbeatTime?: Date;
  lastTransitionTime?: Date;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
