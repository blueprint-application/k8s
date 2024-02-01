# IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name is the name of the service. Required | [default to undefined]
**namespace** | **string** | namespace is the namespace of the service. Required | [default to undefined]
**path** | **string** | path is an optional URL path at which the webhook will be contacted. | [optional] [default to undefined]
**port** | **number** | port is an optional service port at which the webhook will be contacted. &#x60;port&#x60; should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility. | [optional] [default to undefined]


