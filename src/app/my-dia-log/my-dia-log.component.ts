import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dia-log',
  templateUrl: './my-dia-log.component.html',
  styleUrls: ['./my-dia-log.component.css']
})
export class MyDiaLogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MyDiaLogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close();
    //fechar modal
  }

}
