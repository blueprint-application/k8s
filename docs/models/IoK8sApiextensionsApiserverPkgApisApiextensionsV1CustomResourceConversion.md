# IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | **string** | strategy specifies how custom resources are converted between versions. Allowed values are: - &#x60;\&quot;None\&quot;&#x60;: The converter only change the apiVersion and would not touch any other field in the custom resource. - &#x60;\&quot;Webhook\&quot;&#x60;: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set. | [default to undefined]
**webhook** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.md) |  | [optional] [default to undefined]


