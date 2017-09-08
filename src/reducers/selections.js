import MasterSelections from './masterSelections'
import * as types from '../actions/actionTypes';
export default function selections(state = {}, action){
    switch(action.type) {
        case types.ADD_SELECTION:
            return [];

        case types.REMOVE_SELECTION:
            return [];

        case types.SUBMIT_SELECTIONS:
            return state.map(selection => {
                MasterSelections
                    .filter(masterSelection => {
                    if(selection.groupName === masterSelection.groupName) {
                        masterSelection.count++
                    }
                    else {
                        return [
                            ...MasterSelections,
                            selection
                        ];
                    }
                })
            })
    }
}