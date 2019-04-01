import { AddNumberType, SubtractNumberType, DATA_REQUESTED } from '../Types/Types';

var Reducer = (state, action) => {
    switch (action.type) {
        case AddNumberType: return state.articles + 10
        case SubtractNumberType: return state.articles - 10

        case "DATA_LOADED": return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payLoad)
        })
        default: return state
    }
};
export default Reducer;


