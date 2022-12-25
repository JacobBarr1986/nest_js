import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayersService {
  private players: any = [
    {
      id: 1,
      firstName: 'Kobi',
      lastName: 'Barr',
      age: 36
    },
    {
      id: 2,
      firstName: 'Neta',
      lastName: 'Barr',
      age: 36
    }

  ];

  private createId() {
    let newId: number;

    do {
      newId = Math.floor(Math.random() * 1000);
    } while(this.getPlayerById(newId) === null);

    return newId;
    
  }

  getAllPlayers() {
    return [... this.players];
  }

  getPlayerById(id: number) {
    return this.players.find(player => player.id === id);
  }

  createPlayer(createPlayerDto: CreatePlayerDto) {
    const player = {
      id: this.createId(),
      firstName: createPlayerDto.firstName,
      lastName: createPlayerDto.lastName,
      age: createPlayerDto.age,
    }

    this.players.push(player);

    return [...this.players];
  }
}
