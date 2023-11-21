import { Controller, Get, Post, Req, Put, Delete} from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Post()
    create(@Req() request: Request): string {
        let cat = new Cat()
        cat.id = request.body.id
        cat.name = request.body.name
        cat.color = request.body.color
        cat.age = request.body.age
        cats.push(cat)
        return 'Created one cat'
    }

    @Get()
    getAll(): string[] {
        console.log('')
        return cats
    }

    @Put()
    modify(@Req() request: Request): string {
        for (let i = 0; i < cats.length; i++) {
            if(cats[i].id == request.body.id){
                cats[i].name = request.body.name
                cats[i].color = request.body.color
                cats[i].age = request.body.age
            }
        }
        return 'updated cat:' + request.body.id
    }

    @Delete()
    remove(@Req() request:Request): string{
        for (let i = 0; i < cats.length; i++) {
            if(cats[i].id == request.body.id){
                cats.splice(i, 1)
            }
        }
        return 'removed cat:' + request.body.id
    }

}

export class Cat {
    id: number
    name: string
    color: string
    age: number
    meow(){
        console.log('meow')
    }
}

type Request = {
    body?: {
        id?: number,
        name?: string,
        color?: string,
        age?: number
    }
}

let cats = [];


