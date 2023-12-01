export const action = { type: "", payLoad: {} };

export const addOne = (desk) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: desk },
    };
};

export const subtractOne = (desk) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: desk },
    };
};