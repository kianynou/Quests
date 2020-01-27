import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

const routes: Routes = [
  { path: '', component: PlaylistsComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent },
  { path: 'details', component: PlaylistDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
