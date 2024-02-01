# IoK8sApiAutoscalingV2HPAScalingPolicyModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periodSeconds** | **number** | periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). | [default to undefined]
**type** | **string** | type is used to specify the scaling policy. | [default to undefined]
**value** | **number** | value contains the amount of change which is permitted by the policy. It must be greater than zero | [default to undefined]


