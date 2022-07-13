import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProps } from 'src/app/models/models';

@Component({
  selector: 'app-dialog-update-user',
  templateUrl: './dialog-update-user.component.html',
  styleUrls: ['./dialog-update-user.component.css']
})
export class DialogUpdateUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateUserComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserProps,
  ) {}

  formGroup: any
  user: UserProps = { id: this.data.id, name: this.data.name, email: this.data.email, cpf: this.data.cpf, phone: this.data.phone, typePhone: this.data.typePhone }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get form(){
    return this.formGroup.controls
  }

  onSaveUser(): void {
    if(this.formGroup.invalid){
      alert("Preencha os dados obrigatórios!")
      return
    }else{
      this.user.email = this.form.email.value
      this.user.name = this.form.name.value
      this.user.cpf = this.form.cpf.value
      this.user.phone = this.form.phone.value
      this.user.typePhone = this.form.typePhone.value
      this.dialogRef.close(this.user);
    }
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email:[this.user.email, Validators.required],
      name:[this.user.name, Validators.required],
      cpf:[this.user.cpf, Validators.required],
      phone:[this.user.phone, Validators.required],
      typePhone:[this.user.typePhone, Validators.required],
    })
  }

}
