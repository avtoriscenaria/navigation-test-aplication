export const set_user = "set_user";

export default (user = null, action) => {
    switch(action.type)
    {
        case set_user:
            return action.user;
        default:
            return user;
    }
}