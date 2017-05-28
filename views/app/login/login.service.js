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
    var LoginService;
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
            LoginService = (function () {
                function LoginService(http) {
                    this.http = http;
                    this.loginUrl = '/login';
                }
                LoginService.prototype.login = function (username, password) {
                    var body = JSON.stringify({ 'name': 'noProbelm9999', 'password': password });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.loginUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                    /*
                        return this.http.get(this.loginUrl+'?name='+username+'&password='+password)
                                        .map(this.extractData)
                                        .catch(this.handleError);
                    */
                };
                LoginService.prototype.extractData = function (res) {
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
                LoginService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBSUUsc0JBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFHckIsYUFBUSxHQUFHLFFBQVEsQ0FBRTtnQkFGL0IsQ0FBQztnQkFJRCw0QkFBSyxHQUFMLFVBQU8sUUFBUSxFQUFFLFFBQVE7b0JBRXZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUMsZUFBZSxFQUFHLFVBQVUsRUFBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRyxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFHN0M7Ozs7c0JBSUU7Z0JBQ0EsQ0FBQztnQkFFTyxrQ0FBVyxHQUFuQixVQUFvQixHQUFhO29CQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUVELElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxnQkFBZ0IsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7b0JBQ2hELEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxNQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztvQkFDM0IsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFFQSxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEYsQ0FBQztnQkFDQyxDQUFDO2dCQUVPLGtDQUFXLEdBQW5CLFVBQXFCLEtBQVU7b0JBQzdCLGdGQUFnRjtvQkFDaEYsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxjQUFjLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7b0JBQ2hELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFoREg7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBa0RiLG1CQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCx1Q0FpREMsQ0FBQTs7OztBQUdEOzs7O0VBSUUiLCJmaWxlIjoiYXBwL2xvZ2luLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLFJlc3BvbnNlLFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgaHR0cDogSHR0cCApIHtcbiAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpblVybCA9ICcvbG9naW4nIDtcblxuICBsb2dpbiggdXNlcm5hbWUsIHBhc3N3b3JkICkge1xuXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7ICduYW1lJzonbm9Qcm9iZWxtOTk5OScgLCAncGFzc3dvcmQnIDogcGFzc3dvcmQgfSk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMubG9naW5VcmwgLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcdFxuXG5cbi8qXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5sb2dpblVybCsnP25hbWU9Jyt1c2VybmFtZSsnJnBhc3N3b3JkPScrcGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuKi9cbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGlmIChyZXMuc3RhdHVzIDwgMjAwIHx8IHJlcy5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBzdGF0dXM6ICcgKyByZXMuc3RhdHVzKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCBcInByaW50IHJlc3VsdCA6XCIrYm9keS5yZXN1bHQgKTtcbmlmKCBib2R5LnJlc3VsdCApe1xuICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XG59ZWxzZXtcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0ZXN0IHRoaXMgaXMgY2hpZmFuZ2phbmcgIEJhZCByZXNwb25zZSBzdGF0dXM6ICcgKyByZXMuc3RhdHVzKTtcbn1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIGxldCBlcnJNc2cgPSBlcnJvci5tZXNzYWdlIHx8ICdTZXJ2ZXIgZXJyb3InO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cblxufVxuXG5cbi8qXG5Db3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
