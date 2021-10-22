import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CoreService } from '../../../../core/core.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CategoriesService } from '../../../../services/categories.service';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.css']
})
export class ModalCategoryComponent implements OnInit {

  @ViewChild('categoryModal', { static: false }) categoryModal: any;

  public modalTitle = '';
  public modalText = '';
  public loading = false;
  public loadingData = false;

  public file: any;
  public preview: any;
  public default = 'https://via.placeholder.com/350x150';
  modalReference: any;
  closeResult!: string;


  categoryForm!: FormGroup;


  @Input() category: any;

  @Input() action: any;
  @Input() origin: any;
  @Output() categoryAdded = new EventEmitter();
  @Output() categoryUpdated = new EventEmitter();
  @Output() categoryDeleted = new EventEmitter();
  @Output() categoryModalClosed = new EventEmitter();


  constructor(
    public core: CoreService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private categorysService: CategoriesService) {

  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.categoryForm.controls; }


  openModal() {
    const timer = setTimeout(() => {
      if (this.action == 'addCategory') {
        this.modalTitle = 'Add Category';
        this.modalReference = this.modalService.open(this.categoryModal, this.core.ngbModalOptions);
      } else if (this.action == 'updateCategory') {
        this.modalTitle = 'Update Category';
        this.modalReference = this.modalService.open(this.categoryModal, this.core.ngbModalOptions);
        if (this.category)
          this.populateCategoryForm();
      } else if (this.action == 'deleteCategory') {
        this.modalTitle = 'Delete Category';
        this.modalText = 'Do you want to delete category?';
        this.modalReference = this.modalService.open(this.categoryModal, this.core.ngbModalOptions);
      }
      clearTimeout(timer);
    }, 10);
  }

  onSubmitCategory() {

    if (this.categoryFormIsValid()) {
      this.loading = true;
      this.loadingData = true;
      let values = this.categoryForm.value;
      values.file = this.file;

      if (this.action == "addCategory") {
        this.addCategory(values);
      } else if (this.action == "updateCategory") {
        this.updateCategory(values);
      } else if (this.action == "deleteCategory") {
        this.deleteCategory();
      }
      this.loadingData = false;

    }

    return false;

  }


  populateCategoryForm() {

    if (!this.core.isEmptyOrNull(this.category.categoryimage.contentType)) {
      this.preview = "data:" + this.category.categoryimage.contentType + ";base64," + this.category.categoryimage.data;
    }

    this.categoryForm.patchValue({
      name: this.category.name,
      description: this.category.description,
    })

  }

  addCategory(values: any) {

    this.categorysService.addCategory(values).then(r => {
      this.core.showSuccess("Success", "Added Successfully...");
      this.loading = false;
      this.loadingData = false;
      this.preview = null;
      this.categoryAdded.emit(r._id);
      this.closeModal();
    }).catch(e => {
      this.loading = false;
      this.loadingData = false;
      this.core.handleError(e);
    });

  }


  updateCategory(values: any) {

    this.categorysService.updateCategory(values, this.category._id).then(r => {
      this.core.showSuccess("Success", "Updated Successfully...");
      this.loading = false;
      this.loadingData = false;
      this.preview = null;
      this.categoryUpdated.emit(this.category._id);
      this.closeModal();
    }).catch(e => {
      this.loading = false;
      this.loadingData = false;
      this.core.handleError(e);
    });

  }


  deleteCategory() {
    this.loading = true;
    this.loadingData = true;
    let id = this.category._id;
    if (!this.core.isEmptyOrNull(id)) {
      this.categorysService.deleteCategory(id).then(r => {
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

  categoryFormIsValid() {
    if (this.action == "addCategory") {
      return this.categoryForm.controls.name.valid &&
        this.categoryForm.controls.description.valid &&
        !this.core.isEmptyOrNull(this.file);
    } else if (this.action == "updateCategory") {
      return this.categoryForm.controls.name.valid ||
        this.categoryForm.controls.description.valid ||
        !this.core.isEmptyOrNull(this.file);
    } else {
      return true;
    }
  }


  resetCategoryForm() {
    this.categoryForm?.reset();
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
    this.categoryModalClosed.emit();
    if (this.action == 'addCategory' || this.action == 'updateCategory') {
      this.resetCategoryForm();
    }
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
}




