import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from 'src/entity/membership.entity';
import { MembershipRepository } from './membership.repositoty';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private readonly membershipRepository: MembershipRepository,
  ) {}
}
