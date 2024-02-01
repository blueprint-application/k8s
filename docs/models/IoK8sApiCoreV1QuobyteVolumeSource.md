# IoK8sApiCoreV1QuobyteVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **string** | group to map volume access to Default is no group | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. | [optional] [default to undefined]
**registry** | **string** | registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes | [default to undefined]
**tenant** | **string** | tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin | [optional] [default to undefined]
**user** | **string** | user to map volume access to Defaults to serivceaccount user | [optional] [default to undefined]
**volume** | **string** | volume is a string that references an already created Quobyte volume by name. | [default to undefined]


