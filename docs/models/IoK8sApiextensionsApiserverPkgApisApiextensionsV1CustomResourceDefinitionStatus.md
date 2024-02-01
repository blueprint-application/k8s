# IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptedNames** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.md) |  | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition&gt;**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition.md) | conditions indicate state for particular aspects of a CustomResourceDefinition | [optional] [default to undefined]
**storedVersions** | **Array&lt;string&gt;** | storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from &#x60;spec.versions&#x60; while they exist in this list. | [optional] [default to undefined]


