import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../../../services/profiles.service';
import { CoreService } from '../../../../core/core.service';
import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
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
  public default = 'assets/img/profile-thumb.png';
  public userProfile: any;
  public userImage: any;
  public relatedPosts: any;
  public relatedTags: any;
  public postPerPage: any;

  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';

  public categories: any = [];
  public categoryCount = 0;

  public nextPost: any = [];
  public post: any = [];
  public postCount = 0;

  constructor(private router: ActivatedRoute,
    public route: Router,
    public profilesService: ProfilesService,
    public _core: CoreService,
    public sanitization: DomSanitizer,
    private categoriesService: CategoriesService,
    private postsService: PostsService) { }


  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.getCategories();
    this.setPost(this.router.snapshot.params.id);
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

  async getProfile(id) {

    this.loadingData = true;
    await this.profilesService
      .getProfile(id)
      .then(user => {
        this.userProfile = this._core.normalizeKeys(user);
        if (this.userProfile.avatar) {
          this.userImage = this.userProfile.avatar;
        } else {
          this.userImage = null;
        }

        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        //this._core.handleError(e);
      });

  }



  getDate(date: string) {
    if (!this._core.isEmptyOrNull(date)) {
      return this._core.formatDate(date);
    } else {
      return "";
    }
  }


  async setPost(slug) {
    this.loadingData = true;
    this.postsService
      .getSinglePostBySlug(slug)
      .then(async (post) => {
        let currentPost = this._core.normalizeKeys(post);
        this.post = this._core.normalizeKeys(currentPost);
        this.getProfile(this.post.authorusername);
        //this.getPostSequence(this.post._id, "next");
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });
  }

  async getPostSequence(id, realm) {
    this.loadingData = true;
    if (realm == "next") {

      this.postsService
        .getNextPost(id)
        .then(async (post) => {
          let currentPost = this._core.normalizeKeys(post);
          this.nextPost = this._core.normalizeKeys(currentPost);
          console.log('this.nextPost',this.nextPost);
          this.loadingData = false;
        })
        .catch(e => {
          this.loadingData = false;
          this._core.handleError(e);
        });

    } else if (realm == "previous") {

    }

  }



}
