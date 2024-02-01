import { IoK8sApiNetworkingV1IngressBackendModelOptions as IoK8sApiNetworkingV1IngressBackend } from '../IoK8sApiNetworkingV1IngressBackend';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1HTTPIngressPathModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1HTTPIngressPathModel extends BaseModel {
  backend: IoK8sApiNetworkingV1IngressBackend;
  // path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a \'/\' and must be present when using PathType with value \"Exact\" or \"Prefix\".
  path?: string;
  // pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by \'/\'. Matching is   done on a path element by element basis. A path element refers is the   list of labels in the path split by the \'/\' separator. A request is a   match for path p if every p is an element-wise prefix of p of the   request path. Note that if the last element of the path is a substring   of the last element in request path, it is not a match (e.g. /foo/bar   matches /foo/bar/baz, but does not match /foo/barbaz). * ImplementationSpecific: Interpretation of the Path matching is up to   the IngressClass. Implementations can treat this as a separate PathType   or treat it identically to Prefix or Exact path types. Implementations are required to support all path types.
  pathType: string;

  constructor(data: IoK8sApiNetworkingV1HTTPIngressPathModelOptions) {
    super();
    validate(data);
    this.backend = data.backend;
    this.path = data.path;
    this.pathType = data.pathType;
  }

  static create(data: IoK8sApiNetworkingV1HTTPIngressPathModelOptions): IoK8sApiNetworkingV1HTTPIngressPathModel {
    return new IoK8sApiNetworkingV1HTTPIngressPathModel(data);
  }

  toObject(): Partial<this> {
    return {
      backend: this.backend,
      path: this.path,
      pathType: this.pathType,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1HTTPIngressPathModel;
