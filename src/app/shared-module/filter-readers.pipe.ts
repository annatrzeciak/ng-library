import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReaders'
})
export class FilterReadersPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText.trim())||it.surname.toLowerCase().includes(searchText.trim())||it._id.$oid.toLowerCase().includes(searchText.trim());
    });
  }

}
