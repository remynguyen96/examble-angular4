import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
// import {CdkTableModule} from "@angular/cdk";


import {MdCheckboxModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdChipsModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';
// import {MaterialModule, MdAutocompleteModule} from '@angular/material';
// import {MdDatepickerModule} from '@angular/material';
// import {MdSlideToggleModule} from '@angular/material';
// import {MdButtonToggleModule} from '@angular/material';
// import {MdSidenavModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';
// import {MdSnackBarModule} from '@angular/material';
// import {MdTooltipModule} from '@angular/material';
// import {MdTableModule} from '@angular/material';
// import {MdSortModule} from '@angular/material';
// import {MdPaginatorModule} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        // CdkTableModule,
        MdCheckboxModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule,
        MdMenuModule,
        MdToolbarModule,
        MdTabsModule,
        MdCardModule,
        MdGridListModule,
        MdButtonModule,
        MdChipsModule,
        MdIconModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdListModule
    ],
    declarations: [

    ]
})
export class ShareModuleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModuleModule,
            providers: []
        }
    }
}
