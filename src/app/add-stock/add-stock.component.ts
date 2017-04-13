import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  @Input() selectedStock

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  beginUpdatingStock(stockToUpdate) {
    this.userService.updateStock(stockToUpdate);
  }

}
