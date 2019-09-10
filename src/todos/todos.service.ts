import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

    getAllTodos() {
        return [
            {
                id: 1,
                name: 'Tarea 1',
            },
            {
                id: 2,
                name: 'Tarea 2',
            },
        ];
    }

    getTodo(id: string) {
        return {
            id,
            name: `tarea ${id}`,
        };
    }

}
