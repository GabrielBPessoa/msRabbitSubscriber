import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ConsentDocument = Consent & Document;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'consents',
  autoCreate: true,
})
export class Consent {
  @Prop({ required: true, unique: true })
  consent_id: string;

  @Prop({ required: true })
  cpf: string;

  @Prop()
  updatedAt: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  isDeleted?: boolean;

  @Prop()
  deletedAt?: Date;
}

export const ConsentSchema = SchemaFactory.createForClass(Consent);
