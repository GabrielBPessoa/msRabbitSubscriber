import { PartialType } from '@nestjs/mapped-types';
import { ConsentDto } from './create-consent.dto';

export class UpdateConsentDto extends PartialType(ConsentDto) {}
