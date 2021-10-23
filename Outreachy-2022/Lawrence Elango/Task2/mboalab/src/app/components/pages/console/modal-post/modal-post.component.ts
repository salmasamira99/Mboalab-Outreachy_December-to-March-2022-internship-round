import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CoreService } from '../../../../core/core.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { PostsService } from '../../../../services/posts.service';
@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  @ViewChild('postModal', { static: false }) postModal: any;

  public dropdownSettings: any = {
    singleSelection: true,
    idField: '_id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };


  public selectedCategory = null;
  public modalTitle = '';
  public modalText = '';
  public loading = false;
  public loadingData = false;

  public file: any;
  public preview: any;
  public default = 'https://via.placeholder.com/350x150';
  modalReference: any;
  closeResult!: string;


  postForm!: FormGroup;


  @Input() post: any;

  @Input() categories: any;
  @Input() action: any;
  @Input() origin: any;
  @Output() postAdded = new EventEmitter();
  @Output() postUpdated = new EventEmitter();
  @Output() postDeleted = new EventEmitter();
  @Output() postModalClosed = new EventEmitter();


  constructor(
    public core: CoreService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }


  openModal() {
    const timer = setTimeout(() => {
      if (this.action == 'addPost') {
        this.modalTitle = 'Add post';
        this.modalReference = this.modalService.open(this.postModal, this.core.ngbModalOptionsLg);
      } else if (this.action == 'updatePost') {
        this.modalTitle = 'Update post';
        this.modalReference = this.modalService.open(this.postModal, this.core.ngbModalOptionsLg);
        if (this.post)
          this.populatePostForm();
      } else if (this.action == 'deletePost') {
        this.modalTitle = 'Delete post';
        this.modalText = 'Do you want to delete post?';
        this.modalReference = this.modalService.open(this.postModal, this.core.ngbModalOptions);
      }
      clearTimeout(timer);
    }, 10);
  }

  onSubmitPost() {

    if (this.postFormIsValid()) {
      this.loading = true;
      this.loadingData = true;
      let values = this.postForm.value;
      if (values.category) values.category = this.selectedCategory;
      values.file = this.file;

      if (this.action == "addPost") {
        this.addPost(values);
      } else if (this.action == "updatePost") {
        this.updatePost(values);
      } else if (this.action == "deletePost") {
        this.deletePost();
      }
      this.loadingData = false;

    }

    return false;

  }


  populatePostForm() {

    if (!this.core.isEmptyOrNull(this.post.postimage)) {
      this.preview = this.post.postimage;
    }

    if (this.post.category) {
      var selectedCategory = this.categories.filter((category: any) => {
        return this.post.category == category._id;
      });
      this.selectedCategory = selectedCategory[0]._id
    }

    this.postForm.patchValue({
      title: this.post.title,
      content: this.post.content,
      category: selectedCategory
    })

  }

  addPost(values: any) {

    this.postsService.addPost(values).then(r => {
      this.core.showSuccess("Success", "Added Successfully...");
      this.loading = false;
      this.loadingData = false;
      this.preview = null;
      this.postAdded.emit(r._id);
      this.closeModal();
    }).catch(e => {
      this.loading = false;
      this.loadingData = false;
      this.core.handleError(e);
    });

  }


  updatePost(values: any) {

    if (values.category) values.category = this.selectedCategory;
    if (this.file) values.file = this.file;

    this.postsService.updatePost(values, this.post._id).then(r => {
      this.core.showSuccess("Success", "Updated Successfully...");
      this.loading = false;
      this.loadingData = false;
      this.preview = null;
      this.postUpdated.emit(this.post._id);
      this.closeModal();
    }).catch(e => {
      this.loading = false;
      this.loadingData = false;
      this.core.handleError(e);
    });

  }


  deletePost() {
    this.loading = true;
    this.loadingData = true;
    let id = this.post._id;
    if (!this.core.isEmptyOrNull(id)) {
      this.postsService.deletePost(id).then(r => {
        this.core.showSuccess("Success", "Deletion Successful...");
        this.loading = false;
        this.loadingData = false;
        this.closeModal();
      }).catch(e => {
        this.loading = false;
        this.loadingData = false;
        this.core.handleError(e);
      });
    } else {
      this.core.showError("Error", "Refreshing feed...");
    }
  }

  postFormIsValid() {
    if (this.action == "addPost") {
      return this.postForm.controls.title.valid &&
        this.postForm.controls.category.valid &&
        this.postForm.controls.content.valid &&
        !this.core.isEmptyOrNull(this.file);
    } else if (this.action == "updatePost") {
      return this.postForm.controls.title.valid ||
        this.postForm.controls.category.valid ||
        this.postForm.controls.content.valid ||
        !this.core.isEmptyOrNull(this.file);
    } else {
      return true;
    }
  }


  resetpostForm() {
    this.postForm?.reset();
  }

  getDate(date: string) {
    if (!this.core.isEmptyOrNull(date)) {
      return this.core.formatDate(date);
    } else {
      return "";
    }
  }

  closeModal() {
    this.modalReference.close()
    this.notifyOfModalDismissal();
  }

  notifyOfModalDismissal() {
    this.postModalClosed.emit();
    if (this.action == 'addPost' || this.action == 'updatePost') {
      this.resetpostForm();
      this.resetValues();
    }
  }

  resetValues() {
    this.preview = null;
    this.post = null;
  }

  fileChanged($event: any) {
    this.handleUpload($event);
  }

  handleUpload(event: any) {
    this.file = event.target.files[0];

    if (this.file && this.file.size > 1000000) {
      this.core.showError("Error", "Limit file to 1 mb");
      return;
    }

    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.preview = reader.result;
      };

      reader.onloadend = () => {
        if (this.preview) {
          //do something
        }
      }

    }
  }

  //category

  public onCategorySelect(event: any) {
    this.checkCategorySelection(event);
  }

  public onCategoryDeSelect(event: any) {
    this.postForm.patchValue({
      category: null
    });
  }

  public checkCategorySelection(event: any) {

    let value: any = event;
    // get packages and separate with commas
    const selectedCategory = this.postForm.value.category;
    this.selectedCategory = selectedCategory[0]._id;

    if (selectedCategory.length == 1) {

      this.postForm.patchValue({
        category: selectedCategory
      });
    } else {
      this.postForm.patchValue({
        category: null
      });
    }
  }
}




