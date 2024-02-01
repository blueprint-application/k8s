import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';

export interface IoK8sApiBatchV1CronJobStatusModelOptions {
  active?: Array<IoK8sApiCoreV1ObjectReference>;
  lastScheduleTime?: Date;
  lastSuccessfulTime?: Date;
}
