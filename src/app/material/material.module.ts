import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatDialogModule]

@NgModule ({
    declarations: [],
    imports: [CommonModule, ...modules],
    exports: [...modules]
})
export class MaterialModule {}