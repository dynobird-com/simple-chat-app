import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import * as bcrypt from 'bcrypt';

@Injectable()

// add interceptor when user login, emit event by socket.io




export class LoggerInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map(data => {
				const message = data.success ? 'Login success' : 'Login failed';
				data.message = message;
				return data;
			}));
	}
}