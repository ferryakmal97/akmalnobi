import {postApi} from '~services/base';

export const login = ({body}) => postApi({url: `login`, body});
