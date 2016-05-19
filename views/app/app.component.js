System.register(['@angular/core', '@angular/router-deprecated', './home', './login.component', './addMember.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, home_1, login_component_1, addMember_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (addMember_component_1_1) {
                addMember_component_1 = addMember_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "\n  <div class=\"container body-container\">\n    <nav>\n      <a [routerLink]=\"['AddMember']\">AddMember</a>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/home', component: home_1.HomeComponent, name: 'Home' },
                        { path: '/login', component: login_component_1.LoginComponent, name: 'Login', useAsDefault: true },
                        { path: '/addMember', component: addMember_component_1.AddMemberComponent, name: 'AddMember' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUE0QixDQUFDO2dCQXJCN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsZ0NBQVksRUFBQyxxQ0FBaUIsQ0FBQzt3QkFDNUMsUUFBUSxFQUFFLCtLQU9UO3dCQUNGLFNBQVMsRUFBRTs0QkFDUCxvQ0FBZ0I7eUJBQ25CO3FCQUNELENBQUM7b0JBQ0QsK0JBQVcsQ0FBQzt3QkFDWCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDekQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFDLElBQUksRUFBRzt3QkFDakYsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3FCQUV6RSxDQUFDOztnQ0FBQTtnQkFDMEIsbUJBQUM7WUFBRCxDQUE1QixBQUE2QixJQUFBO1lBQTdCLHVDQUE2QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LFJPVVRFUl9QUk9WSURFUlMsUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkTWVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRNZW1iZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCxST1VURVJfRElSRUNUSVZFU10sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYm9keS1jb250YWluZXJcIj5cbiAgICA8bmF2PlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBZGRNZW1iZXInXVwiPkFkZE1lbWJlcjwvYT5cbiAgICA8L25hdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIDwvZGl2PlxuICBgLFxuXHRwcm92aWRlcnM6IFtcbiAgICBcdFJPVVRFUl9QUk9WSURFUlNcblx0XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBuYW1lOiAnSG9tZScgfSxcbiAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgbmFtZTogJ0xvZ2luJyAsIHVzZUFzRGVmYXVsdDp0cnVlICB9LFxuICB7IHBhdGg6ICcvYWRkTWVtYmVyJywgY29tcG9uZW50OiBBZGRNZW1iZXJDb21wb25lbnQsIG5hbWU6ICdBZGRNZW1iZXInIH1cblxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
