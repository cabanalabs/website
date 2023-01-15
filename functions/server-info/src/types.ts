import {IsEmail, IsOptional, IsString} from "class-validator";

export class EmailBody {
    @IsEmail()
    email: string;
}

export class ContactUsBody {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    organization: string;

    @IsEmail()
    email: string;

    @IsString()
    subject: string;

    @IsString()
    message: string;
}