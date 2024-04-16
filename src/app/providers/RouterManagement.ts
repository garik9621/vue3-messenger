import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router';
import type { StoreDefinition } from 'pinia';
import { routesList } from '@entities/app-routes/config';
import { useUser } from '@entities/user/model/useUser';
import { unref } from 'vue';

export default class RouterManagement {
    private store: StoreDefinition;

    public routerInstance: Router;

    private routesList: any[];

    constructor(store: StoreDefinition) {
        // this.store = store;
        //
        // this.routesList = [...routesList];
        //
        // this.routerInstance = createRouter({
        //     history: createWebHistory(import.meta.env.BASE_URL),
        //     routes: this.getRoutesListUpdatedForAuthorizedState(),
        // });
        //
        // this.subscribeToAuthorizeChange();
    }

    // private getRoutesListUpdatedForAuthorizedState(): RouteRecordRaw[] {
    //     const { isAuthorized } = useUser();
    //
    //     return this.routesList.map((route) => {
    //         let component = route.componentUnAuthorized;
    //         let redirect = !unref(isAuthorized) && !route.componentUnAuthorized ? '/auth' : null;
    //
    //         if (unref(isAuthorized) && route.componentAuthorized) {
    //             component = route.componentAuthorized;
    //         }
    //
    //         if (unref(isAuthorized) && route.redirectWhenAuthorized) {
    //             redirect = route.redirectWhenAuthorized;
    //         }
    //
    //         return {
    //             path: route.path,
    //             name: route.name,
    //             component,
    //             redirect,
    //         };
    //     }) as RouteRecordRaw[];
    // }
    //
    // private subscribeToAuthorizeChange() {
    //     this.store().$subscribe(() => {
    //         console.log(this.getRoutesListUpdatedForAuthorizedState());
    //         this.getRoutesListUpdatedForAuthorizedState().map((route: RouteRecordRaw) => {
    //             this.routerInstance.addRoute(route);
    //         });
    //     });
    // }
}
