import User from "../dtos/user.dto";

export const getLoggedInUser = () : User => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user) as User;
    } else {
        return {} as User;
    }
}