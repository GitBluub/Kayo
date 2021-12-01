import { Injectable } from '@nestjs/common';
import { Parameter } from 'src/widget/models/parameter.model';

@Injectable()
export class WeatherService {
	
	async getData(widgetName: string, params: Parameter[]) {

	}
}
