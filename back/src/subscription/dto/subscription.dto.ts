import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class SubscriptionDto {
	@ApiProperty()
	@IsString()
	serviceToken: string;

	@ApiProperty()
	@IsString()
	refreshToken: string;
}
