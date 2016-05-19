System.register(['@angular/core', '@angular/router-deprecated', './login.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                LoginComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    console.log('you submitted value:', data['name']);
                    this.loginService.login(data['name'], data['password'])
                        .subscribe(function (token) { return _this.router.navigate(['../Home']); }, function () { _this.error = true; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/login.component.html',
                        styleUrls: ['app/login.css'],
                        providers: [login_service_1.LoginService],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_deprecated_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBS0Msd0JBQ1csWUFBMEIsRUFDMUIsTUFBYztvQkFEZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFDcEIsQ0FBQztnQkFHSCxpQ0FBUSxHQUFSLFVBQVUsSUFBSTtvQkFBZCxpQkFTQztvQkFQRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBRSxDQUFDO29CQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFFO3lCQUN4RCxTQUFTLENBQ1IsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLEVBQ2pELGNBQVEsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzdCLENBQUM7Z0JBQ0osQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFHLDBCQUEwQjt3QkFDeEMsU0FBUyxFQUFHLENBQUUsZUFBZSxDQUFFO3dCQUMvQixTQUFTLEVBQUcsQ0FBRSw0QkFBWSxDQUFFO3FCQUU3QixDQUFDOztrQ0FBQTtnQkF5QkYscUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDJDQXNCQyxDQUFBIiwiZmlsZSI6ImFwcC9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4uc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGVVcmwgOiAnYXBwL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzIDogWyAnYXBwL2xvZ2luLmNzcycgXSAsXG4gIHByb3ZpZGVycyA6IFsgTG9naW5TZXJ2aWNlIF0gLFxuICBcbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuZGF0YSA6IHN0cmluZyA7XG5lcnJvciA6IGJvb2xlYW4gO1xuXG4gY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuXG5cbiAgICBvblN1Ym1pdCggZGF0YSApIHsgIFxuXG4gICAgY29uc29sZS5sb2coJ3lvdSBzdWJtaXR0ZWQgdmFsdWU6JywgZGF0YVsnbmFtZSddICk7ICBcblxuICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oIGRhdGFbJ25hbWUnXSwgZGF0YVsncGFzc3dvcmQnXSApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAodG9rZW46IGFueSkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9Ib21lJ10pLFxuICAgICAgICAoKSA9PiB7IHRoaXMuZXJyb3IgPSB0cnVlOyB9XG4gICAgICApO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
