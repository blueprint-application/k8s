# IoK8sApiCoreV1HTTPGetActionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** | Host name to connect to, defaults to the pod IP. You probably want to set \&quot;Host\&quot; in httpHeaders instead. | [optional] [default to undefined]
**httpHeaders** | [**Array&lt;IoK8sApiCoreV1HTTPHeader&gt;**](IoK8sApiCoreV1HTTPHeader.md) | Custom headers to set in the request. HTTP allows repeated headers. | [optional] [default to undefined]
**path** | **string** | Path to access on the HTTP server. | [optional] [default to undefined]
**port** | **string** | IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. | [default to undefined]
**scheme** | **string** | Scheme to use for connecting to the host. Defaults to HTTP. | [optional] [default to undefined]


