import {} from '../../models';
import { BaseParams } from '../base';

export interface LogFileHandlerParams extends BaseParams {
  path: {
    logpath: string;
  };
}

export default {};
