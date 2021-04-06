import { Component, Input } from "@angular/core";

@Component({
    selector: 'server',
    templateUrl: './server.component.html',   
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    title = "Server Component";

    @Input() grade: number = 0;

    name: string;
    uid: string = '';
    allowToReset: boolean = false;

    constructor(){
        this.name = "Andy";
    }

    getTitle(){
        return this.title;
    }

    getGrade(){
        return this.grade + this.grade;
    }

    handleInput(){
        if (this.uid.length > 0){
            this.allowToReset = true;
        }
        else {
            this.allowToReset = false;
        }
    }

    reset(){
        this.allowToReset = false;
        this.uid = "";
    }
}