import { Component } from '@angular/core';
import { Upload } from '../shared/upload';
import * as _ from "lodash";
@Component({
    selector: 'upload-form',
    templateUrl: './upload-form.component.html',
    styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {
    currentUpload: Upload;
    dropzoneActive:boolean = false;

    constructor() { }

    dropzoneState($event: boolean) {
        this.dropzoneActive = $event;
    }

    handleDrop(fileList: FileList) {
        let filesIndex = _.range(fileList.length)
        _.each(filesIndex, (idx) => {
            console.log(idx);
            this.currentUpload = new Upload(fileList[idx]);
        });
    }
}