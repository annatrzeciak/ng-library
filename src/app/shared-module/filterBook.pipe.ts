import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBook'
})
export class FilterBookPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText)||it._id.$oid.toLowerCase().includes(searchText)||it.author.toLowerCase().includes(searchText);
    });
  }
}