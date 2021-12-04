import { ApiProperty } from "@nestjs/swagger";
import { ParamInterface } from '../models/parameter.model';
import { IsNotEmpty } from "class-validator";

export class CreateWidgetDto {
	@ApiProperty()
	@IsNotEmpty()
	params: ParamInterface[];
}
