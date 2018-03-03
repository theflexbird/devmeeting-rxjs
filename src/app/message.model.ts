export class Model {
    public readonly id = '';
    public readonly sender = '';
    public readonly timestamp = 0;
    public readonly body = '';

    constructor (data: Model) {
        Object.assign(this, data);
    }
}
