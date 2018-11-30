import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { ReposService } from './shared/repos.service';
import { SharedModule } from '../shared/modules/shared.module';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoriesListItemComponent } from './repositories-list-item/repositories-list-item.component';
import { RepositoriesDetailsComponent } from './repositories-details/repositories-details.component';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    RepositoriesListComponent,
    RepositoriesListItemComponent,
    RepositoriesDetailsComponent
  ],
  providers: [ReposService]
})
export class RepositoriesModule { }