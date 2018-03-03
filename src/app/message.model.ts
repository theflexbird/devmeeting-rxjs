export class Model {
    public readonly sender = '';
    public timestamp = new Date();
    public readonly body = '';

    constructor (data: Model) {
        Object.assign(this, data);
    }
}
