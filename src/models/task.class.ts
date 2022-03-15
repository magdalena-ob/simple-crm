export class Task {
    taskName: string;
    userName: string;
    email: string;
    dueDate: number;
    status: string;
    createdAt: number;

    constructor(obj?: any) {
        this.taskName = obj ? obj.taskName : '';
        this.userName = obj ? obj.userName : '';
        this.email = obj ? obj.email : '';
        this.dueDate = obj ? obj.dueDate : '';
        this.status = obj ? obj.status : '';
        this.createdAt = obj ? obj.createdAt : '';
    }

    public toJSON() {       
        return {
            taskName: this.taskName,
            userFirstName: this.userName,
            email: this.email,
            dueDate: this.dueDate,
            status: this.status,
            createdAt: this.createdAt
        };
    }
}