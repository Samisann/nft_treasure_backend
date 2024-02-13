import { IsNotEmpty } from "class-validator";

export class UserDto {

    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;

}
