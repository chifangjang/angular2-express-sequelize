System.register(['@angular/core', '@angular/router-deprecated', './addmember.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, addmember_service_1;
    var AddMemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (addmember_service_1_1) {
                addmember_service_1 = addmember_service_1_1;
            }],
        execute: function() {
            AddMemberComponent = (function () {
                function AddMemberComponent(addMemberService, router) {
                    this.addMemberService = addMemberService;
                    this.router = router;
                }
                AddMemberComponent.prototype.onSubmit = function (data) {
                    var _this = this;
                    console.log('you submitted value:', data['name']);
                    this.addMemberService.login(data['name'], data['password'])
                        .subscribe(function (token) { return _this.router.navigate(['../Home']); }, function () { _this.error = true; });
                };
                AddMemberComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/addmember.component.html',
                        styleUrls: ['app/login.css'],
                        providers: [addmember_service_1.AddMemberService],
                    }), 
                    __metadata('design:paramtypes', [addmember_service_1.AddMemberService, router_deprecated_1.Router])
                ], AddMemberComponent);
                return AddMemberComponent;
            }());
            exports_1("AddMemberComponent", AddMemberComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRNZW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtDLDRCQUNXLGdCQUFrQyxFQUNsQyxNQUFjO29CQURkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQ3BCLENBQUM7Z0JBR0gscUNBQVEsR0FBUixVQUFVLElBQUk7b0JBQWQsaUJBU0M7b0JBUEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQztvQkFFakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFFO3lCQUM1RCxTQUFTLENBQ1IsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLEVBQ2pELGNBQVEsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQzdCLENBQUM7Z0JBQ0osQ0FBQztnQkE3Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFHLDhCQUE4Qjt3QkFDNUMsU0FBUyxFQUFHLENBQUUsZUFBZSxDQUFFO3dCQUMvQixTQUFTLEVBQUcsQ0FBRSxvQ0FBZ0IsQ0FBRTtxQkFFakMsQ0FBQzs7c0NBQUE7Z0JBeUJGLHlCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCxtREFzQkMsQ0FBQSIsImZpbGUiOiJhcHAvYWRkTWVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5pbXBvcnQgeyBOZ0Zvcm0gfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJzsgICAgICAgICAgICAgICAgICAgXG5pbXBvcnQgeyBBZGRNZW1iZXJTZXJ2aWNlIH0gZnJvbSAnLi9hZGRtZW1iZXIuc2VydmljZSc7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbkBDb21wb25lbnQoeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHNlbGVjdG9yOiAnbXktYXBwJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICB0ZW1wbGF0ZVVybCA6ICdhcHAvYWRkbWVtYmVyLmNvbXBvbmVudC5odG1sJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHN0eWxlVXJscyA6IFsgJ2FwcC9sb2dpbi5jc3MnIF0gLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwcm92aWRlcnMgOiBbIEFkZE1lbWJlclNlcnZpY2UgXSAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxufSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFkZE1lbWJlckNvbXBvbmVudCB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZGF0YSA6IHN0cmluZyA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmVycm9yIDogYm9vbGVhbiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuIGNvbnN0cnVjdG9yKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBwcml2YXRlIGFkZE1lbWJlclNlcnZpY2U6IEFkZE1lbWJlclNlcnZpY2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICkgeyB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgb25TdWJtaXQoIGRhdGEgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBjb25zb2xlLmxvZygneW91IHN1Ym1pdHRlZCB2YWx1ZTonLCBkYXRhWyduYW1lJ10gKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgdGhpcy5hZGRNZW1iZXJTZXJ2aWNlLmxvZ2luKCBkYXRhWyduYW1lJ10sIGRhdGFbJ3Bhc3N3b3JkJ10gKSAgICAgICAgXG4gICAgICAuc3Vic2NyaWJlKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAodG9rZW46IGFueSkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9Ib21lJ10pLCAgICAgICAgICAgICBcbiAgICAgICAgKCkgPT4geyB0aGlzLmVycm9yID0gdHJ1ZTsgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
