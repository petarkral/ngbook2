import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){    
    this.articles = [
      new Article('Angular2', 'http://angular.io', 2),
      new Article('Angular3', 'http://angular.io', 3),
      new Article('Angular4', 'http://angular.io', 4)
   ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }
}
