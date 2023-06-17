(self["webpackChunkcook_love"] = self["webpackChunkcook_love"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AboutComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(params);
    });
  }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 27,
  vars: 0,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/about"], [1, "d-flex", "about_us"], [1, "d-flex", "justify-content-center", "ps-5"], [1, "my_img", "ms-5"], ["src", "assets/images/bg_4.jpg", "alt", ""], [1, "my_img"], ["src", "assets/images/bg_6.jpg", "alt", ""], [1, "pe-5", "me-5", "pt-4", "mt-5"], [1, "sub_title", "ps-2"], [1, "title"], [1, "my_text"], [1, "my_btn"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home > ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This is our secrets");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Perfect Ingredients");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.my_img[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 450px;\n}\n\n.my_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQU1GIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnXzUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcbi5tZW51X2xpc3QgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubXlfaW1nIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG4ubXlfaW1nIGltZ3tcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _chef_chef_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef/chef.component */ 4923);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ 8716);
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation/reservation.component */ 1674);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _fag_fag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fag/fag.component */ 6468);
/* harmony import */ var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-detail/blog-detail.component */ 2670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'chef',
  component: _chef_chef_component__WEBPACK_IMPORTED_MODULE_2__.ChefComponent
}, {
  path: 'menu',
  component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent
}, {
  path: 'reservation',
  component: _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__.ReservationComponent
}, {
  path: 'blog',
  component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent
}, {
  path: 'fag',
  component: _fag_fag_component__WEBPACK_IMPORTED_MODULE_7__.FagComponent
}, {
  path: 'blog-detail',
  component: _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_8__.BlogDetailComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
  constructor() {
    this.title = 'cook-love';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _chef_chef_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chef/chef.component */ 4923);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reservation/reservation.component */ 1674);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog.component */ 8716);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _fag_fag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fag/fag.component */ 6468);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ 446);
/* harmony import */ var _dialog_accept_data_accept_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/accept-data/accept-data.component */ 9811);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material-moment-adapter */ 7118);
/* harmony import */ var _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blog-detail/blog-detail.component */ 2670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);























const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD.MM.YYYY' // this is how your date will be parsed from Input
  },

  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_16__.provideNgxMask)(), {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MAT_DATE_LOCALE]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MAT_DATE_FORMATS,
    useValue: MY_DATE_FORMAT
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _material_module__WEBPACK_IMPORTED_MODULE_11__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent, _chef_chef_component__WEBPACK_IMPORTED_MODULE_6__.ChefComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__.MenuComponent, _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_8__.ReservationComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__.BlogComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__.ContactComponent, _dialog_accept_data_accept_data_component__WEBPACK_IMPORTED_MODULE_13__.AcceptDataComponent, _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_14__.BlogDetailComponent, _fag_fag_component__WEBPACK_IMPORTED_MODULE_12__.FagComponent, _blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_14__.BlogDetailComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, ngx_mask__WEBPACK_IMPORTED_MODULE_16__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_16__.NgxMaskPipe, _material_module__WEBPACK_IMPORTED_MODULE_11__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 2670:
/*!******************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailComponent": () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class BlogDetailComponent {}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) {
  return new (t || BlogDetailComponent)();
};
BlogDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogDetailComponent,
  selectors: [["app-blog-detail"]],
  decls: 17,
  vars: 0,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/chef"], [1, "container"], [1, "sub_title", "pt-5"], [1, "title", "pb-2"], [1, "blog_text", "pb-5"]],
  template: function BlogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BLOG DETAIL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blog >");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Blog Detail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Meat Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos tempore placeat sequi maxime ea dolorum repudiandae veritatis consectetur iure cupiditate, mollitia quisquam corrupti voluptate voluptates, cum sed similique culpa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam doloribus iure quibusdam! Ipsam tempora earum odio suscipit excepturi! Quisquam iure repellat voluptas tempore! Voluptatibus voluptates explicabo accusamus aspernatur incidunt voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime a modi, alias numquam veritatis qui distinctio laborum. Ea nisi minus illo quis nemo dicta numquam quae iste? Pariatur, harum corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta in maiores fugiat tempora itaque molestias veritatis sit eius, odit provident ipsa molestiae officia mollitia qui eveniet et blanditiis error? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti veritatis corporis. Eos doloribus ad inventore, exercitationem minima alias suscipit quia eveniet pariatur eum natus adipisci est odio! Consectetur, impedit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque beatae corrupti hic, voluptas, laboriosam quidem sint vel earum dignissimos repellendus porro unde cupiditate, voluptate facilis maiores maxime eius impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo, distinctio commodi dolor totam harum in, cum a recusandae possimus officiis atque maxime ut nobis quas beatae et nihil! Quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ab ratione, iusto doloremque iste eveniet corrupti libero tenetur sit quaerat. Suscipit voluptates accusantium repellendus facere? Impedit, magnam. Dolore, doloremque veniam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus illo sint, id magni corrupti quaerat soluta, architecto aliquam aut temporibus itaque quo minus? Eos nulla autem ex tempora voluptas.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('plate.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.title[_ngcontent-%COMP%], .sub_title[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.blog_text[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLDZCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhdGUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcbi5tZW51X2xpc3QgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udGl0bGUsLnN1Yl90aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi5ibG9nX3RleHR7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);



class BlogComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  decls: 89,
  vars: 0,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/blog"], [1, "container", "ps-5", "pe-5", "pt-5"], [1, "row"], [1, "col-lg-4", "pt-5", "pb-5"], [1, "my_card"], [1, "example-card"], ["mat-card-image", "", "src", "assets/images/plate.jpg", "alt", "Photo of a Shiba Inu"], [1, "pb-3"], ["routerLink", "/blog-detail", 1, "my_btn", "ms-2", "mt-3", "mb-3"], ["mat-card-image", "", "src", "assets/images/image_2.jpg", "alt", "Photo of a Shiba Inu"], [1, "my_btn", "ms-2", "mt-3", "mb-3"], ["mat-card-image", "", "src", "assets/images/image_3.jpg", "alt", "Photo of a Shiba Inu"], [1, "container", "ps-5", "pe-5"], [1, "col-lg-4", "pb-5"], ["mat-card-image", "", "src", "assets/images/image_4.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "assets/images/image_5.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "assets/images/image_6.jpg", "alt", "Photo of a Shiba Inu"]],
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BLOG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home >");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header", 10)(17, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content")(20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions")(23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6)(26, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header", 10)(29, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content")(32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-actions")(35, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6)(38, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header", 10)(41, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content")(44, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-actions")(47, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15)(50, "div", 5)(51, "div", 16)(52, "div", 7)(53, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-header", 10)(56, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-content")(59, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-actions")(62, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16)(65, "div", 7)(66, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-header", 10)(69, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-content")(72, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-actions")(75, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16)(78, "mat-card", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-header", 10)(81, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "June 12, 2023 ADMIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-content")(84, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Even the all-powerful Pointing has no control about the blind texts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-actions")(87, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.example-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 250px !important;\n}\n\n.mat-mdc-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usd0JBQUE7QUFNRjs7QUFKQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnXzUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcbi5tZW51X2xpc3QgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc3ViX3RpdGxlLC50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCBpbWd7XHJcbiAgaGVpZ2h0OiAyNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1tZGMtY2FyZC1jb250ZW50IGgze1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4923:
/*!****************************************!*\
  !*** ./src/app/chef/chef.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefComponent": () => (/* binding */ ChefComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ChefComponent {}
