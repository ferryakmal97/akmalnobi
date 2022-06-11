import {postApi} from '~services/base';

export const getDashboard = ({body}) => postApi({url: `dashboard`, body});
