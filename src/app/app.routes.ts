import { Routes } from '@angular/router';
import { Layout } from '@shared/components/layout/layout';
import { NotFound } from '@info/pages/not-found/not-found';
import { ProductDetail } from '@products/pages/product-detail/product-detail';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
        path : "",
        loadComponent:() => import('./domains/products/pages/list/list')
    },
        {
        path : "about",
        loadComponent:() => import('./domains/info/pages/about/about')
    },
    {
        path : "product/:id",
        component:ProductDetail,
      
  
        
    }

        ]
    },
    
    {
        path: '**',
        component:NotFound
    }

];
