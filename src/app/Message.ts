export class Message {
  public  timestamp = new Date();
  public readonly sender = '';
  public readonly body = '';

  constructor (data: Partial<Message>) {
    Object.assign(this, data);
  }
}
