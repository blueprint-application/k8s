# IoK8sApiAppsV1DeploymentSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minReadySeconds** | **number** | Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) | [optional] [default to undefined]
**paused** | **boolean** | Indicates that the deployment is paused. | [optional] [default to undefined]
**progressDeadlineSeconds** | **number** | The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s. | [optional] [default to undefined]
**replicas** | **number** | Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1. | [optional] [default to undefined]
**revisionHistoryLimit** | **number** | The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. | [optional] [default to undefined]
**selector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [default to undefined]
**strategy** | [**IoK8sApiAppsV1DeploymentStrategy**](IoK8sApiAppsV1DeploymentStrategy.md) |  | [optional] [default to undefined]
**template** | [**IoK8sApiCoreV1PodTemplateSpec**](IoK8sApiCoreV1PodTemplateSpec.md) |  | [default to undefined]


