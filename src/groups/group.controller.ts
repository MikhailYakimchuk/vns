import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './group.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiOperation({ summary: 'Create a group' })
  @ApiResponse({ status: 201, description: 'The group has been successfully created.' })
  create(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all groups' })
  @ApiResponse({ status: 200, description: 'List of groups.', type: [Group] })
  findAll(): Promise<Group[]> {
    return this.groupService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a group by ID' })
  @ApiResponse({ status: 200, description: 'The group has been successfully fetched.', type: Group })
  findOne(@Param('id') id: number): Promise<Group> {
    return this.groupService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a group' })
  @ApiResponse({ status: 200, description: 'The group has been successfully updated.', type: Group })
  update(@Param('id') id: number, @Body() updateGroupDto: UpdateGroupDto): Promise<Group> {
    return this.groupService.update(id, updateGroupDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a group' })
  @ApiResponse({ status: 204, description: 'The group has been successfully deleted.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.groupService.remove(id);
  }
}
