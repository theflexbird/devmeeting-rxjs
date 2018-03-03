export class Message {
  public  timestamp;
  public readonly sender = '';
  public readonly body = '';

  constructor (data: Partial<Message>) {
    Object.assign(this, data);
  }
}
