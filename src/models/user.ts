export class User {
    constructor() {
        this.id = User.countIds;
        this.number = '';
        this.password = '';
        User.countIds++;
    }
    private static countIds = 0;
    id: number;
    number: string;
    password: string;
}