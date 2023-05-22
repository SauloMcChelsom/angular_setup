import { Component, OnInit } from '@angular/core';
import { TodosStateService } from './services/todos-state.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private todosStateService:TodosStateService) { }

  ngOnInit() {}
}
