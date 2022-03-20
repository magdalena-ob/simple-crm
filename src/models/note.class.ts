export class Note {
    message: string;
    active: boolean;

    constructor(obj?: any) {
        this.message = obj ? obj.message : '';
        this.active = obj ? obj.active : true;
    }

    public toJSON() {       
        return {
            message: this.message,
            active: this.active
        };
    }
}