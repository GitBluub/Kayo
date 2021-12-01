import { Injectable } from '@nestjs/common';
import { Parameter } from 'src/widget/models/parameter.model';

@Injectable()
export class StocksService {

	async getData(widgetName: string, params: Parameter[], token: string) {

	}
}
