# IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalPrinterColumns** | [**Array&lt;IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition&gt;**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.md) | additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. | [optional] [default to undefined]
**deprecated** | **boolean** | deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. | [optional] [default to undefined]
**deprecationWarning** | **string** | deprecationWarning overrides the default warning returned to API clients. May only be set when &#x60;deprecated&#x60; is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. | [optional] [default to undefined]
**name** | **string** | name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at &#x60;/apis/&lt;group&gt;/&lt;version&gt;/...&#x60; if &#x60;served&#x60; is true. | [default to undefined]
**schema** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.md) |  | [optional] [default to undefined]
**served** | **boolean** | served is a flag enabling/disabling this version from being served via REST APIs | [default to undefined]
**storage** | **boolean** | storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage&#x3D;true. | [default to undefined]
**subresources** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.md) |  | [optional] [default to undefined]


