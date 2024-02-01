# IoK8sApiCoreV1EnvVarModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the environment variable. Must be a C_IDENTIFIER. | [default to undefined]
**value** | **string** | Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \&quot;$$(VAR_NAME)\&quot; will produce the string literal \&quot;$(VAR_NAME)\&quot;. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \&quot;\&quot;. | [optional] [default to undefined]
**valueFrom** | [**IoK8sApiCoreV1EnvVarSource**](IoK8sApiCoreV1EnvVarSource.md) |  | [optional] [default to undefined]


