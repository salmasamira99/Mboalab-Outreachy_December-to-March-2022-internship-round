import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CoreService } from '../../../../core/core.service';
import { PostsService } from '../../../../services/posts.service';
import { CategoriesService } from '../../../../services/categories.service';
import { DxDataGridComponent } from "devextreme-angular";
import _ from 'lodash';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @ViewChild('postModal', { static: false }) postModal: any;
  @ViewChild("postsContainer", { static: false }) postsDataGrid: DxDataGridComponent | undefined;

  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';
  public posts: any = [];
  public postCount = 0;
  public postFile: any;
  public postImagePreview: any;
  public PostImageDefault = 'assets/img/contact-thumb.jpg';

  public thePost: any;
  public origin = 'posts';
  public postModalAction = '';


  public categories: any = [];
  public categoryCount = 0;

  constructor(public _core: CoreService,
    private datePipe: DatePipe,
    private categoriesService: CategoriesService,
    private postsService: PostsService,) { }

  ngOnInit(): void {
    this.getPosts();
    this.getCategories();
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



  async getPosts() {
    this.loadingData = true;

    let user = this._core.loginUser.user._id;

    let data = {
      author: user ? user : null
    }

    this.postsService
      .getPosts(data)
      .then(async (post) => {
        this.postCount = post.count;
        let posts = this._core.normalizeKeys(post.posts);

        this.posts = _.orderBy(posts, ['createdat'], ['desc']);;

        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });
  }


  PostImageChanged($event: any) {
    this.handlePostImageUpload($event);
  }


  handlePostImageUpload(event: any) {
    this.postFile = event.target.files[0];

    if (this.postFile && this.postFile.size > 1000000) {
      this._core.showError("Error", "Limit file to 1 mb");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.postFile);
    reader.onload = () => {
      this.postImagePreview = reader.result;
    };

    reader.onloadend = () => {
      if (this.postImagePreview) {
        //do nothing.
      }
    }

  }

  openPostModal(action: string, Post: any) {
    this.postModalAction = action;
    this.thePost = Post;
    this.postModal.openModal();
  }

  onPostModalClosed() {
    this.postModalAction = '';
    this.thePost = null;
    this.getPosts();
  }

  onPostUpdated(id: any) {
    //this.getPost(id, 'update');
  }

  getDate(date: string) {
    if (!this._core.isEmptyOrNull(date)) {
      return this._core.formatDate(date);
    } else {
      return "";
    }
  }


  customizeExcelCell = (options: any) => {
    var gridCell = options.gridCell;
    if (!gridCell) {
      return;
    }

    if (gridCell.rowType === "data") {

      if (gridCell.column.dataField === 'createdat') {
        options.value = this.datePipe.transform(gridCell.value, "medium");
      }

    }
  };

}
