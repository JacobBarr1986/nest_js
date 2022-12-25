import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}
  @Get()
  getAllPlayers() {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  getPlayerById(@Param('id', ParseIntPipe) id: number) {
    return this.playerService.getPlayerById(id);
  }

  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.createPlayer(createPlayerDto);
  }
}
