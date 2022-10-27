import Role from "./role.dto";

export default interface User {
    id: number,
    email: string,
    role: Role,
}