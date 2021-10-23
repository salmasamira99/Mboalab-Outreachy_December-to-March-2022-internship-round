import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../../core/core.service';
import { CategoriesService } from '../../../services/categories.service';
import blog from '../../../data/blog/blog.json';
import category from '../../../data/blog/category.json';
import tags from '../../../data/blog/tags.json';
import instagram from '../../../data/instagram.json';
import twitterfeeds from '../../../data/twitterfeeds.json';
import _ from 'lodash';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor(
    public _core: CoreService, private categoriesService: CategoriesService) { }


  public categories: any = [];
  public categoryCount = 0;
  public blog = blog;
  public category = category;
  public tags = tags;
  public instagram = instagram;
  public twitterfeeds = twitterfeeds;

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {

    this.categoriesService
      .getCategories()
      .then(async (category) => {
        this.categoryCount = category.count;
        let categories = this._core.normalizeKeys(category.categories);
        this.categories = _.orderBy(categories, ['createdat'], ['desc']);

      })
      .catch(e => {
        this._core.handleError(e);
      });
  }

}
