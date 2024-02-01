import { IoK8sApiAuthenticationV1UserInfoModelOptions as IoK8sApiAuthenticationV1UserInfo } from '../IoK8sApiAuthenticationV1UserInfo';

export interface IoK8sApiAuthenticationV1TokenReviewStatusModelOptions {
  audiences?: Array<string>;
  authenticated?: boolean;
  error?: string;
  user?: IoK8sApiAuthenticationV1UserInfo;
}
