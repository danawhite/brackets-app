const initialState = {
    tally: []
};

const votesReducer = (state = initialState, action) => {
    if (action.type === 'USER_SUBMIT_VOTE') {
        return Object.assign(
            {},
            state, {
                tally: [
                    ...state.votes,
                    { [action.address]: action.vote }
                ]
            }
        )
    }

    return state
};

export default votesReducer
