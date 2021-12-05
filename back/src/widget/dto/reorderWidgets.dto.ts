import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";

export class ReorderWidgetsDto {
	@ApiProperty()
	@IsNotEmpty()
	@IsArray()
	ids: number[];
}
