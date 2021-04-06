import { Component, Input } from "@angular/core";

@Component({
    selector: 'server',
    templateUrl: './server.component.html',   
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    title = "Server Component";

    @Input() grade: number = 0;

    getTitle(){
        return this.title;
    }

    getGrade(){
        return this.grade + this.grade;
    }
}