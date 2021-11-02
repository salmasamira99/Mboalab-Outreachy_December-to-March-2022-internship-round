import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CoreService } from '../../../../core/core.service';
import { CategoriesService } from '../../../../services/categories.service';
import { DxDataGridComponent } from "devextreme-angular";
import _ from 'lodash';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @ViewChild('categoryModal', { static: false }) categoryModal: any;
  @ViewChild("categoriesContainer", { static: false }) categoriesDataGrid: DxDataGridComponent | undefined;

  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';
  public categories: any = [];
  public categoryCount = 0;
  public categoryFile: any;
  public categoryImagePreview: any;
  public categoryImageDefault = 'assets/img/contact-thumb.jpg';

  public theCategory: any;
  public origin = 'categories';
  public categoryModalAction = '';

  constructor(public _core: CoreService,
    private datePipe: DatePipe,
    private categoriesService: CategoriesService,) { }

  ngOnInit(): void {
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


  categoryImageChanged($event: any) {
    this.handleCategoryImageUpload($event);
  }


  handleCategoryImageUpload(event: any) {
    this.categoryFile = event.target.files[0];

    if (this.categoryFile && this.categoryFile.size > 1000000) {
      this._core.showError("Error", "Limit file to 1 mb");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.categoryFile);
    reader.onload = () => {
      this.categoryImagePreview = reader.result;
    };

    reader.onloadend = () => {
      if (this.categoryImagePreview) {
        //do nothing.
      }
    }

  }

  openCategoryModal(action: string, category: any) {
    this.categoryModalAction = action;
    this.theCategory = category;
    this.categoryModal.openModal();
  }

  onCategoryModalClosed() {
    this.categoryModalAction = '';
    this.theCategory = null;
    this.getCategories();
  }

  onCategoryUpdated(id: any) {
    //this.getCategory(id, 'update');
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
