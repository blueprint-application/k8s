# IoK8sApiAutoscalingV2HPAScalingRulesModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**Array&lt;IoK8sApiAutoscalingV2HPAScalingPolicy&gt;**](IoK8sApiAutoscalingV2HPAScalingPolicy.md) | policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid | [optional] [default to undefined]
**selectPolicy** | **string** | selectPolicy is used to specify which policy should be used. If not set, the default value Max is used. | [optional] [default to undefined]
**stabilizationWindowSeconds** | **number** | stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). | [optional] [default to undefined]


