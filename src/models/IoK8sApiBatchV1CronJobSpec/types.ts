import { IoK8sApiBatchV1JobTemplateSpecModelOptions as IoK8sApiBatchV1JobTemplateSpec } from '../IoK8sApiBatchV1JobTemplateSpec';

export interface IoK8sApiBatchV1CronJobSpecModelOptions {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: IoK8sApiBatchV1JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
  timeZone?: string;
}
