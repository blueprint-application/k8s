# IoK8sApiBatchV1CronJobSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrencyPolicy** | **string** | Specifies how to treat concurrent executions of a Job. Valid values are:  - \&quot;Allow\&quot; (default): allows CronJobs to run concurrently; - \&quot;Forbid\&quot;: forbids concurrent runs, skipping next run if previous run hasn\&#39;t finished yet; - \&quot;Replace\&quot;: cancels currently running job and replaces it with a new one | [optional] [default to undefined]
**failedJobsHistoryLimit** | **number** | The number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1. | [optional] [default to undefined]
**jobTemplate** | [**IoK8sApiBatchV1JobTemplateSpec**](IoK8sApiBatchV1JobTemplateSpec.md) |  | [default to undefined]
**schedule** | **string** | The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron. | [default to undefined]
**startingDeadlineSeconds** | **number** | Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones. | [optional] [default to undefined]
**successfulJobsHistoryLimit** | **number** | The number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3. | [optional] [default to undefined]
**suspend** | **boolean** | This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false. | [optional] [default to undefined]
**timeZone** | **string** | The time zone name for the given schedule, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. If not specified, this will default to the time zone of the kube-controller-manager process. The set of valid time zone names and the time zone offset is loaded from the system-wide time zone database by the API server during CronJob validation and the controller manager during execution. If no system-wide time zone database can be found a bundled version of the database is used instead. If the time zone name becomes invalid during the lifetime of a CronJob or due to a change in host configuration, the controller will stop creating new new Jobs and will create a system event with the reason UnknownTimeZone. More information can be found in https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones | [optional] [default to undefined]


