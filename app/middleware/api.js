import { camelizeKeys } from 'humps';
import superAgent from 'superagent';
import Promise from 'bluebird';
import _ from 'lodash';

export const CALL_API = Symbol('CALL_API');

export default store => next => action => {
    if (!action[CALL_API]) {
        return next(action);
    }
    let request = action[CALL_API];
    let { getState } = store;
    let { method, url, successType } = request;

    return new Promise((resolve, reject) => {
        superAgent[method](url)
            .set('User-Agent', 'SuperSpecialApp')
            .end((err, res)=> {
                    if (!err) {
                        next({
                            type: successType,
                            response: res.body
                        });

                        if (_.isFunction(request.afterSuccess)) {
                            request.afterSuccess({getState});
                        }

                    }
                    resolve();
                }
            )
    });
};
