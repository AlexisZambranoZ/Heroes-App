import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styles: [
  ]
})
export class ConfirmDialogueComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(){
    this.dialogRef.close(false)
  }
  onConfirm(){
    this.dialogRef.close(true)
  }
 }
