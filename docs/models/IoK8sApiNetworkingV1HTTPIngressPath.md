# IoK8sApiNetworkingV1HTTPIngressPathModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend** | [**IoK8sApiNetworkingV1IngressBackend**](IoK8sApiNetworkingV1IngressBackend.md) |  | [default to undefined]
**path** | **string** | path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \&quot;path\&quot; part of a URL as defined by RFC 3986. Paths must begin with a \&#39;/\&#39; and must be present when using PathType with value \&quot;Exact\&quot; or \&quot;Prefix\&quot;. | [optional] [default to undefined]
**pathType** | **string** | pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by \&#39;/\&#39;. Matching is   done on a path element by element basis. A path element refers is the   list of labels in the path split by the \&#39;/\&#39; separator. A request is a   match for path p if every p is an element-wise prefix of p of the   request path. Note that if the last element of the path is a substring   of the last element in request path, it is not a match (e.g. /foo/bar   matches /foo/bar/baz, but does not match /foo/barbaz). * ImplementationSpecific: Interpretation of the Path matching is up to   the IngressClass. Implementations can treat this as a separate PathType   or treat it identically to Prefix or Exact path types. Implementations are required to support all path types. | [default to undefined]