ChefComponent.ɵfac = function ChefComponent_Factory(t) {
  return new (t || ChefComponent)();
};
ChefComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ChefComponent,
  selectors: [["app-chef"]],
  decls: 111,
  vars: 0,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/chef"], [1, "container", "ps-5", "pe-5"], [1, "row"], [1, "sub_title", "pt-5"], [1, "title", "pt-1"], [1, "col-lg-3", "pt-5", "pb-5"], [1, "my_card"], [1, "example-card"], ["mat-card-image", "", "src", "assets/images/chef-4.jpg", "alt", "Photo of a Shiba Inu"], [1, "pb-3"], ["mat-card-image", "", "src", "assets/images/chef-2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "assets/images/chef-3.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "assets/images/chef-1.jpg", "alt", "Photo of a Shiba Inu"], [1, "col-lg-3", "pb-5"], ["mat-card-image", "", "src", "../../assets/images/chef-4.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/images/chef-2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/images/chef-3.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "../../assets/images/chef-1.jpg", "alt", "Photo of a Shiba Inu"]],
  template: function ChefComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MASTER CHEF");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home >");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Chef");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Chef");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our Master Chef");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header", 12)(22, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "John Gustavo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CEO, Co Founder");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content")(27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8)(30, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-header", 12)(33, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Michelle Fraulen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Head Chef");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content")(38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8)(41, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-header", 12)(44, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Alfred Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Chef Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-content")(49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8)(52, "div", 9)(53, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-header", 12)(56, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Antonio Santibanez");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Chef Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card-content")(61, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4)(64, "div", 5)(65, "div", 16)(66, "div", 9)(67, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-header", 12)(70, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "John Gustavo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CEO, Co Founder");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-content")(75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16)(78, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-header", 12)(81, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Michelle Fraulen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Head Chef");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-content")(86, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16)(89, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card-header", 12)(92, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Alfred Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Chef Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-content")(97, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 16)(100, "div", 9)(101, "mat-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-card-header", 12)(104, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Antonio Santibanez");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Chef Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card-content")(109, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " I am an ambitious workaholic, but apart from that, pretty simple person. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlZi9jaGVmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtBQUtGIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnXzUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcbi5tZW51X2xpc3QgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc3ViX3RpdGxlLC50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);








function ContactComponent_mat_hint_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_hint_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_hint_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Please provide a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_hint_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_mat_hint_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Your message can't exceed 250 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContactComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.contactForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(250)]]
    });
  }
  ngOnInit() {
    console.log(this.contactForm.value);
  }
  Send() {
    console.log(this.contactForm.value);
  }
  test() {
    console.log(this.contactForm);
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 67,
  vars: 6,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/contact"], [1, "contact", "container", "pt-5"], [1, "pb-2"], [1, "con-info", "d-flex", "justify-content-between", "pb-5"], [1, "container", "pb-5"], [1, "row"], [1, "col-lg-7"], ["src", "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230", "width", "100%", "height", "315", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "col-lg-5"], [1, "d-flex", "flex-column", 3, "formGroup", "ngSubmit"], ["appearance", "outline", "color", "accent"], ["formControlName", "name", "matInput", "", "placeholder", "Please enter your name"], ["matSuffix", ""], [4, "ngIf"], ["formControlName", "email", "matInput", "", "placeholder", "Please enter your email"], ["formControlName", "message", "matInput", "", "placeholder", "Ex. It makes me feel...", 3, "input"], ["type", "submit", 1, "my_btn", "pt-2", "pb-2"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTACT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home >");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "div")(15, "p")(16, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ADDRESS:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 198 West 21th Street, Suite 721 New York NY 10016");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "p")(21, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PHONE:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " + 1235 2355 98");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div")(25, "p")(26, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "EMAIL:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " info@cookLove.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div")(30, "p")(31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "WEBSITE:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " https:/cook-love.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7)(35, "div", 8)(36, "div", 9)(37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "iframe", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11)(40, "div")(41, "form", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_41_listener() {
        return ctx.Send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 13)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContactComponent_mat_hint_48_Template, 2, 0, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 13)(50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ContactComponent_mat_hint_55_Template, 2, 0, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContactComponent_mat_hint_56_Template, 2, 0, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 13)(58, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ContactComponent_Template_textarea_input_60_listener() {
        return ctx.test();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " text_fields");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ContactComponent_mat_hint_63_Template, 2, 0, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContactComponent_mat_hint_64_Template, 2, 0, "mat-hint", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["name"].errors == null ? null : ctx.contactForm.controls["name"].errors["required"]) && (ctx.contactForm.controls["name"].dirty && ctx.contactForm.controls["name"].invalid || ctx.contactForm.controls["name"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["required"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["email"].errors == null ? null : ctx.contactForm.controls["email"].errors["email"]) && (ctx.contactForm.controls["email"].dirty && ctx.contactForm.controls["email"].invalid || ctx.contactForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["required"]) && (ctx.contactForm.controls["message"].dirty && ctx.contactForm.controls["message"].invalid || ctx.contactForm.controls["message"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls["message"].errors == null ? null : ctx.contactForm.controls["message"].errors["maxlength"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.con-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #e52b34;\n  color: white;\n  padding: 60px 35px;\n  border-radius: 8px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n  .cdk-text-field-autofill-monitored {\n  caret-color: #e52b34;\n}\n\n.mat-mdc-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7O0VBRUUsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvR0FBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBSEE7RUFDRSxXQUFBO0FBTUY7O0FBSkEsV0FBQTtBQUNBO0VBQ0Usb0JBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0FBT0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfNS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWVudV9saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG4ubWVudV9saXN0IGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNlNTJiMzQ7XHJcbn1cclxuLm1lbnVfbGlzdCBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWJfdGl0bGUsXHJcbi50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi5jb24taW5mbyBkaXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MmIzNDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNjBweCAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhY3QgaDF7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyogQm9yZGVyICovXHJcbjo6bmctZGVlcCAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkIHtcclxuICBjYXJldC1jb2xvcjogI2U1MmIzNDtcclxufVxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZCAgdGV4dGFyZWF7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9811:
/*!*************************************************************!*\
  !*** ./src/app/dialog/accept-data/accept-data.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcceptDataComponent": () => (/* binding */ AcceptDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class AcceptDataComponent {
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    this.reservationInfo = this.data.reservationInfo;
  }
}
AcceptDataComponent.ɵfac = function AcceptDataComponent_Factory(t) {
  return new (t || AcceptDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
AcceptDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AcceptDataComponent,
  selectors: [["app-accept-data"]],
  decls: 39,
  vars: 9,
  consts: [[1, "p-2"], [1, "d-flex", "justify-content-between"], ["mat-dialog-title", ""], [1, "close_btn", "mt-3"], ["mat-dialog-close", ""], [1, "fa-solid", "fa-xmark"], [1, "list-unstyled", "ps-4", "pt-3"], ["align", "end"], ["mat-dialog-close", "", 1, "my_btn"]],
  template: function AcceptDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reservation Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6)(10, "li")(11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Check-in: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Time: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Guest: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-dialog-actions", 7)(37, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reservationInfo.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reservationInfo.email, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reservationInfo.phone, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 6, ctx.reservationInfo.date, "dd.MM.YYYY"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reservationInfo.time, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reservationInfo.guest, "");
    }
  },
  dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: [".mdc-dialog__title[_ngcontent-%COMP%] {\n  color: #e52b34;\n  font-size: 40px !important;\n  font-family: \"Dancing Script\", cursive;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-size: 16px;\n  color: #666;\n}\n\n.close_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  color: #e52b34 !important;\n  font-size: 28px;\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9nL2FjY2VwdC1kYXRhL2FjY2VwdC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7QUFHRiIsInNvdXJjZXNDb250ZW50IjpbIi5tZGMtZGlhbG9nX190aXRsZSB7XHJcbiAgY29sb3I6ICNlNTJiMzQ7XHJcbiAgZm9udC1zaXplOjQwcHghaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG59XHJcbnVsIGxpe1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG4uY2xvc2VfYnRuIGJ1dHRvbntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogI2U1MmIzNCFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6468:
/*!**************************************!*\
  !*** ./src/app/fag/fag.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FagComponent": () => (/* binding */ FagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class FagComponent {
  constructor() {
    this.panelOpenState = false;
  }
}
FagComponent.ɵfac = function FagComponent_Factory(t) {
  return new (t || FagComponent)();
};
FagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FagComponent,
  selectors: [["app-fag"]],
  decls: 83,
  vars: 0,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/fag"], [1, "container-fluid", "ps-5", "pe-5"], [1, "row"], [1, "sub_title", "pt-5"], [1, "title", "pt-1"], [1, "mt-4"], ["hideToggle", ""], [3, "opened", "closed"], [1, "fa-solid", "fa-utensils"], [1, "mt-3"], [1, "mt-3", "mb-5"]],
  template: function FagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FAG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home >");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Fag");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fag");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Frequently asked questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-accordion", 8)(18, "mat-expansion-panel", 9)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_21_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_21_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel-header")(23, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " What is your favorite place to \u201Ceat out\u201D? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam placeat, quibusdam eos nisi incidunt dolor fugiat vitae dolorem consequuntur maiores eligendi eius velit labore qui. Dolore quae cum odit cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam voluptatum dolor. Quod sed voluptatum consequatur facere velit! Ipsa tempora beatae dolores eius aut facilis, aperiam ad odit explicabo. Facilis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sapiente nobis, qui corporis dolor modi perferendis asperiores possimus consectetur ex! Et quam itaque recusandae quibusdam adipisci voluptas accusamus rem velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt reiciendis veritatis, aliquid sapiente repellat repudiandae. Eos iste numquam quia adipisci nihil, impedit tempore suscipit aliquam ut ullam saepe explicabo culpa? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-accordion", 12)(29, "mat-expansion-panel", 9)(30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_32_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_32_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel-header")(34, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " What do you call the person who cooks food in a restaurant? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui error ab libero, doloremque ipsum asperiores, voluptatem nesciunt in similique omnis laborum voluptatum incidunt est, iste officia rem hic suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate ducimus nisi asperiores eveniet maiores, nobis itaque quia vel consectetur ex voluptatibus culpa ab dolor ipsum deleniti molestias! Quas, nulla. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis dignissimos, itaque accusamus error quo. Rem, cupiditate quidem alias sunt cum architecto molestiae impedit, ab delectus reprehenderit voluptate laudantium praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde quae quos aliquid reprehenderit, ab soluta voluptatem quia sunt possimus, veritatis sed iste a et quisquam nostrum ex, maiores rem?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-accordion", 12)(40, "mat-expansion-panel", 9)(41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_43_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_43_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-expansion-panel-header")(45, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " What do you call the person who serves food in a restaurant? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur adipisci recusandae aliquam est aperiam. Reiciendis omnis officia ad, fugit minus sit! Quos maxime saepe vero rerum. Officiis perspiciatis animi accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quasi tempore harum cupiditate, maxime aut qui possimus cumque quos. Impedit saepe quo quos nobis culpa ea repellat dolor accusantium nulla? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-accordion", 12)(51, "mat-expansion-panel", 9)(52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_54_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_54_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel-header")(56, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Do you ever tip in restaurants? If so, how much do you tip? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam aperiam eius eligendi nihil officia iusto exercitationem non obcaecati unde possimus suscipit fugit quos, fuga ullam excepturi perferendis modi beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero illo, numquam tempore aspernatur vitae unde? Dolores possimus quidem eveniet odit delectus, esse enim quisquam laudantium necessitatibus totam eum nostrum commodi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempore reiciendis, earum molestias a vitae facilis ullam laboriosam consectetur rerum quis aut. Ut, nam eum cum soluta quos dolore repellendus! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-accordion", 12)(62, "mat-expansion-panel", 9)(63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_65_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_65_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel-header")(67, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Have you ever sent a meal back or complained in a restaurant? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore saepe maiores, non eum nulla, neque dolorem error atque odio assumenda placeat vero iusto voluptas facilis architecto eos quae? Minima? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur commodi assumenda aperiam cum labore sunt rerum, maxime ullam repellendus, mollitia a autem, praesentium aliquam in amet qui nesciunt. Quod, illo!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-accordion", 13)(73, "mat-expansion-panel", 9)(74, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "This is the primary content of the panel.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FagComponent_Template_mat_expansion_panel_opened_76_listener() {
        return ctx.panelOpenState = true;
      })("closed", function FagComponent_Template_mat_expansion_panel_closed_76_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-expansion-panel-header")(78, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " What is the worst meal you have ever had in a restaurant? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore saepe maiores, non eum nulla, neque dolorem error atque odio assumenda placeat vero iusto voluptas facilis architecto eos quae? Minima? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur commodi assumenda aperiam cum labore sunt rerum, maxime ullam repellendus, mollitia a autem, praesentium aliquam in amet qui nesciunt. Quod, illo!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelTitle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .mat-expansion-panel-body i {\n  color: #e52b34 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmFnL2ZhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0FBTUYiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfNS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWVudV9saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG4ubWVudV9saXN0IGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNlNTJiMzQ7XHJcbn1cclxuLm1lbnVfbGlzdCBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWJfdGl0bGUsLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSBpe1xyXG4gIGNvbG9yOiAjZTUyYjM0IWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 68,
  vars: 0,
  consts: [[1, "advertice"], [1, "pb-4"], [1, "container-fluid"], [1, "card"], [1, "row", "mb-4"], [1, "col-md-4", "col-sm-11", "col-xs-11"], [1, "footer-text", "pull-left"], [1, "d-flex"], [1, "fs-4", "frs_title"], [1, "scd_title"], [1, "fa-regular", "fa-heart"], [1, "card-text"], [1, "social", "mt-2", "mb-3"], [1, "fa", "fa-facebook-official", "fa-lg"], [1, "fa", "fa-instagram", "fa-lg"], [1, "fa", "fa-twitter", "fa-lg"], [1, "fa", "fa-linkedin-square", "fa-lg"], [1, "fa", "fa-facebook"], [1, "col-md-2", "col-sm-1", "col-xs-1", "mb-2"], [1, "col-md-2", "col-sm-4", "col-xs-4"], [1, "heading"], [1, "divider", "mb-4"], [1, "row", 2, "font-size", "10px"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "pull-left"], [1, "fa", "fa-copyright"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We Make Delicious & Nutritious Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BOOK A TABLE NOW");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13)(20, "i", 14)(21, "i", 15)(22, "i", 16)(23, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19)(26, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul")(29, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "IT Consulting ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DevOps & Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19)(38, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Industries");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 11)(41, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Public Sector");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Smart Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Retail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19)(50, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 11)(53, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Join Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22)(63, "div", 23)(64, "div", 24)(65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 2023 By Turkana");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".advertice[_ngcontent-%COMP%] {\n  background-color: #E52B34;\n  text-align: center;\n  padding: 60px;\n}\n\n.advertice[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 60px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n\n.advertice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: 1px solid white !important;\n  color: white !important;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 14px !important;\n  padding: 10px 20px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  background-color: #E52B34 !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  border-radius: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 4% 7%;\n  color: #646771;\n  background-color: #16151a;\n  border-radius: 0px !important;\n  line-height: 35px;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-width: 3px;\n}\n\n.social[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 1%;\n  font-size: 15px;\n}\n\n.social[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.policy[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-family: \"Titillium Web\", sans-serif;\n  color: #E52B34;\n  padding-bottom: 10px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(189, 196, 203, 0.5);\n}\n\n.frs_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px !important;\n  color: white !important;\n  font-weight: bold;\n}\n\n.scd_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  color: #E52B34 !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7QUFJSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0o7O0FBSkE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBT0o7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUpBO0VBQ0ksaUJBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBT0o7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUpBO0VBQ0ksWUFBQTtBQU9KOztBQUpBO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFKQTtFQUNJLDhDQUFBO0FBT0o7O0FBSkE7RUFDSSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQU9KIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdmVydGljZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTJCMzQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG59XHJcbi5hZHZlcnRpY2UgaDF7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFkdmVydGljZSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuLmNvcHlyaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTJCMzQhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBwYWRkaW5nOjBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzogNCUgNyU7XHJcbiAgICBjb2xvcjogIzY0Njc3MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE1MWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCA+bGl7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbnVsID4gbGk6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxufVxyXG5cclxuLnNvY2lhbCA+IGl7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNvY2lhbCA+IGk6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4ucG9saWN5ID4gZGl2e1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI0U1MkIzNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDE4OSwgMTk2LCAyMDMsIDAuNSk7O1xyXG59XHJcblxyXG4uZnJzX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjZF90aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI0U1MkIzNCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return {
    exact: true
  };
};
class HeaderComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(params);
    });
  }
  onWindowScroll() {
    let element = document.querySelector('.my_navbar');
    console.log(element.clientHeight);
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 68,
  vars: 16,
  consts: [[1, "my_navbar", "w-100", 3, "scroll"], [1, "info_header"], [1, "container", "d-flex", "flex-wrap", "justify-content-between", "pt-3"], [1, "my_info", "d-flex", "justify-content-center"], [1, "d-flex", "work_info"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-instagram"], [1, "fa-solid", "fa-basketball"], [1, "scd_header", "py-3", "mb-4"], [1, "container", "d-flex", "flex-wrap", "justify-content-between"], ["href", "/", 1, "d-flex", "align-items-center", "mb-3", "mb-lg-0", "me-lg-auto", "text-decoration-none"], ["width", "40", "height", "32", 1, "bi", "me-2"], [0, "xlink", "href", "#bootstrap"], [1, "fs-4", "frs_title"], [1, "scd_title"], [1, "fa-regular", "fa-heart"], [1, "nav", "me-auto", "pt-1"], [1, "nav-item"], ["routerLink", "home", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "chef", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "menu", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "reservation", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "blog", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "fag", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"], ["routerLink", "contact", "routerLinkActive", "router-link-active", 1, "nav-link", "px-2", 3, "routerLinkActiveOptions"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_div_scroll_0_listener() {
        return ctx.onWindowScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1)(2, "div", 2)(3, "div")(4, "ul", 3)(5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Phone no:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+00 1234 567");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "or email us:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "emailsample@email.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "ul", 4)(15, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mon-Fri");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "/ 9:00-21:00, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sat - Sun");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "/ 10:00-20:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "header", 9)(32, "div", 10)(33, "div")(34, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "use", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Love");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div")(43, "ul", 17)(44, "li", 18)(45, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "HOME");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 18)(48, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 18)(51, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "CHEF");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 18)(54, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "MENU");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 18)(57, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "RESERVATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 18)(60, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "BLOG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 18)(63, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "FAG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 18)(66, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "CONTACT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".my_navbar[_ngcontent-%COMP%] {\n  position: fixed !important;\n  z-index: 1000;\n  color: white;\n  padding: 0px !important;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: #e52b34 !important;\n  font-weight: bold !important;\n}\n\n\n.info_header[_ngcontent-%COMP%] {\n  width: 77%;\n  margin: auto;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none !important;\n  padding: 0px !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0px 2px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0px 5px !important;\n}\n\n.my_info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd), .work_info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #b8aca2 !important;\n}\n\n\n.scd_header[_ngcontent-%COMP%] {\n  background-color: RGBA(0, 0, 0, 0.6) !important;\n  color: white;\n  width: 77%;\n  margin: auto;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.frs_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px !important;\n  color: white !important;\n  font-weight: bold;\n}\n\n.scd_title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  color: #e52b34 !important;\n  font-weight: bold;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .scd_header[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background-color: #16151a !important;\n  transition: 0.4s;\n  padding: 20px 0px !important;\n}\n.navbar-inverse[_ngcontent-%COMP%]   .info_header[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUFBLGNBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FBTUY7O0FBSkE7O0VBRUUseUJBQUE7QUFPRjs7QUFKQSxjQUFBO0FBQ0E7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQVNGOztBQU5BO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQVNGOztBQUxFO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFRSjtBQU5FO0VBQ0UsYUFBQTtBQVFKIiwic291cmNlc0NvbnRlbnQiOlsiLm15X25hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNlNTJiMzQgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XHJcbn1cclxuLyppbmZvIGhlYWRlciovXHJcbi5pbmZvX2hlYWRlciB7XHJcbiAgd2lkdGg6IDc3JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbnVsIGxpIHtcclxuICBwYWRkaW5nOiAwcHggMnB4O1xyXG59XHJcbnVsIGxpIGkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15X2luZm8gbGk6bnRoLWNoaWxkKG9kZCksXHJcbi53b3JrX2luZm8gbGkge1xyXG4gIGNvbG9yOiAjYjhhY2EyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qbWFpbiBoZWFkZXIqL1xyXG4uc2NkX2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCQSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA3NyU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG51bCBsaSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxudWwgbGkgYTpob3ZlcntcclxuICBjb2xvcjogI2U1MmIzNDtcclxufVxyXG4uZnJzX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjZF90aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjZTUyYjM0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXZiYXItaW52ZXJzZSB7XHJcbiAgLnNjZF9oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE1MWEhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbmZvX2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 28,
  vars: 0,
  consts: [[1, "my_bg"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/bg1.png", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/bg2.png", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "title1", "w-100"], [1, "fa-regular", "fa-heart"], [1, "pt-5"], [1, "d-flex", "justify-content-around", "pt-5", "mt-3"], [1, "line", "mt-4", "me-3"], [1, "pt-3"], [1, "line", "mt-4", "ms-3"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COOK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "LOVE RESTAURANT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cooking Since");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 880px;\n}\n\n.my_bg[_ngcontent-%COMP%] {\n  position: relative !important;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n}\n\n.title1[_ngcontent-%COMP%] {\n  position: absolute !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 35%;\n  z-index: 2;\n  text-align: center;\n}\n\n.title1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 20px;\n  font-family: \"Roboto\", sans-serif;\n  border: 2px solid white;\n  padding: 10px 30px;\n}\n\n.title1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white !important;\n  font-family: \"Dancing Script\", cursive;\n  font-size: 150px;\n}\n\n.title1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #E52B34 !important;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n\n.title1[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: #E52B34;\n  width: 100px;\n  height: 2px;\n}\n\n.title1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #E52B34 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0FBTUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg4MHB4O1xyXG59XHJcblxyXG4ubXlfYmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50aXRsZTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlMSBwe1xyXG4gICAgY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbn1cclxuLnRpdGxlMSBoMXtcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxufVxyXG4udGl0bGUxIHNwYW57XHJcbiAgICBjb2xvcjogI0U1MkIzNCFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGl0bGUxIC5saW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MkIzNDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG59XHJcbi50aXRsZTEgaXtcclxuICAgIGNvbG9yOiAjRTUyQjM0IWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule],
  imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_23__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_21__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule]
  });
})();

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






