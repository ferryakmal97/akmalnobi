import {getApi} from '~services/base';

export const getList = () => getApi({url: `list`});
