import {Component, NgModule} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traceapp-UI';
  projectId;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  postJiraToNeo4j(): void {
    let issues;
    this.http.get(`/api/jira/keysAndSummary`).subscribe((data) => {
      issues = data;
      this.http.post('/api/neo4j/jiraToNeo4j', {issues}, {responseType: 'text'}).subscribe(r => {
        console.log(r);
        window.location.reload();
      });
    });
  }

  updateGit(projectId: number): void {
    if (projectId == null) {
      alert('Please set a project id');
      return;
    }
    this.http.post('/updateproject', {project_id: projectId}, {responseType: 'text'}).subscribe((r) => {
      console.log(r);
      window.location.reload();
    });
  }
}
