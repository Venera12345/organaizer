import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalApproveComponent} from '../shared/modal/modal-approve/modal-approve.component';

@Component({
  selector: 'app-list-puchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.scss']
})
export class ListPurchaseComponent implements OnInit {
  listPurchase: {
    id: string;
    name: string;
    goods: {
      name_good: string;
      amount: string
    }[];
  }[] = [
    {
      id: 'r1',
      name: 'List goods today',
      goods: [
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'lemon',
          amount: '1'
        }
      ]
    },
    {
      id: 'r2',
      name: 'List goods ay',
      goods: [
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'lemon',
          amount: '1'
        }
      ]
    },
    {
      id: 'r3',
      name: 'List gds today',
      goods: [
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'lemon',
          amount: '1'
        }
      ]
    },
    {
      id: 'r4',
      name: 'List today',
      goods: [
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'lemon',
          amount: '1'
        },
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        }
      ]
    },
    {
      id: 'r5',
      name: 'List goods tomorrow',
      goods: [
        {
          name_good: 'apple',
          amount: '3 lb'
        },
        {
          name_good: 'milk',
          amount: '2 bottle'
        },
        {
          name_good: 'lemon',
          amount: '1'
        }
      ]
    }
];
  changeElement: string;
  dataForChanging: {
    name_good: string;
    amount: string
  } [];
  nameChanging: string;
  newListPurchase: { id: string; name: string; goods: { name_good: string; amount: string }[] }[];

  constructor(private modalDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete(item) {
    this.modalDialog.open(ModalApproveComponent, {
      autoFocus: true,
      data: {delete: true, object: item}
    }).afterClosed().subscribe((res) => {
      if(res) {

      }
    })
  }

  change(purchase: { id: string; name: string; goods: { name_good: string; amount: string }[] }) {
    this.changeElement = purchase.id;
    this.newListPurchase = this.listPurchase;
    this.listPurchase.forEach((item) => {
      if (item.id === this.changeElement) {
        this.dataForChanging = item.goods;
      }
    });
  }

  cancelChange() {
    this.changeElement = null;
    this.listPurchase = this.newListPurchase;
  }

  addGood() {
    const data = {name_good: '', amount: ''};
    this.listPurchase.forEach((item) => {
      if (item.id === this.changeElement) {
        item.goods.push(data);
      }
    });
  }
}
