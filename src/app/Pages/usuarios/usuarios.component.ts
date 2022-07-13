import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProps } from 'src/app/models/models';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { DialogUpdateUserComponent } from './dialog-update-user/dialog-update-user.component';
import { UsuariosService } from './usuarios.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() dataSource: Array<UserProps> = []
  
  constructor(
    public dialog: MatDialog,
    private service: UsuariosService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe((result: UserProps) => {
      this.dataSource = this.service.createUser(result, this.dataSource)
    });
  }

  openDialogUpdate(userSelected: UserProps): void {
    const dialogRef = this.dialog.open(DialogUpdateUserComponent, {
      width: '700px',
      data: {id: userSelected.id, name: userSelected.name, email: userSelected.email, cpf: userSelected.cpf, phone: userSelected.phone, typePhone: userSelected.typePhone},
    });

    dialogRef.afterClosed().subscribe((result: UserProps) => {
      this.dataSource = this.service.updateUser(userSelected, result, this.dataSource)
    });
  }

  deleteUser(userSelected: UserProps): void {
    this.dataSource = this.service.deleteUser(userSelected, this.dataSource)
  }

  ngOnInit(): void {
    
  }

}
