import { Controller, Get, Post, Req} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Req() request: Request): string {
        let munchiesBreed = new Breed()
        munchiesBreed.name = 'nombreraza'
        let cat = new Cat()
        cat.name = 'Munchies'
        cat.breed = munchiesBreed
        cat.age = 5
        cats.push(cat)
        console.log('Request is: ', request.body)
        return 'Created one cat'
    }

    @Get()
    getAll(): string[] {
        return cats
    }

    @Get('breeds')
    getAllBreeds(): string {
        return 'only one breed'
    }


}

export class Cat {
    name: string
    breed: Breed
    age: number
    meow(){
        console.log('meow')
    }
}

export class Breed{
    size: string
    color: string
    name: string
}

let cats = [];


