import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSrc',
})
export class ImageSrcPipe implements PipeTransform {
  transform(image: string): string {
    if(image.startsWith('blob') || image.startsWith('data')) {
      return image;
    }
    return 'assets/' + image;
  }
}
