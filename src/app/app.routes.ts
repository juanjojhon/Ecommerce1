import { Routes } from '@angular/router';

import {List} from "@products/pages/list/list"
import { About } from '@info/pages/about/about';
import { Layout } from '@shared/components/layout/layout';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
        path : "",
        component:List 
    },
        {
        path : "about",
        component:About 
    }
        ]
    },
    
    {
        path: '**',
        component:NotFound
    }

];
