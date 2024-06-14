import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getCats(): string[] {
    return this.catService.getCats();
  }

  @Get(':name')
  getCatByName(@Param('name') name: string): string {
    // return `Your cat name is ${name}`
    if (name == 'bilu') {
        console.log("In IF BLOCK")
      return 'Congrats you have own 15000$';
    }
    return `Your cat name is ${name}`;
  }
}
