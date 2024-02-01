import { IoK8sApiBatchV1JobTemplateSpecModelOptions as IoK8sApiBatchV1JobTemplateSpec } from '../IoK8sApiBatchV1JobTemplateSpec';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1CronJobSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1CronJobSpecModel extends BaseModel {
  // Specifies how to treat concurrent executions of a Job. Valid values are:  - \"Allow\" (default): allows CronJobs to run concurrently; - \"Forbid\": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - \"Replace\": cancels currently running job and replaces it with a new one
  concurrencyPolicy?: string;
  // The number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1.
  failedJobsHistoryLimit?: number;
  jobTemplate: IoK8sApiBatchV1JobTemplateSpec;
  // The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
  schedule: string;
  // Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
  startingDeadlineSeconds?: number;
  // The number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3.
  successfulJobsHistoryLimit?: number;
  // This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
  suspend?: boolean;
  // The time zone name for the given schedule, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. If not specified, this will default to the time zone of the kube-controller-manager process. The set of valid time zone names and the time zone offset is loaded from the system-wide time zone database by the API server during CronJob validation and the controller manager during execution. If no system-wide time zone database can be found a bundled version of the database is used instead. If the time zone name becomes invalid during the lifetime of a CronJob or due to a change in host configuration, the controller will stop creating new new Jobs and will create a system event with the reason UnknownTimeZone. More information can be found in https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones
  timeZone?: string;

  constructor(data: IoK8sApiBatchV1CronJobSpecModelOptions) {
    super();
    validate(data);
    this.concurrencyPolicy = data.concurrencyPolicy;
    this.failedJobsHistoryLimit = data.failedJobsHistoryLimit;
    this.jobTemplate = data.jobTemplate;
    this.schedule = data.schedule;
    this.startingDeadlineSeconds = data.startingDeadlineSeconds;
    this.successfulJobsHistoryLimit = data.successfulJobsHistoryLimit;
    this.suspend = data.suspend;
    this.timeZone = data.timeZone;
  }

  static create(data: IoK8sApiBatchV1CronJobSpecModelOptions): IoK8sApiBatchV1CronJobSpecModel {
    return new IoK8sApiBatchV1CronJobSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      concurrencyPolicy: this.concurrencyPolicy,
      failedJobsHistoryLimit: this.failedJobsHistoryLimit,
      jobTemplate: this.jobTemplate,
      schedule: this.schedule,
      startingDeadlineSeconds: this.startingDeadlineSeconds,
      successfulJobsHistoryLimit: this.successfulJobsHistoryLimit,
      suspend: this.suspend,
      timeZone: this.timeZone,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1CronJobSpecModel;
