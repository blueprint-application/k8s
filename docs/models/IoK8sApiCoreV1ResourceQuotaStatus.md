# IoK8sApiCoreV1ResourceQuotaStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | **{ [key: string]: string; }** | Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ | [optional] [default to undefined]
**used** | **{ [key: string]: string; }** | Used is the current observed total usage of the resource in the namespace. | [optional] [default to undefined]


