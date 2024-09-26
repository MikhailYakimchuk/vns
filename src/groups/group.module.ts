import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { groupProviders } from './group.providers';

@Module({
  imports: [],
  controllers: [GroupController],
  providers: [GroupService, ...groupProviders],
})
export class GroupModule {}
