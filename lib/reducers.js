export function reducer(state, action) {
    if (typeof state === 'undefined') {
        return {};
    }

    switch (action.type) {
        case 'PARSED':
        return Object.assign({}, state, { parsed: action.data });
        default:
        return state;
    }
}