import { CALL_API } from '../middleware/api';

export const LOADED_GISTS = 'LOADED_GISTS';
export function loadGists() {
    return {
        [CALL_API]: {
            method: 'get',
            url: 'https://api.github.com/users/loupax/gists',
            successType: LOADED_GISTS
        }
    };
}
