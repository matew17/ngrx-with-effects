export class User {
  constructor(
    public id: string | null | undefined,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ) {}
}
