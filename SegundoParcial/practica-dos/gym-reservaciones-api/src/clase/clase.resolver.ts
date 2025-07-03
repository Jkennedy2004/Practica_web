import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClaseService } from './clase.service';
import { Clase } from './entities/clase.entity';
import { CreateClaseInput } from './dto/create-clase.input';
import { UpdateClaseInput } from './dto/update-clase.input';

@Resolver(() => Clase)
export class ClaseResolver {
  constructor(private readonly claseService: ClaseService) {}

  @Mutation(() => Clase)
  createClase(@Args('createClaseInput') createClaseInput: CreateClaseInput) {
    return this.claseService.create(createClaseInput);
  }

  @Query(() => [Clase], { name: 'clases' })
  findAll() {
    return this.claseService.findAll();
  }

  @Query(() => Clase, { name: 'clase' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.claseService.findOne(id);
  }

  @Mutation(() => Clase)
  updateClase(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateClaseInput') updateClaseInput: UpdateClaseInput,
  ) {
    return this.claseService.update(id, updateClaseInput);
  }

  @Mutation(() => Clase)
  removeClase(@Args('id', { type: () => Int }) id: number) {
    return this.claseService.remove(id);
  }
}
