export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  name: string;
  limit: number;
}

export class UpdateCatDto {
  name: string;
}
