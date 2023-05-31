import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  

  products = [
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' },
    { name: 'Polarised Filter', price: '$99.99', img: '../../assets/wallpaperflare.com_wallpaper (1).jpg' }
  ];

  getAllProducts(): any {
    const productList = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(this.products);
      }, 3000)
    });
    return productList;
  }
}
