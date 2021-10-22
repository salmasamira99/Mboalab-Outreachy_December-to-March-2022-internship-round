import { Injectable } from '@angular/core';
import data from '../../data/testimonials.json';
import author from '../../data/team.json';

@Injectable({
  providedIn: 'root'
})
export class TestimonialHelperService {
  public testimonials = data;
  constructor() { }
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
}
