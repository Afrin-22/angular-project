import { Component } from "@angular/core";

@Component({
    selector: 'assignment-3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3 {

    showSecret: boolean = false;
    log: any = [];

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        //this.log.push(this.log.length + 1);
        this.log.push(new Date());
    }

}