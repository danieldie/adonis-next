import BaseSchema from '@ioc:Adonis/Lucid/Schema';
export default class UsersSchema extends BaseSchema {
    protected tableName: string;
    up(): Promise<void>;
    down(): Promise<void>;
}
