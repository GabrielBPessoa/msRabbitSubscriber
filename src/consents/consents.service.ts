import { Injectable } from '@nestjs/common';
import { ConsentDto } from './dto/create-consent.dto';
import { UpdateConsentDto } from './dto/update-consent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consent, ConsentDocument } from './entities/consent.entity';

@Injectable()
export class ConsentService {
  constructor(
    @InjectModel(Consent.name) private consentModel: Model<ConsentDocument>,
  ) {}
  async create(payload: {}) {
    try {
      const createdConsent = new this.consentModel(payload);
      return await createdConsent.save();
    } catch (e) {
      console.log(e);
    }
  }

  async findAll() {
    return await this.consentModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} consent`;
  }

  update(id: number, updateConsentDto: UpdateConsentDto) {
    return `This action updates a #${id} consent`;
  }

  remove(id: number) {
    return `This action removes a #${id} consent`;
  }
}