function MenuComponent_a_247_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_247_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.ViewMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MenuComponent_a_474_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_474_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.ViewMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MenuComponent_a_701_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_701_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.ViewMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MenuComponent_a_928_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_928_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.ViewMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MenuComponent_div_938_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41)(1, "div")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.price, "");
  }
}
function MenuComponent_div_944_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.price, "");
  }
}
const _c0 = function (a0) {
  return {
    display: a0
  };
};
class MenuComponent {
  constructor() {
    this.showElement = false;
    // items = ['Chicken Burger', 'Fried Rice', 'Meat', '12" Pizza', 'Sezar salad'];
    this.basket = [{
      name: 'Chicken Burger',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Fried Rice',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Meat',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: '12" Pizza',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }];
    this.items = [{
      name: 'Salad',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Double Burger',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Spicy Pizza',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Sushi',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }, {
      name: 'Noodle',
      content: 'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      price: "24$"
    }];
  }
  ViewMore() {
    this.showElement = true;
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)();
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 945,
  vars: 32,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/menu"], ["id", "our_menu", 1, "pt-5", "pb-5"], [1, "container", "w-100"], [1, "row"], [1, "sub_title", "pt-5"], [1, "title", "pt-1"], [1, "col-lg-12"], [1, "page_title", "text-center", "mb-4"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "Breakfast"], [1, "row", "pt-5"], [1, "col-md-6"], [1, "single_menu"], ["src", "https://i.imgur.com/kbpceNv.jpg", "alt", "burger"], [1, "menu_content"], ["src", "https://i.imgur.com/lYKUORL.jpg", "alt", "black coffee"], ["src", "https://i.imgur.com/AXAHrf6.jpg", "alt", "fried rice"], ["src", "https://i.imgur.com/YkDi8Nb.jpg", "alt", "meat"], ["src", "https://i.imgur.com/TAq7lDR.jpg", "alt", "burger"], ["src", "https://i.imgur.com/Aowufa1.jpg", "alt", "pizza"], ["src", "https://i.imgur.com/DJlmZDJ.jpg", "alt", "salad"], ["src", "https://i.imgur.com/knnQm7e.jpg", "alt", "green tea"], [1, "col-md-6", "more", 3, "ngStyle"], ["class", "my_btn btn btn-danger", 3, "click", 4, "ngIf"], ["label", "Launch"], ["label", "Dinner"], ["label", "Drink"], ["label", "List"], [1, "container-fluid", "drag", "pt-5"], ["cdkDropListGroup", ""], [1, "example-container", "w-50"], [1, "me-3"], [1, "fa-solid", "fa-hand-holding-heart"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box d-flex justify-content-between", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-crown"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "my_btn", "btn", "btn-danger", 3, "click"], ["cdkDrag", "", 1, "example-box", "d-flex", "justify-content-between"], [1, "fa-solid", "fa-utensils"], [1, "pt-4", "ps-3"], ["cdkDrag", "", 1, "example-box"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MENU");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home > ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4)(11, "div", 5)(12, "div", 6)(13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Specialties");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Our Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6)(20, "mat-tab-group", 11)(21, "mat-tab", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17)(36, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17)(45, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17)(54, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14)(61, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17)(64, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17)(73, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17)(82, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17)(91, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6)(98, "div", 14)(99, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 17)(102, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "12\" Pizza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "$35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 17)(111, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Salad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 17)(120, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "green tea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "$15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 17)(129, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 14)(136, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 17)(139, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 17)(148, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 17)(157, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 17)(166, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 6)(173, "div", 25)(174, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 17)(177, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 17)(186, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 17)(195, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 17)(204, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 25)(211, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 17)(214, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 17)(223, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 17)(232, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 17)(241, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](247, MenuComponent_a_247_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "mat-tab", 27)(249, "div", 13)(250, "div", 14)(251, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 17)(254, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 17)(263, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 17)(272, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 17)(281, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 14)(288, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 17)(291, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 17)(300, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 17)(309, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 17)(318, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 6)(325, "div", 14)(326, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 17)(329, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "12\" Pizza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "$35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 17)(338, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Salad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 17)(347, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "green tea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "$15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 17)(356, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 14)(363, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 17)(366, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 17)(375, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 17)(384, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 17)(393, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 6)(400, "div", 25)(401, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 17)(404, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 17)(413, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 17)(422, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 17)(431, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 25)(438, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 17)(441, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 17)(450, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 17)(459, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 17)(468, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](474, MenuComponent_a_474_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "mat-tab", 28)(476, "div", 13)(477, "div", 14)(478, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "div", 17)(481, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 17)(490, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 17)(499, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 17)(508, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "div", 14)(515, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 17)(518, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "div", 17)(527, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 17)(536, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 17)(545, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 6)(552, "div", 14)(553, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 17)(556, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "12\" Pizza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "$35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "div", 17)(565, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Salad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "div", 17)(574, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "green tea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "$15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "div", 17)(583, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "div", 14)(590, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "div", 17)(593, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "div", 17)(602, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "div", 17)(611, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](618, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 17)(620, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 6)(627, "div", 25)(628, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](629, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 17)(631, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](638, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 17)(640, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](647, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 17)(649, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](656, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "div", 17)(658, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 25)(665, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "div", 17)(668, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](675, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "div", 17)(677, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 17)(686, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](693, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 17)(695, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](701, MenuComponent_a_701_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "mat-tab", 29)(703, "div", 13)(704, "div", 14)(705, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](706, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "div", 17)(708, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](715, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 17)(717, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](724, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "div", 17)(726, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 17)(735, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "div", 14)(742, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "div", 17)(745, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](752, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "div", 17)(754, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](761, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "div", 17)(763, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](770, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "div", 17)(772, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "div", 6)(779, "div", 14)(780, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](781, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "div", 17)(783, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "12\" Pizza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "$35");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "div", 17)(792, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "Salad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](799, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div", 17)(801, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "green tea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "$15");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](808, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 17)(810, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "div", 14)(817, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](818, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "div", 17)(820, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](827, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "div", 17)(829, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div", 17)(838, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](845, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "div", 17)(847, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "div", 6)(854, "div", 25)(855, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](856, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "div", 17)(858, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](865, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "div", 17)(867, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](874, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "div", 17)(876, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](883, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "div", 17)(885, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "div", 25)(892, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](893, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "div", 17)(895, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "Chicken Burger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](902, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "div", 17)(904, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "Black coffee ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "$20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "div", 17)(913, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "Fried Rice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "$45");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](920, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 17)(922, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "meat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "$24");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, " Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](928, MenuComponent_a_928_Template, 2, 0, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "mat-tab", 30)(930, "div", 31)(931, "div", 32)(932, "div", 33)(933, "div", 34)(934, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](935, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, " New Foods ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function MenuComponent_Template_div_cdkDropListDropped_937_listener($event) {
        return ctx.drop($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](938, MenuComponent_div_938_Template, 10, 3, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "div", 33)(940, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](941, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, " Best Foods");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function MenuComponent_Template_div_cdkDropListDropped_943_listener($event) {
        return ctx.drop($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](944, MenuComponent_div_944_Template, 10, 3, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](173);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showElement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](153);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showElement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](153);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showElement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](153);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.showElement ? "block" : "none"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showElement);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.basket);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.basket);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__.CdkDrag],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n.menu_tab[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  justify-content: center;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #e52b34;\n  color: #fff;\n  font-weight: 700;\n  border: 1px solid #e52b34;\n  text-transform: capitalize;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #e52b34;\n  color: #fff;\n  border: 1px solid #e52b34;\n}\n\n.single_menu[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 75px;\n  transition: 0.3s;\n}\n\n.single_menu[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);\n}\n\n.single_menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 33%;\n  position: absolute;\n  height: 140px;\n  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\n  transition: 0.3s;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n\n.menu_content[_ngcontent-%COMP%] {\n  padding-left: 220px;\n}\n\n.menu_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 300;\n  border-bottom: 1px dashed #e52b34;\n  line-height: 2;\n  text-transform: capitalize;\n}\n\n.menu_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 800;\n  float: right;\n  font-style: italic;\n  color: #e52b34;\n}\n\n.menu_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n\n.my_btn.btn.btn-danger[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  width: 140px;\n}\n\n  .mat-mdc-tab-body-content {\n  overflow-x: hidden !important;\n}\n\n.more[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%] {\n  color: #e52b34;\n  border-color: #e52b34;\n}\n\n  .mdc-tab__ripple::before, .mat-mdc-tab[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-header-pagination[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mdc-tab-link[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #e52b34;\n  border-color: #e52b34;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e52b34;\n}\n\n.example-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 24px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.example-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: \"Dancing Script\", cursive;\n  color: #e52b34;\n}\n\n.example-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  color: #e52b34;\n}\n\n.example-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  font-style: italic;\n}\n\n.drag[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7O0VBRUUsa0JBQUE7QUFLRjs7QUFIQSxjQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBRUUsK0RBQUE7QUFXRjs7QUFUQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSw4REFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsbUJBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBY0Y7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQWlCRjs7QUFmQTtFQUNFLDZCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGFBQUE7QUFtQkY7O0FBaEJBLG9DQUFBO0FBQ0E7O0VBS0UsY0FBQTtFQUNBLHFCQUFBO0FBZ0JGOztBQWRBOzs7O0VBSUUseUJBQUE7RUFDQSxxQkFBQTtBQWlCRjs7QUFkQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWRBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBaUJGOztBQWRBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBaUJGOztBQVpBO0VBQ0UsVUFBQTtBQWVGOztBQVpBO0VBQ0Usc0RBQUE7QUFlRjs7QUFaQTtFQUNFLFlBQUE7QUFlRjs7QUFaQTtFQUNFLHNEQUFBO0FBZUY7O0FBWEE7RUFDRSxjQUFBO0FBY0Y7O0FBWEE7RUFDRSxzQ0FBQTtFQUNBLGVBQUE7QUFjRjs7QUFaQTtFQUNFLFdBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFpQkY7O0FBZkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBa0JGOztBQWZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQW1CRiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfNS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWVudV9saXN0IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogI2U1MmIzNDtcclxufVxyXG4ubWVudV9saXN0IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWJfdGl0bGUsXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qTWVudSBzdGFydHMqL1xyXG4ubWVudV90YWIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZTUyYjM0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MmIzNDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlNTJiMzQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MmIzNDtcclxufVxyXG4uc2luZ2xlX21lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLnNpbmdsZV9tZW51OmhvdmVyIGltZyB7XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCwgMTAwJSA1MCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAsIDEwMCUgNTAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcbi5zaW5nbGVfbWVudSBpbWcge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDc1JSAwJSwgMTAwJSA1MCUsIDc1JSAxMDAlLCAwJSAxMDAlKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5tZW51X2NvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMjIwcHg7XHJcbn1cclxuLm1lbnVfY29udGVudCBoNCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTUyYjM0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5tZW51X2NvbnRlbnQgaDQgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogI2U1MmIzNDtcclxufVxyXG4ubWVudV9jb250ZW50IHAge1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLm15X2J0bi5idG4uYnRuLWRhbmdlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LW1kYy10YWItYm9keS1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4ubW9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU3R5bGVzIGZvciB0aGUgYWN0aXZlIHRhYiBsYWJlbCAqL1xyXG46Om5nLWRlZXBcclxuICAubWF0LW1kYy10YWI6bm90KC5tYXQtbWRjLXRhYi1kaXNhYmxlZCkubWRjLXRhYi0tYWN0aXZlXHJcbiAgLm1kYy10YWJfX3RleHQtbGFiZWwsXHJcbi5tYXQtbWRjLXRhYi1saW5rOm5vdCgubWF0LW1kYy10YWItZGlzYWJsZWQpLm1kYy10YWItLWFjdGl2ZVxyXG4gIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcclxuICBjb2xvcjogI2U1MmIzNDtcclxuICBib3JkZXItY29sb3I6ICNlNTJiMzQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tZGMtdGFiX19yaXBwbGU6OmJlZm9yZSxcclxuLm1hdC1tZGMtdGFiIC5tYXQtcmlwcGxlLWVsZW1lbnQsXHJcbi5tYXQtbWRjLXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXJpcHBsZS1lbGVtZW50LFxyXG4ubWF0LW1kYy10YWItbGluayAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyYjM0O1xyXG4gIGJvcmRlci1jb2xvcjogI2U1MmIzNDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciBpe1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWJveCBoMXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICBjb2xvcjojZTUyYjM0O1xyXG59XHJcbi5leGFtcGxlLWJveCBoM3tcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6I2U1MmIzNDtcclxuXHJcbn1cclxuLmV4YW1wbGUtYm94IHB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5kcmFne1xyXG4gIHBhZGRpbmctbGVmdDogMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1674:
/*!******************************************************!*\
  !*** ./src/app/reservation/reservation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationComponent": () => (/* binding */ ReservationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dialog_accept_data_accept_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dialog/accept-data/accept-data.component */ 9811);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ 446);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);















