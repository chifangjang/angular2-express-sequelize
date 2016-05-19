System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AddMemberService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AddMemberService = (function () {
                function AddMemberService(http) {
                    this.http = http;
                    this.addMemberUrl = '/addMember';
                }
                AddMemberService.prototype.login = function (username, password) {
                    var body = JSON.stringify({ 'name': username, 'password': password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.addMemberUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                AddMemberService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    console.log("print result :" + body.result);
                    if (body.result) {
                        return body.data || {};
                    }
                    else {
                        throw new Error('test this is chifangjang  Bad response status: ' + res.status);
                    }
                };
                AddMemberService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                AddMemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AddMemberService);
                return AddMemberService;
            }());
            exports_1("AddMemberService", AddMemberService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRtZW1iZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUlFLDBCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBR3JCLGlCQUFZLEdBQUcsWUFBWSxDQUFFO2dCQUZ2QyxDQUFDO2dCQUlELGdDQUFLLEdBQUwsVUFBTyxRQUFRLEVBQUUsUUFBUTtvQkFFdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUksVUFBVSxFQUFHLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ3pFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFHLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3lCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUzQyxDQUFDO2dCQUVPLHNDQUFXLEdBQW5CLFVBQW9CLEdBQWE7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hELENBQUM7b0JBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFFLGdCQUFnQixHQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztvQkFDaEQsRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLE1BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO29CQUMzQixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUVBLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0RixDQUFDO2dCQUNDLENBQUM7Z0JBRU8sc0NBQVcsR0FBbkIsVUFBcUIsS0FBVTtvQkFDN0IsZ0ZBQWdGO29CQUNoRixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLGNBQWMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtvQkFDaEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTFDSDtvQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtnQkE0Q2IsdUJBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELCtDQTJDQyxDQUFBOzs7O0FBR0Q7Ozs7RUFJRSIsImZpbGUiOiJhcHAvYWRkbWVtYmVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLFJlc3BvbnNlLFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRNZW1iZXJTZXJ2aWNlIHtcblxuICB0b2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGh0dHA6IEh0dHAgKSB7XG4gIH1cblxuICAgIHByaXZhdGUgYWRkTWVtYmVyVXJsID0gJy9hZGRNZW1iZXInIDtcblxuICBsb2dpbiggdXNlcm5hbWUsIHBhc3N3b3JkICkge1xuXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7ICduYW1lJzogdXNlcm5hbWUgICwgJ3Bhc3N3b3JkJyA6IHBhc3N3b3JkIH0pO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFkZE1lbWJlclVybCAsIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1x0XG5cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBzdGF0dXM6ICcgKyByZXMuc3RhdHVzKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCBcInByaW50IHJlc3VsdCA6XCIrYm9keS5yZXN1bHQgKTtcbmlmKCBib2R5LnJlc3VsdCApe1xuICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XG59ZWxzZXtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZXN0IHRoaXMgaXMgY2hpZmFuZ2phbmcgIEJhZCByZXNwb25zZSBzdGF0dXM6ICcgKyByZXMuc3RhdHVzKTtcbn1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIGxldCBlcnJNc2cgPSBlcnJvci5tZXNzYWdlIHx8ICdTZXJ2ZXIgZXJyb3InO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cblxufVxuXG5cbi8qXG5Db3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
