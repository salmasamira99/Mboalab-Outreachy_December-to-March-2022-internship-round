import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog/blog.json';
import tags from '../../../../data/blog/tags.json';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }
  public blogblock = blogpost;
  public getTags(items: string | any[]) {
    var elems = tags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  ngOnInit(): void {
  }

}