function ReservationComponent_mat_hint_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Please provide a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This field should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReservationComponent_mat_hint_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Your message can't exceed 250 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ReservationComponent {
  constructor(formBuilder, dialog) {
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.reservationForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      guest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(250)]]
    });
  }
  ngOnInit() {
    console.log(this.reservationForm.value);
  }
  openDialog() {
    const dialogRef = this.dialog.open(_dialog_accept_data_accept_data_component__WEBPACK_IMPORTED_MODULE_0__.AcceptDataComponent, {
      width: '500px',
      position: {
        top: '250px'
      },
      data: {
        reservationInfo: this.reservationForm.value
      },
      scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.NoopScrollStrategy()
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  Send() {
    console.log(this.reservationForm.value);
  }
}
ReservationComponent.ɵfac = function ReservationComponent_Factory(t) {
  return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
};
ReservationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReservationComponent,
  selectors: [["app-reservation"]],
  decls: 146,
  vars: 13,
  consts: [[1, "about", "d-flex", "flex-column", "align-items-center", "justify-content-end"], [1, "menu_list", "d-flex"], ["routerLink", "/home"], ["routerLink", "/reservation"], [1, "container", "pt-5", "pb-5"], [1, "mini_title"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-column", 3, "formGroup", "ngSubmit"], [1, "row"], ["appearance", "outline", "color", "accent", 1, "col-12", "col-md-6", "col-lg-4"], ["formControlName", "name", "matInput", "", "placeholder", "Please enter your name"], ["matSuffix", ""], [4, "ngIf"], ["formControlName", "email", "matInput", "", "placeholder", "Please enter your email"], ["prefix", "+994", "mask", "(00) 000 00 00", "matInput", "", "id", "profile-email", "formControlName", "phone", "placeholder", "Please enter your phone number"], ["matInput", "", "formControlName", "date", "matInput", "", "placeholder", "Please enter your check-in date", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["picker1", ""], ["formControlName", "time"], ["value", "10:00"], ["value", "10:30"], ["value", "11:00"], ["value", "11:30"], ["value", "12:00"], ["value", "12:30"], ["value", "13:00"], ["value", "13:30"], ["value", "14:00"], ["value", "14:30"], ["value", "15:00"], ["value", "15:30"], ["value", "16:00"], ["value", "16:30"], ["value", "17:00"], ["value", "17:30"], ["value", "18:00"], ["value", "18:30"], ["value", "19:00"], ["value", "19:30"], ["value", "20:00"], ["value", "20:30"], ["value", "21:00"], ["value", "21:30"], ["value", "22:00"], ["value", "22:30"], ["value", "23:00"], ["formControlName", "guest"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["appearance", "outline", "color", "accent", 1, "col-12"], ["formControlName", "message", "matInput", "", "placeholder", "Ex. It makes me feel..."], ["align", "end", 1, "w-100"], [1, "my_btn", 3, "disabled", "click"]],
  template: function ReservationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "RESERVATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 1)(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home >");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0Reservation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "BOOK YOUR TABLE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ReservationComponent_Template_form_ngSubmit_15_listener() {
        return ctx.Send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "mat-form-field", 9)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ReservationComponent_mat_hint_23_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 9)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ReservationComponent_mat_hint_30_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ReservationComponent_mat_hint_31_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 9)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "phone_iphone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ReservationComponent_mat_hint_38_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 9)(40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Check-in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 15)(43, "mat-datepicker-toggle", 16)(44, "mat-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ReservationComponent_mat_hint_46_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 9)(48, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Choose a time");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-select", 18)(51, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "10:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "10:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "11:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "11:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "12:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "12:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "13:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "13:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "14:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "14:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "15:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "15:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "16:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "16:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "17:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "17:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "18:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "mat-option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "18:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "19:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "19:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "20:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "20:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "21:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "21:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-option", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "22:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-option", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "22:30");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-option", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "23:00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "access_time");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, ReservationComponent_mat_hint_107_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-form-field", 9)(109, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Guest");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-select", 46)(112, "mat-option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-option", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "mat-option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mat-option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "mat-option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-option", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "mat-option", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "9");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "person_add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, ReservationComponent_mat_hint_134_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-form-field", 57)(136, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "textarea", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " text_fields");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, ReservationComponent_mat_hint_141_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, ReservationComponent_mat_hint_142_Template, 2, 0, "mat-hint", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 59)(144, "button", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReservationComponent_Template_button_click_144_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reservationForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["name"].errors == null ? null : ctx.reservationForm.controls["name"].errors["required"]) && (ctx.reservationForm.controls["name"].dirty && ctx.reservationForm.controls["name"].invalid || ctx.reservationForm.controls["name"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["email"].errors == null ? null : ctx.reservationForm.controls["email"].errors["required"]) && (ctx.reservationForm.controls["email"].dirty && ctx.reservationForm.controls["email"].invalid || ctx.reservationForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["email"].errors == null ? null : ctx.reservationForm.controls["email"].errors["email"]) && (ctx.reservationForm.controls["email"].dirty && ctx.reservationForm.controls["email"].invalid || ctx.reservationForm.controls["email"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["phone"].errors == null ? null : ctx.reservationForm.controls["phone"].errors["required"]) && (ctx.reservationForm.controls["phone"].dirty && ctx.reservationForm.controls["phone"].invalid || ctx.reservationForm.controls["phone"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["date"].errors == null ? null : ctx.reservationForm.controls["date"].errors["required"]) && (ctx.reservationForm.controls["date"].dirty && ctx.reservationForm.controls["date"].invalid || ctx.reservationForm.controls["date"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["time"].errors == null ? null : ctx.reservationForm.controls["time"].errors["required"]) && (ctx.reservationForm.controls["time"].dirty && ctx.reservationForm.controls["time"].invalid || ctx.reservationForm.controls["time"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["guest"].errors == null ? null : ctx.reservationForm.controls["guest"].errors["required"]) && (ctx.reservationForm.controls["guest"].dirty && ctx.reservationForm.controls["guest"].invalid || ctx.reservationForm.controls["guest"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.reservationForm.controls["message"].errors == null ? null : ctx.reservationForm.controls["message"].errors["required"]) && (ctx.reservationForm.controls["message"].dirty && ctx.reservationForm.controls["message"].invalid || ctx.reservationForm.controls["message"].touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reservationForm.controls["message"].errors == null ? null : ctx.reservationForm.controls["message"].errors["maxlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.reservationForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_mask__WEBPACK_IMPORTED_MODULE_6__.NgxMaskDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggle, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".about[_ngcontent-%COMP%] {\n  background-image: url('bg_5.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 600px;\n  color: white;\n}\n\n.menu_list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px !important;\n}\n\n.menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e52b34;\n}\n\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n}\n\n.sub_title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mini_title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSw0QkFBQTtBQU1GIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnXzUuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1lbnVfbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVfbGlzdCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjZTUyYjM0O1xyXG59XHJcbi5tZW51X2xpc3QgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc3ViX3RpdGxlLC50aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1pbmlfdGl0bGUgaDF7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map