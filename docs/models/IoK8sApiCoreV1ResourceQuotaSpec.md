# IoK8sApiCoreV1ResourceQuotaSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | **{ [key: string]: string; }** | hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ | [optional] [default to undefined]
**scopeSelector** | [**IoK8sApiCoreV1ScopeSelector**](IoK8sApiCoreV1ScopeSelector.md) |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. | [optional] [default to undefined]


