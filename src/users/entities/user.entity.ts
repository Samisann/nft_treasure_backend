import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;
@Schema({ collection: 'users' })
export class User {
    @Prop({ required: true })
    id: number;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true })
    created_at: Date;
    @Prop({ required: true })
    updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
