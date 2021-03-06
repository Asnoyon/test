import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model';
import { slideInAnimation } from 'src/app/shared/animation';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  animations: [slideInAnimation],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  dataSubscription: Subscription;
  isAdmin: boolean;
  color: string = 'yellow';
  constructor(private route: ActivatedRoute) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe((data: Data) => {
      this.currentUser = data['profile'];
      this.isAdmin = this.currentUser.role === 'Admin';
    });
    this.dataSubscription.unsubscribe();
  }
}
