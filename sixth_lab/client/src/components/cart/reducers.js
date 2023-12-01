const defaultState = {
    deskList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_DESK":
            const foundedIndex = findIndexByName(state.deskList, action.payLoad.name);
            if (foundedIndex === -1) {
                return { ...state, deskList: [...state.deskList, action.payLoad] };
            } else {
                const updatedDeskArr = [...state.deskList];
                updatedDeskArr[foundedIndex] = {
                    ...updatedDeskArr[foundedIndex],
                    count: updatedDeskArr[foundedIndex].count + action.payLoad.count,
                };
                console.log(state.deskList[foundedIndex].count);
                return { ...state, deskList: updatedDeskArr };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                deskList: state.deskList.map((desk) => {
                    if (desk.name === action.payLoad.name) {
                        return { ...desk, count: desk.count + 1 };
                    }
                    return desk;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                deskList: state.deskList.map((desk) => {
                    if (desk.name === action.payLoad.name && desk.count > 0) {
                        return { ...desk, count: desk.count - 1 };
                    }
                    return desk;
                }),
            };
        default:
            return state;
    }
};