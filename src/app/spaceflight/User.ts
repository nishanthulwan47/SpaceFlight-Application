export class User {
    constructor(public email: string, public username: string, public status: boolean, public joinedDate: number) {
        this.email = email;
        this.username = username;
        this.status = status;
        this.joinedDate = joinedDate;
    }
}
