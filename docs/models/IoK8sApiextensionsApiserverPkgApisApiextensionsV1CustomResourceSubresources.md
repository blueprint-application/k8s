# IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourcesModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale.md) |  | [optional] [default to undefined]
**status** | **any** | CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the &#x60;.status&#x60; JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza | [optional] [default to undefined]


