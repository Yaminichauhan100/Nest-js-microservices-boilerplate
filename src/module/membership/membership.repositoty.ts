import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Membership } from '../../entity/membership.entity';

@Injectable()
export class MembershipRepository extends Repository<Membership> {}
