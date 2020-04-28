(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside/aside.component */ "./src/app/aside/aside.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _movie_favorite_movie_favorite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-favorite/movie-favorite.component */ "./src/app/movie-favorite/movie-favorite.component.ts");








function AppComponent_li_7_span_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", id_r6.name, " ");
} }
function AppComponent_li_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_li_7_span_6_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r6 = ctx.$implicit;
    const movie_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r4.genre_ids.includes(id_r6.id));
} }
function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_7_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.movieService.details = true; })("click", function AppComponent_li_7_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const movie_r4 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.findMovieDetails(movie_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_li_7_span_6_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_7_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const movie_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.movieService.liked(movie_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (ctx_r0.movieService.urlPoster + movie_r4.poster_path).includes(null) ? ctx_r0.imgNotFound : ctx_r0.movieService.urlPoster + movie_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.title || movie_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.movieService.allGenres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" \n                    button\n                    ", ctx_r0.movieService.favoriteMovies.includes(movie_r4.id) ? "like" : "", "  button--liked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.movieService.favoriteMovies.includes(movie_r4.id) ? ctx_r0.movieService.isLiked : ctx_r0.movieService.isUnliked, " ");
} }
function AppComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Prev Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_movie_details_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-details", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AppComponent_app_movie_details_12_Template_app_movie_details_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.movieService.details = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_movie_favorite_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-favorite", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AppComponent_app_movie_favorite_13_Template_app_movie_favorite_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.movieService.favorite = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.home = true;
        this.counter = 1;
        // <!---------------- Обработка изображений -------------->
        // linkImg = this.urlPoster + this.movieImg;
        this.imgNotFound = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDRAlAhlLLqfwKG851D8pat8qeVhLGfMCNP76Y1ziQnhba3eLB&usqp=CAU';
    }
    findMovieDetails(movie) {
        this.movieService.movie = movie;
        this.movieService.movieID = movie.id;
        this.movieService.originalTitle = movie.title;
        this.movieService.moviePoster = movie.backdrop_path;
        this.findMoviesByID(this.movieService.movieID);
        this.findRecommendations(this.movieService.movieID);
        this.movieService.releaseDate = movie.release_date;
        this.movieService.voteAverage = movie.vote_average;
        this.movieService.overview = movie.overview;
    }
    // <!---------------- Найти фильм по ID -------------->
    findMoviesByID(movieID) {
        return fetch('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US')
            .then(response => response.json())
            .then(response => this.movieService.movieGenres = response.genres);
    }
    // <!---------------- найти рекоммендации фильма -------------->
    findRecommendations(movieID) {
        return fetch('https://api.themoviedb.org/3/movie/' + movieID + '/recommendations?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US&page=1')
            .then(response => response.json())
            .then(resp => this.movieService.recommendationsMovies = resp.results);
    }
    // <!---------------- Следущая страница поиска -------------->
    showNext() {
        this.counter++;
        this.movieService
            .showMoreMovies(this.counter)
            .then(res => this.movieService.movies = res.results);
    }
    // <!---------------- Предыдущая страница поиска -------------->
    showPrev() {
        this.counter--;
        this.movieService
            .showMoreMovies(this.counter)
            .then(res => this.movieService.movies = res.results);
    }
    ngOnInit() {
        this.movieService
            .liked(1);
        this.movieService
            .showAllGenres()
            .then(res => this.movieService.allGenres = res.genres);
        this.movieService
            .findMovies()
            .then(res => this.movieService.movies = res.results);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 7, consts: [[1, "app-main"], [1, "app__title"], [1, "movie__items"], ["class", "movie__item ", 4, "ngFor", "ngForOf"], [1, "movie__button__group"], ["class", "button button--primary", 3, "click", 4, "ngIf"], [1, "button", "button--primary", 3, "click"], [3, "close", 4, "ngIf"], [1, "movie__item"], [1, "items__img__wrapper"], ["alt", "", 1, "movie__items__img", 3, "src", "click"], [1, "movie__items__wrapper"], [1, "movie__items__title"], [4, "ngFor", "ngForOf"], [2, "margin-top", "auto", 3, "click"], ["class", "movie__items__genre", 4, "ngIf"], [1, "movie__items__genre"], [3, "close"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Top movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_li_7_Template, 9, 7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_button_9_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.showNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_app_movie_details_12_Template, 1, 0, "app-movie-details", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_movie_favorite_13_Template, 1, 0, "app-movie-favorite", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx.movieService.aside, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieService.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieService.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieService.favorite);
    } }, directives: [_movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_2__["MovieSearchComponent"], _aside_aside_component__WEBPACK_IMPORTED_MODULE_3__["AsideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"], _movie_favorite_movie_favorite_component__WEBPACK_IMPORTED_MODULE_6__["MovieFavoriteComponent"]], styles: [".app__title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 60px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.movie__search[_ngcontent-%COMP%] {\n  display: block;\n  height: 30px;\n  border-radius: 5px 0 0 5px;\n  padding: 4px 10px;\n  width: 400px;\n}\n\n.movie__search__button[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  background-color: #303030;\n  cursor: pointer;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 10px;\n  border-radius: 0 5px 5px 0;\n  text-transform: uppercase;\n}\n\n.movie__items[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  margin: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  flex: 1 0 24%;\n}\n\n.movie__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #212121;\n  justify-content: flex-start;\n  max-width: calc(25% - 50px);\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n\n.movie__item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  transform: scale(1.1);\n}\n\n.movie__item[_ngcontent-%COMP%]   .movie__items__img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  flex: 0 0 40%;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n\n.items__img__wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.movie__items__genre[_ngcontent-%COMP%] {\n  font-style: italic;\n  padding: 10px;\n}\n\n.movie__items__title[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.movie__items__genres[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.movie__items__genre[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n}\n\n.movie__item__btn[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n\n.input__group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.show__more[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin: 0px 20px;\n}\n\n.movie__button__group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.movie__button__group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\n.movie__items__wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RcXGFuZ3VsYXItdGVzdG92b2UtY2hpc3RvdmlrXFxhbmd1bGFyLW1vdmllLWFwaS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxQcm9qZWN0XFxhbmd1bGFyLXRlc3Rvdm9lLWNoaXN0b3Zpa1xcYW5ndWxhci1tb3ZpZS1hcGkvc3JjXFxhc3NldHNcXHV0aWxzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUVFLGNBQUE7RUFDQSxjRVp5QjtFRmF6Qix5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDTEY7O0FEU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0k7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FDUE47O0FEV0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNUSjs7QURhQTtFQUNFLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNWRjs7QURjQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRGNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNYRjs7QURlQTtFQUNFLGdCQUFBO0FDWkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNiRjs7QURlRTtFQUNFLGNBQUE7QUNiSjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvdXRpbHMvdmFycyc7XHJcblxyXG5cclxuLmFwcF9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi5tb3ZpZV9fc2VhcmNoIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubW92aWVfX3NlYXJjaF9fYnV0dG9uIHtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1vdmllX19pdGVtcyB7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXg6IDEgMCAyNCU7XHJcbn1cclxuXHJcblxyXG4ubW92aWVfX2l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXgtd2lkdGg6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vdmllX19pdGVtc19faW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAwIDAgNDAlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW1zX19pbWdfX3dyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb3ZpZV9faXRlbXNfX2dlbnJlIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbi5tb3ZpZV9faXRlbXNfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vdmllX19pdGVtc19fZ2VucmVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5tb3ZpZV9faXRlbXNfX2dlbnJlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLm1vdmllX19pdGVtX19idG4ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5pbnB1dF9fZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zaG93X19tb3JlIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuLm1vdmllX19idXR0b25fX2dyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW92aWVfX2l0ZW1zX193cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbiIsIi5hcHBfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW92aWVfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubW92aWVfX3NlYXJjaF9fYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb3ZpZV9faXRlbXMge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4OiAxIDAgMjQlO1xufVxuXG4ubW92aWVfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1heC13aWR0aDogY2FsYygyNSUgLSA1MHB4KTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3ZpZV9faXRlbTpob3ZlciBpbWcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubW92aWVfX2l0ZW0gLm1vdmllX19pdGVtc19faW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAwIDAgNDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtc19faW1nX193cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vdmllX19pdGVtc19fZ2VucmUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tb3ZpZV9faXRlbXNfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb3ZpZV9faXRlbXNfX2dlbnJlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5tb3ZpZV9faXRlbXNfX2dlbnJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW92aWVfX2l0ZW1fX2J0biB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5pbnB1dF9fZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNob3dfX21vcmUge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5tb3ZpZV9fYnV0dG9uX19ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vdmllX19idXR0b25fX2dyb3VwIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4ubW92aWVfX2l0ZW1zX193cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59IiwiLy8gU2l6ZVxuJGRlc2t0b3BXaWR0aCAgICAgICAgICAgIDogMTI4MHB4O1xuJHNtRGVza3RvcFdpZHRoICAgICAgICAgIDogOTgwcHg7XG4kdGFibGVXaWR0aCAgICAgICAgICAgICAgOiA3NjhweDtcbiRwaG9uZVdpZHRoICAgICAgICAgICAgICA6IDQ4MHB4O1xuJHNtUGhvbmVXaWR0aCAgICAgICAgICAgIDogMzIwcHg7XG5cblxuXG4vLyBNYWluIGNvbG9yXG4kZGVmYXVsdC1jb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xuJHByaW1hcnktY29sb3IgICAgICAgICAgIDogIzQ0NGNlMDtcbiRhY2NlbnQtY29sb3IgICAgICAgICAgICA6ICMzMDMwMzA7XG4kbGlrZWQtY29sb3IgICAgICAgICAgICA6ICM4ZjI3Mjc7XG5cbi8vIE5ldXRyYWwgQ29sb3JcbiRuZXV0cmFsLXByaW1hcnkgICAgICAgICA6ICMzMDMxMzM7XG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aside/aside.component */ "./src/app/aside/aside.component.ts");
/* harmony import */ var _movie_favorite_movie_favorite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-favorite/movie-favorite.component */ "./src/app/movie-favorite/movie-favorite.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_movie_service_client__WEBPACK_IMPORTED_MODULE_5__["MovieServiceClient"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__["MovieSearchComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailsComponent"],
        _aside_aside_component__WEBPACK_IMPORTED_MODULE_7__["AsideComponent"],
        _movie_favorite_movie_favorite_component__WEBPACK_IMPORTED_MODULE_8__["MovieFavoriteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_4__["MovieSearchComponent"],
                    _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailsComponent"],
                    _aside_aside_component__WEBPACK_IMPORTED_MODULE_7__["AsideComponent"],
                    _movie_favorite_movie_favorite_component__WEBPACK_IMPORTED_MODULE_8__["MovieFavoriteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                ],
                providers: [_services_movie_service_client__WEBPACK_IMPORTED_MODULE_5__["MovieServiceClient"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aside/aside.component.ts":
/*!******************************************!*\
  !*** ./src/app/aside/aside.component.ts ***!
  \******************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");



class AsideComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    topMovies() {
        this.movieService
            .findMovies()
            .then(res => this.movieService.movies = res.results);
    }
    ngOnInit() {
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"])); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 8, vars: 3, consts: [[1, "aside__item", 3, "click"], [1, "liked__movies__counter"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_Template_li_click_3_listener() { return ctx.topMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2B50\uFE0F Top movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_Template_li_click_5_listener() { return ctx.movieService.favorite = true; })("click", function AsideComponent_Template_li_click_5_listener() { return ctx.movieService.showFavoriteMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \uD83D\uDC99Liked movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("aside  ", ctx.movieService.aside, "");
    } }, styles: [".aside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  background: #212121;\n  transform: translateX(-200%);\n  transition: all 0.3s ease;\n}\n.aside.true[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  width: 200px;\n  transition: all 0.3s ease;\n}\n.aside__item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNpZGUvQzpcXFByb2plY3RcXGFuZ3VsYXItdGVzdG92b2UtY2hpc3RvdmlrXFxhbmd1bGFyLW1vdmllLWFwaS9zcmNcXGFwcFxcYXNpZGVcXGFzaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hc2lkZS9hc2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hc2lkZS9hc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuXHJcbiAgJi50cnVlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYXNpZGVfX2l0ZW0ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIiwiLmFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmFzaWRlLnRydWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmFzaWRlX19pdGVtIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MovieDetailsComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r2.name, " ");
} }
function MovieDetailsComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recomend_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.movieService.urlPoster + recomend_r3.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recomend_r3.title);
} }
class MovieDetailsComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], outputs: { close: "close" }, decls: 35, vars: 15, consts: [[1, "movie__description"], [1, "movie__description__wrapper"], [1, "description__img__wrapper"], ["alt", "", 1, "movie__description__img", 3, "src"], [1, "btn__group"], [1, "button", "button--primary", 3, "click"], [2, "margin-top", "auto", 3, "click"], [1, "movie__description__content"], [1, "description__content__wrapper"], [1, "description__title"], [1, "description__details"], [1, "description__details__genres"], [1, "description__details__genre"], ["class", "description__details__genre", 4, "ngFor", "ngForOf"], [1, "description__details__date"], [1, "description__overview"], [1, "recommend__movie"], [1, "recommend__movie__title"], [1, "recommend__movie__items"], ["class", "recommend__movie__item", 4, "ngFor", "ngForOf"], [1, "recommend__movie__item"], ["alt", "", 1, "recommend__movie__img", 3, "src"], [1, "movie__item__title"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_5_listener() { return ctx.close.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Back to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_Template_button_click_7_listener() { return ctx.movieService.liked(ctx.movieService.movie.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Genre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MovieDetailsComponent_li_18_Template, 2, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Release Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vote average: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Recommendations Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MovieDetailsComponent_li_33_Template, 4, 2, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.movieService.urlPoster + ctx.movieService.moviePoster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" \n                button\n                ", ctx.movieService.favoriteMovies.includes(ctx.movieService.movie.id) ? "like" : "", "  button--liked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movieService.favoriteMovies.includes(ctx.movieService.movie.id) ? ctx.movieService.isLiked : ctx.movieService.isUnliked, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieService.originalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieService.movieGenres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieService.releaseDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieService.voteAverage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movieService.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](34, 11, ctx.movieService.recommendationsMovies, 0, 6));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".movie__description[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  width: 100%;\n  height: 100vh;\n  padding: 50px;\n  z-index: 50;\n}\n\n.description__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 20px;\n}\n\n.movie__description__content[_ngcontent-%COMP%] {\n  flex: 0 0 33%;\n  background: #303030;\n  padding: 20px;\n}\n\n.description__content__wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #232323;\n}\n\n.movie__description__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.movie__description__img[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  min-height: 300px;\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.6);\n  margin-bottom: 40px;\n}\n\n.description__img__wrapper[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  width: 100%;\n  height: 100%;\n  background: #303030;\n}\n\n.description__details__genres[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.description__details__genre[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-right: 10px;\n}\n\n.description__details__date[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n}\n\n.description__overview[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n\n.btn__group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.recommend__movie[_ngcontent-%COMP%] {\n  background: #303030;\n  padding-right: 20px;\n  flex: 1 0 35%;\n}\n\n.recommend__movie__items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.recommend__movie__item[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  margin-bottom: 20px;\n}\n\n.movie__item__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.recommend__movie__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9DOlxcUHJvamVjdFxcYW5ndWxhci10ZXN0b3ZvZS1jaGlzdG92aWtcXGFuZ3VsYXItbW92aWUtYXBpL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL0M6XFxQcm9qZWN0XFxhbmd1bGFyLXRlc3Rvdm9lLWNoaXN0b3Zpa1xcYW5ndWxhci1tb3ZpZS1hcGkvc3JjXFxhc3NldHNcXHV0aWxzXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllLWRldGFpbHMvQzpcXFByb2plY3RcXGFuZ3VsYXItdGVzdG92b2UtY2hpc3RvdmlrXFxhbmd1bGFyLW1vdmllLWFwaS9zcmNcXGFzc2V0c1xcdXRpbHNcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0ZFLGFBQUE7RUFDQSx1QkFBQTtFREdBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FFREY7O0FGSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZJQTtFQUNFLGFBQUE7RUFDQSxtQkdkeUI7RUhlekIsYUFBQTtBRURGOztBRklBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FFREY7O0FGSUE7RUNsQ0UsYUFBQTtFQUNBLHVCQUFBO0VEbUNBLG1CQUFBO0FFQUY7O0FGR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FFQUY7O0FGR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJHdkN5QjtBRHVDM0I7O0FGR0E7RUFDRSxtQkFBQTtBRUFGOztBRkdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBRUFGOztBRkdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FFQUY7O0FGR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FFQUY7O0FGR0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUVBRjs7QUZJQTtFQUNFLG1CR3JFeUI7RUhzRXpCLG1CQUFBO0VBQ0EsYUFBQTtBRURGOztBRklBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FFREY7O0FGSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBRURGOztBRklBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdXRpbHMvbWl4aW4uc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy91dGlscy92YXJzLnNjc3MnO1xyXG5cclxuLm1vdmllX19kZXNjcmlwdGlvbiB7XHJcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX190aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubW92aWVfX2Rlc2NyaXB0aW9uX19jb250ZW50IHtcclxuICBmbGV4OiAwIDAgMzMlO1xyXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX19jb250ZW50X193cmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigkYWNjZW50LWNvbG9yLCA1JSk7XHJcbn1cclxuXHJcbi5tb3ZpZV9fZGVzY3JpcHRpb25fX3dyYXBwZXIge1xyXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5tb3ZpZV9fZGVzY3JpcHRpb25fX2ltZyB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX19pbWdfX3dyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX19kZXRhaWxzX19nZW5yZXMge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbl9fZGV0YWlsc19fZ2VucmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX19kZXRhaWxzX19kYXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25fX292ZXJ2aWV3IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ0bl9fZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcblxyXG4ucmVjb21tZW5kX19tb3ZpZSB7XHJcbiAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZsZXg6IDEgMCAzNSU7XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRfX21vdmllX19pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJlY29tbWVuZF9fbW92aWVfX2l0ZW0ge1xyXG4gIGZsZXg6IDAgMCA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1vdmllX19pdGVtX190aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjb21tZW5kX19tb3ZpZV9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iLCJAbWl4aW4gZmxleC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWFsaWduLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGp1c3RpZnktY29udGVudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuQG1peGluIGJ0biB7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG59XHJcbiIsIi5tb3ZpZV9fZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA1MHB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmRlc2NyaXB0aW9uX190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1vdmllX19kZXNjcmlwdGlvbl9fY29udGVudCB7XG4gIGZsZXg6IDAgMCAzMyU7XG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZXNjcmlwdGlvbl9fY29udGVudF9fd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XG59XG5cbi5tb3ZpZV9fZGVzY3JpcHRpb25fX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1vdmllX19kZXNjcmlwdGlvbl9faW1nIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5kZXNjcmlwdGlvbl9faW1nX193cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xufVxuXG4uZGVzY3JpcHRpb25fX2RldGFpbHNfX2dlbnJlcyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kZXNjcmlwdGlvbl9fZGV0YWlsc19fZ2VucmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGVzY3JpcHRpb25fX2RldGFpbHNfX2RhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRlc2NyaXB0aW9uX19vdmVydmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5fX2dyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5yZWNvbW1lbmRfX21vdmllIHtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZmxleDogMSAwIDM1JTtcbn1cblxuLnJlY29tbWVuZF9fbW92aWVfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlY29tbWVuZF9fbW92aWVfX2l0ZW0ge1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW92aWVfX2l0ZW1fX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY29tbWVuZF9fbW92aWVfX3RpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi8vIFNpemVcbiRkZXNrdG9wV2lkdGggICAgICAgICAgICA6IDEyODBweDtcbiRzbURlc2t0b3BXaWR0aCAgICAgICAgICA6IDk4MHB4O1xuJHRhYmxlV2lkdGggICAgICAgICAgICAgIDogNzY4cHg7XG4kcGhvbmVXaWR0aCAgICAgICAgICAgICAgOiA0ODBweDtcbiRzbVBob25lV2lkdGggICAgICAgICAgICA6IDMyMHB4O1xuXG5cblxuLy8gTWFpbiBjb2xvclxuJGRlZmF1bHQtY29sb3IgICAgICAgICAgIDogI2ZmZmZmZjtcbiRwcmltYXJ5LWNvbG9yICAgICAgICAgICA6ICM0NDRjZTA7XG4kYWNjZW50LWNvbG9yICAgICAgICAgICAgOiAjMzAzMDMwO1xuJGxpa2VkLWNvbG9yICAgICAgICAgICAgOiAjOGYyNzI3O1xuXG4vLyBOZXV0cmFsIENvbG9yXG4kbmV1dHJhbC1wcmltYXJ5ICAgICAgICAgOiAjMzAzMTMzO1xuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-details',
                templateUrl: './movie-details.component.html',
                styleUrls: ['./movie-details.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-favorite/movie-favorite.component.ts":
/*!************************************************************!*\
  !*** ./src/app/movie-favorite/movie-favorite.component.ts ***!
  \************************************************************/
/*! exports provided: MovieFavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFavoriteComponent", function() { return MovieFavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MovieFavoriteComponent_li_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieFavoriteComponent_li_4_span_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.movieService.liked(movie_r1.id); })("click", function MovieFavoriteComponent_li_4_span_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.remove(movie_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.movieService.urlPoster + movie_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
} }
function MovieFavoriteComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieFavoriteComponent_li_4_span_1_Template, 5, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r1.id > 0);
} }
class MovieFavoriteComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    remove(id) {
        this.movieService.favoriteMoviesList = this.movieService.favoriteMoviesList.filter(i => i.id !== id);
        console.log(this.movieService.favoriteMoviesList);
    }
    ngOnInit() {
    }
}
MovieFavoriteComponent.ɵfac = function MovieFavoriteComponent_Factory(t) { return new (t || MovieFavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"])); };
MovieFavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieFavoriteComponent, selectors: [["app-movie-favorite"]], outputs: { close: "close" }, decls: 8, vars: 6, consts: [[1, "movie__favorite"], [1, "movie__favorite__title"], [1, "movie__favorite__items"], ["class", "movie__favorite__item", 4, "ngFor", "ngForOf"], [1, "button", "button--favorite", 3, "click"], [1, "movie__favorite__item"], [4, "ngIf"], ["alt", "", 1, "movie__favorite__img", 3, "src"], [1, "movie__fovorite__title"], [1, "favorite__item__close", 3, "click"]], template: function MovieFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieFavoriteComponent_li_4_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieFavoriteComponent_Template_button_click_6_listener() { return ctx.movieService.favoriteMoviesList = []; })("click", function MovieFavoriteComponent_Template_button_click_6_listener() { return ctx.close.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Back to search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My top list ", ctx.movieService.favoriteMoviesList.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, ctx.movieService.favoriteMoviesList, 0, 10));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".movie__favorite[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 100vh;\n  width: 100%;\n  background: #000;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px 60px;\n  z-index: 50;\n}\n\n.movie__favorite__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.movie__favorite__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.movie__favorite__item[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  margin-bottom: 20px;\n  text-decoration: underline;\n  position: relative;\n}\n\n.favorite__item__close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 70px;\n  top: 0;\n  width: 15px;\n  height: 15px;\n  background: url('close.png');\n  background-repeat: no-repeat;\n  background-size: 15px;\n  cursor: pointer;\n}\n\n.movie__favorite__img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 100px;\n  height: auto;\n}\n\n.movie__fovorite__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZmF2b3JpdGUvQzpcXFByb2plY3RcXGFuZ3VsYXItdGVzdG92b2UtY2hpc3RvdmlrXFxhbmd1bGFyLW1vdmllLWFwaS9zcmNcXGFwcFxcbW92aWUtZmF2b3JpdGVcXG1vdmllLWZhdm9yaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1mYXZvcml0ZS9tb3ZpZS1mYXZvcml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZmF2b3JpdGUvbW92aWUtZmF2b3JpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvdXRpbHMvdmFycyc7XHJcblxyXG4ubW92aWVfX2Zhdm9yaXRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgei1pbmRleDogNTA7XHJcbn1cclxuXHJcbi5tb3ZpZV9fZmF2b3JpdGVfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubW92aWVfX2Zhdm9yaXRlX19pdGVtcyB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3ZpZV9fZmF2b3JpdGVfX2l0ZW0ge1xyXG4gIGZsZXg6IDAgMCAyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZmF2b3JpdGVfX2l0ZW1fX2Nsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDcwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvY2xvc2UucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW92aWVfX2Zhdm9yaXRlX19pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tb3ZpZV9fZm92b3JpdGVfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIubW92aWVfX2Zhdm9yaXRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA0MHB4IDYwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4ubW92aWVfX2Zhdm9yaXRlX190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb3ZpZV9fZmF2b3JpdGVfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vdmllX19mYXZvcml0ZV9faXRlbSB7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mYXZvcml0ZV9faXRlbV9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3MHB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvY2xvc2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vdmllX19mYXZvcml0ZV9faW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1vdmllX19mb3Zvcml0ZV9fdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieFavoriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-favorite',
                templateUrl: './movie-favorite.component.html',
                styleUrls: ['./movie-favorite.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"] }]; }, { close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-search/movie-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.ts ***!
  \********************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class MovieSearchComponent {
    // aside = this.movieService.aside;
    constructor(movieService) {
        this.movieService = movieService;
        this.movieTitleSearch = '';
    }
    searchForMovie(movieTitle) {
        if (this.movieTitleSearch.trim()) {
            this.movieTitleSearch = '';
            this.movieService
                .findMoviesByTitle(movieTitle)
                .then(res => this.movieService.movies = res.results)
                .then(res => console.log(this.movieService.movies));
        }
    }
    ngOnInit() {
    }
}
MovieSearchComponent.ɵfac = function MovieSearchComponent_Factory(t) { return new (t || MovieSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"])); };
MovieSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieSearchComponent, selectors: [["app-movie-search"]], decls: 9, vars: 1, consts: [[1, "header"], [1, "burger", 3, "click"], [1, "input__group"], ["placeholder", "Search movies...", 1, "movie__search", 3, "ngModel", "ngModelChange"], [1, "movie__search__button", 3, "click"]], template: function MovieSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieSearchComponent_Template_span_click_1_listener() { return ctx.movieService.aside = !ctx.movieService.aside; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MovieSearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.movieTitleSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieSearchComponent_Template_button_click_7_listener() { return ctx.searchForMovie(ctx.movieTitleSearch); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movieTitleSearch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".input__group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.movie__search[_ngcontent-%COMP%] {\n  display: block;\n  height: 30px;\n  border-radius: 5px 0 0 5px;\n  padding: 4px 10px;\n  width: 400px;\n}\n\n.movie__search__button[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffffff;\n  background-color: #303030;\n  cursor: pointer;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 10px;\n  border-radius: 0 5px 5px 0;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtc2VhcmNoL0M6XFxQcm9qZWN0XFxhbmd1bGFyLXRlc3Rvdm9lLWNoaXN0b3Zpa1xcYW5ndWxhci1tb3ZpZS1hcGkvc3JjXFxhcHBcXG1vdmllLXNlYXJjaFxcbW92aWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1zZWFyY2gvQzpcXFByb2plY3RcXGFuZ3VsYXItdGVzdG92b2UtY2hpc3RvdmlrXFxhbmd1bGFyLW1vdmllLWFwaS9zcmNcXGFzc2V0c1xcdXRpbHNcXG1peGluLnNjc3MiLCJzcmMvYXBwL21vdmllLXNlYXJjaC9tb3ZpZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllLXNlYXJjaC9DOlxcUHJvamVjdFxcYW5ndWxhci10ZXN0b3ZvZS1jaGlzdG92aWtcXGFuZ3VsYXItbW92aWUtYXBpL3NyY1xcYXNzZXRzXFx1dGlsc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VDSEUsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FGS0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FFRkY7O0FGS0E7RUFFRSxjQUFBO0VBQ0EsY0dUeUI7RUhVekIseUJHUnlCO0VIU3pCLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBRUhGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtc2VhcmNoL21vdmllLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy91dGlscy92YXJzJztcclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3V0aWxzL21peGluJztcclxuXHJcblxyXG4uaW5wdXRfX2dyb3VwIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xyXG59XHJcblxyXG4ubW92aWVfX3NlYXJjaCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLm1vdmllX19zZWFyY2hfX2J1dHRvbiB7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yIDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIkBtaXhpbiBmbGV4LWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtYWxpZ24tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDoganVzdGlmeS1jb250ZW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gYnRuIHtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbn1cclxuIiwiLmlucHV0X19ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW92aWVfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubW92aWVfX3NlYXJjaF9fYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59IiwiLy8gU2l6ZVxuJGRlc2t0b3BXaWR0aCAgICAgICAgICAgIDogMTI4MHB4O1xuJHNtRGVza3RvcFdpZHRoICAgICAgICAgIDogOTgwcHg7XG4kdGFibGVXaWR0aCAgICAgICAgICAgICAgOiA3NjhweDtcbiRwaG9uZVdpZHRoICAgICAgICAgICAgICA6IDQ4MHB4O1xuJHNtUGhvbmVXaWR0aCAgICAgICAgICAgIDogMzIwcHg7XG5cblxuXG4vLyBNYWluIGNvbG9yXG4kZGVmYXVsdC1jb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xuJHByaW1hcnktY29sb3IgICAgICAgICAgIDogIzQ0NGNlMDtcbiRhY2NlbnQtY29sb3IgICAgICAgICAgICA6ICMzMDMwMzA7XG4kbGlrZWQtY29sb3IgICAgICAgICAgICA6ICM4ZjI3Mjc7XG5cbi8vIE5ldXRyYWwgQ29sb3JcbiRuZXV0cmFsLXByaW1hcnkgICAgICAgICA6ICMzMDMxMzM7XG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-search',
                templateUrl: './movie-search.component.html',
                styleUrls: ['./movie-search.component.scss']
            }]
    }], function () { return [{ type: _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/movie.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/movie.service.client.ts ***!
  \**************************************************/
/*! exports provided: MovieServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceClient", function() { return MovieServiceClient; });
class MovieServiceClient {
    constructor() {
        this.movies = [];
        this.urlPoster = "https://image.tmdb.org/t/p/w500";
        this.recommendationsMovies = [];
        this.favoriteMovies = [];
        this.favoriteMoviesList = [];
        this.details = false;
        this.favorite = false;
        this.isUnliked = 'Like this movie💙';
        this.isLiked = 'Liked💥';
        this.aside = true;
    }
    findMovies() {
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US&page=1')
            .then(response => response.json());
    }
    findMoviesByTitle(title) {
        return fetch('https://api.themoviedb.org/3/search/multi?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US&query= ' + title)
            .then(response => response.json());
    }
    showMoreMovies(counter) {
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US&page= ' + counter + ' ')
            .then(response => response.json());
    }
    showAllGenres() {
        return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US')
            .then(response => response.json());
    }
    getMovie() {
        const moviesLocalStorage = localStorage.getItem('myFavoriteMovies');
        if (moviesLocalStorage !== null) {
            return JSON.parse(moviesLocalStorage);
        }
        return [];
    }
    liked(movieID) {
        let movies = this.getMovie();
        let pushMovie = false;
        const index = movies.indexOf(movieID);
        if (index === -1) {
            movies.push(movieID);
            pushMovie = true;
        }
        else {
            movies.splice(index, 1);
        }
        localStorage.setItem('myFavoriteMovies', JSON.stringify(movies));
        this.favoriteMovies = movies;
        return { pushMovie, movies };
    }
    findMoviesByID(movieID) {
        return fetch('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=08c7be451907cb09e42a1d808fe6f5d0&language=en-US')
            .then(response => response.json());
    }
    showFavoriteMovies() {
        for (let i = 0; i < this.favoriteMovies.length; i += 1) {
            this.findMoviesByID(this.favoriteMovies[i])
                .then(res => this.favoriteMoviesList.push(res))
                .then(res => console.log(this.favoriteMoviesList));
        }
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\angular-testovoe-chistovik\angular-movie-api\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map