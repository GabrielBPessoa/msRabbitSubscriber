import { IsNotEmpty, IsString } from 'class-validator';

export class ConsentDto {
  @IsString()
  @IsNotEmpty()
  consent_id: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;
}
