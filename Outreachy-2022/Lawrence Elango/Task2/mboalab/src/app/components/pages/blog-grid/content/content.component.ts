import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../../../core/core.service';
import { PostsService } from '../../../../services/posts.service';
import { CategoriesService } from '../../../../services/categories.service';
import blog from '../../../../data/blog/blog.json';

import blogcategory from '../../../../data/blog/category.json'
import blogtags from '../../../../data/blog/tags.json'
import author from '../../../../data/team.json';
import { DxDataGridComponent } from "devextreme-angular";
import _ from 'lodash';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  public default = 'https://bootdey.com/img/Content/avatar/avatar7.png';

  public postsPerPage: any;
  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';
  public defaultStartDate = "";
  public defaultEndDate = "";
  public defaultStatus = "all";


  public categories: any = [];
  public categoryCount = 0;
  public posts: any = [];
  public postCount = 0;

  constructor(private router: ActivatedRoute,
    public _core: CoreService,
    private categoriesService: CategoriesService,
    private postsService: PostsService) { }


  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.getCategories();
    this.getPosts();
  }


  async getCategories() {
    this.loadingData = true;

    this.categoriesService
      .getCategories()
      .then(async (category) => {
        this.categoryCount = category.count;
        let categories = this._core.normalizeKeys(category.categories);

        this.categories = _.orderBy(categories, ['created_at'], ['desc']);;

        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });
  }



  getDate(date: string) {
    if (!this._core.isEmptyOrNull(date)) {
      return this._core.formatDate(date);
    } else {
      return "";
    }
  }


  async getPosts() {
    this.loadingData = true;

    let data = {
      start: this.defaultStartDate,
      end: this.defaultEndDate,
      status: this.defaultStatus
    }

    this.postsService
      .getPosts(data)
      .then(async (post) => {
        this.postCount = post.count;
        let posts = this._core.normalizeKeys(post.posts);
        this.posts = _.orderBy(posts, ['createdat'], ['desc']);
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });
  }


}
