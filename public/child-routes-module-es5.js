function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-routes-module"], {
  /***/
  "./src/app/guards/admin.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/admin.guard.ts ***!
    \***************************************/

  /*! exports provided: AdminGuard */

  /***/
  function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(usuarioService, router) {
        _classCallCheck(this, AdminGuard);

        this.usuarioService = usuarioService;
        this.router = router;
      }

      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.usuarioService.role === 'ADMIN_ROLE') {
            return true;
          } else {
            this.router.navigateByUrl('/dashboard');
            return false;
          } // return (this.usuarioService.role === 'ADMIN_ROLE') ? true : false;

        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/child-routes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/child-routes.module.ts ***!
    \**********************************************/

  /*! exports provided: ChildRoutesModule */

  /***/
  function srcAppPagesChildRoutesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildRoutesModule", function () {
      return ChildRoutesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/app/pages/progress/progress.component.ts");
    /* harmony import */


    var _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./grafica1/grafica1.component */
    "./src/app/pages/grafica1/grafica1.component.ts");
    /* harmony import */


    var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-settings/account-settings.component */
    "./src/app/pages/account-settings/account-settings.component.ts");
    /* harmony import */


    var _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./promesas/promesas.component */
    "./src/app/pages/promesas/promesas.component.ts");
    /* harmony import */


    var _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rxjs/rxjs.component */
    "./src/app/pages/rxjs/rxjs.component.ts");
    /* harmony import */


    var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./perfil/perfil.component */
    "./src/app/pages/perfil/perfil.component.ts");
    /* harmony import */


    var _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mantenimientos/usuarios/usuarios.component */
    "./src/app/pages/mantenimientos/usuarios/usuarios.component.ts");
    /* harmony import */


    var _mantenimientos_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./mantenimientos/hospitales/hospitales.component */
    "./src/app/pages/mantenimientos/hospitales/hospitales.component.ts");
    /* harmony import */


    var _mantenimientos_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./mantenimientos/medicos/medicos.component */
    "./src/app/pages/mantenimientos/medicos/medicos.component.ts");
    /* harmony import */


    var _mantenimientos_medicos_medico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./mantenimientos/medicos/medico.component */
    "./src/app/pages/mantenimientos/medicos/medico.component.ts");
    /* harmony import */


    var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./busqueda/busqueda.component */
    "./src/app/pages/busqueda/busqueda.component.ts");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../guards/admin.guard */
    "./src/app/guards/admin.guard.ts");
    /* harmony import */


    var _dise_o_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./diseño/fotos/fotos.component */
    "./src/app/pages/diseño/fotos/fotos.component.ts");
    /* harmony import */


    var _dise_o_fotos_foto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./diseño/fotos/foto.component */
    "./src/app/pages/diseño/fotos/foto.component.ts");
    /* harmony import */


    var _dise_o_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./diseño/blog/blog.component */
    "./src/app/pages/diseño/blog/blog.component.ts");
    /* harmony import */


    var _dise_o_blog_blogs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./diseño/blog/blogs.component */
    "./src/app/pages/diseño/blog/blogs.component.ts");
    /* harmony import */


    var _dise_o_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./diseño/noticias/noticias.component */
    "./src/app/pages/diseño/noticias/noticias.component.ts");
    /* harmony import */


    var _dise_o_noticias_noticia_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./diseño/noticias/noticia.component */
    "./src/app/pages/diseño/noticias/noticia.component.ts");
    /* harmony import */


    var _helpme_api_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./helpme/api.component */
    "./src/app/pages/helpme/api.component.ts");
    /* harmony import */


    var _helpme_information_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./helpme/information.component */
    "./src/app/pages/helpme/information.component.ts");
    /* harmony import */


    var _helpme_certification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./helpme/certification.component */
    "./src/app/pages/helpme/certification.component.ts");
    /* harmony import */


    var _dise_o_cronogrma_cronogrma_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./diseño/cronogrma/cronogrma.component */
    "./src/app/pages/diseño/cronogrma/cronogrma.component.ts");
    /* harmony import */


    var _helpme_developer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./helpme/developer.component */
    "./src/app/pages/helpme/developer.component.ts");
    /* harmony import */


    var _perfil_myperfil_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./perfil/myperfil.component */
    "./src/app/pages/perfil/myperfil.component.ts");
    /* harmony import */


    var _mantenimientos_institucion_institucion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./mantenimientos/institucion/institucion.component */
    "./src/app/pages/mantenimientos/institucion/institucion.component.ts");
    /* harmony import */


    var _dise_o_questions_questions_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./diseño/questions/questions.component */
    "./src/app/pages/diseño/questions/questions.component.ts");
    /* harmony import */


    var _dise_o_questions_question_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./diseño/questions/question.component */
    "./src/app/pages/diseño/questions/question.component.ts"); // Mantenimientos


    var childRoutes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      data: {
        titulo: 'Dashboard'
      }
    }, {
      path: 'account-settings',
      component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"],
      data: {
        titulo: 'Ajustes de cuenta'
      }
    }, {
      path: 'buscar/:termino',
      component: _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_13__["BusquedaComponent"],
      data: {
        titulo: 'Busquedas'
      }
    }, {
      path: 'grafica1',
      component: _grafica1_grafica1_component__WEBPACK_IMPORTED_MODULE_4__["Grafica1Component"],
      data: {
        titulo: 'Gráfica #1'
      }
    }, {
      path: 'perfil',
      component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__["PerfilComponent"],
      data: {
        titulo: 'Actualizar usuario'
      }
    }, {
      path: 'myperfil',
      component: _perfil_myperfil_component__WEBPACK_IMPORTED_MODULE_26__["MyPerfilComponent"],
      data: {
        titulo: 'Perfil de usuario'
      }
    }, {
      path: 'progress',
      component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"],
      data: {
        titulo: 'ProgressBar'
      }
    }, {
      path: 'promesas',
      component: _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__["PromesasComponent"],
      data: {
        titulo: 'Promesas'
      }
    }, {
      path: 'rxjs',
      component: _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__["RxjsComponent"],
      data: {
        titulo: 'RxJs'
      }
    }, // Mantenimientos
    {
      path: 'hospitales',
      component: _mantenimientos_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_10__["HospitalesComponent"],
      data: {
        titulo: 'Categorias'
      }
    }, {
      path: 'medicos',
      component: _mantenimientos_medicos_medicos_component__WEBPACK_IMPORTED_MODULE_11__["MedicosComponent"],
      data: {
        titulo: 'Personal Institucional'
      }
    }, {
      path: 'school',
      component: _mantenimientos_institucion_institucion_component__WEBPACK_IMPORTED_MODULE_27__["InstitucionComponent"],
      data: {
        titulo: 'Configuración de Institución'
      }
    }, {
      path: 'medico/:id',
      component: _mantenimientos_medicos_medico_component__WEBPACK_IMPORTED_MODULE_12__["MedicoComponent"],
      data: {
        titulo: 'Usuario'
      }
    }, // Diseño
    {
      path: 'photos',
      component: _dise_o_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_15__["FotosComponent"],
      data: {
        titulo: 'Fotos'
      }
    }, {
      path: 'photo/:id',
      component: _dise_o_fotos_foto_component__WEBPACK_IMPORTED_MODULE_16__["FotoComponent"],
      data: {
        titulo: 'Fotos'
      }
    }, {
      path: 'blog',
      component: _dise_o_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
      data: {
        titulo: 'blogs'
      }
    }, {
      path: 'blogs/:id',
      component: _dise_o_blog_blogs_component__WEBPACK_IMPORTED_MODULE_18__["BlogsComponent"],
      data: {
        titulo: 'blog'
      }
    }, {
      path: 'news',
      component: _dise_o_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_19__["NoticiasComponent"],
      data: {
        titulo: 'Noticias'
      }
    }, {
      path: 'news/:id',
      component: _dise_o_noticias_noticia_component__WEBPACK_IMPORTED_MODULE_20__["NoticiaComponent"],
      data: {
        titulo: 'Noticia'
      }
    }, {
      path: 'questions',
      component: _dise_o_questions_questions_component__WEBPACK_IMPORTED_MODULE_28__["QuestionsComponent"],
      data: {
        titulo: 'Preguntas Frecuentes'
      }
    }, {
      path: 'question/:id',
      component: _dise_o_questions_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionComponent"],
      data: {
        titulo: 'Pregunta'
      }
    }, {
      path: 'cronograma',
      component: _dise_o_cronogrma_cronogrma_component__WEBPACK_IMPORTED_MODULE_24__["CronogrmaComponent"],
      data: {
        titulo: 'Cronograma'
      }
    }, //HELPME
    {
      path: 'api',
      component: _helpme_api_component__WEBPACK_IMPORTED_MODULE_21__["ApiComponent"],
      data: {
        titulo: 'API REST'
      }
    }, {
      path: 'information',
      component: _helpme_information_component__WEBPACK_IMPORTED_MODULE_22__["InformationComponent"],
      data: {
        titulo: 'Información'
      }
    }, {
      path: 'certification',
      component: _helpme_certification_component__WEBPACK_IMPORTED_MODULE_23__["CertificationComponent"],
      data: {
        titulo: 'Certificados'
      }
    }, {
      path: 'developer',
      component: _helpme_developer_component__WEBPACK_IMPORTED_MODULE_25__["DeveloperComponent"],
      data: {
        titulo: 'Desarrolladores'
      }
    }, // Rutas de Admin
    {
      path: 'usuarios',
      canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]],
      component: _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__["UsuariosComponent"],
      data: {
        titulo: 'Matenimiento de Usuarios'
      }
    }];

    var ChildRoutesModule = function ChildRoutesModule() {
      _classCallCheck(this, ChildRoutesModule);
    };

    ChildRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChildRoutesModule
    });
    ChildRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChildRoutesModule_Factory(t) {
        return new (t || ChildRoutesModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(childRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChildRoutesModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(childRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/perfil/myperfil.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/perfil/myperfil.component.ts ***!
    \****************************************************/

  /*! exports provided: MyPerfilComponent */

  /***/
  function srcAppPagesPerfilMyperfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPerfilComponent", function () {
      return MyPerfilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/services/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MyPerfilComponent = /*#__PURE__*/function () {
      function MyPerfilComponent(usuarioService, router) {
        _classCallCheck(this, MyPerfilComponent);

        this.usuarioService = usuarioService;
        this.router = router;
        this.usuario = usuarioService.usuario;
      }

      _createClass(MyPerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyPerfilComponent;
    }();

    MyPerfilComponent.ɵfac = function MyPerfilComponent_Factory(t) {
      return new (t || MyPerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MyPerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyPerfilComponent,
      selectors: [["app-myperfil"]],
      decls: 247,
      vars: 9,
      consts: [["rel", "stylesheet", "href", "/assets/css/pages/contact-app-page.css"], [1, "row"], [1, "col-lg-4", "col-xlg-3", "col-md-5"], [1, "card"], ["src", "../assets/images/background/socialbg.jpg", "alt", "Card image", 1, "card-img"], [1, "card-img-overlay", "card-inverse", "social-profile", "d-flex"], [1, "align-self-center"], ["alt", "user", "width", "100", "height", "100px", 1, "img-circle", 2, "object-fit", "contain", 3, "src"], [1, "card-title"], [1, "card-subtitle"], [1, "text-white"], [1, "card-body"], [1, "text-muted"], [1, "text-muted", "p-t-30", "db"], [1, "map-box"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508", "width", "100%", "height", "150", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "btn", "btn-circle", "btn-secondary"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-youtube"], [1, "col-lg-8", "col-xlg-9", "col-md-7"], ["role", "tablist", 1, "nav", "nav-tabs", "profile-tab"], [1, "nav-item"], ["data-toggle", "tab", "href", "#profile", "role", "tab", "aria-expanded", "true", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#home", "role", "tab", "aria-expanded", "false", 1, "nav-link"], [1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-expanded", "false", 1, "tab-pane"], [1, "profiletimeline"], [1, "sl-item"], [1, "sl-left"], ["src", "../assets/images/users/1.jpg", "alt", "user", 1, "img-circle"], [1, "sl-right"], ["href", "#", 1, "link"], [1, "sl-date"], ["href", "#"], [1, "col-lg-3", "col-md-6", "m-b-20"], ["src", "../assets/images/big/img1.jpg", 1, "img-responsive", "radius"], ["src", "../assets/images/big/img2.jpg", 1, "img-responsive", "radius"], ["src", "../assets/images/big/img3.jpg", 1, "img-responsive", "radius"], ["src", "../assets/images/big/img4.jpg", 1, "img-responsive", "radius"], [1, "like-comm"], ["href", "javascript:void(0)", 1, "link", "m-r-10"], [1, "fa", "fa-heart", "text-danger"], ["src", "../assets/images/users/2.jpg", "alt", "user", 1, "img-circle"], [1, "m-t-20", "row"], [1, "col-md-3", "col-xs-12"], ["src", "../assets/images/big/img1.jpg", "alt", "user", 1, "img-responsive", "radius"], [1, "col-md-9", "col-xs-12"], ["href", "#", 1, "btn", "btn-success"], [1, "like-comm", "m-t-20"], ["src", "../assets/images/users/3.jpg", "alt", "user", 1, "img-circle"], [1, "m-t-10"], ["src", "../assets/images/users/4.jpg", "alt", "user", 1, "img-circle"], ["id", "profile", "role", "tabpanel", "aria-expanded", "true", 1, "tab-pane", "active"], [1, "col-md-3", "col-xs-6", "b-r"], [1, "m-t-30"], [1, "font-medium", "m-t-30"], [1, "pull-right"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "80%", "height", "6px"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "90%", "height", "6px"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "50%", "height", "6px"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%", "height", "6px"], ["id", "settings", "role", "tabpanel", "aria-expanded", "false", 1, "tab-pane"], [1, "form-horizontal", "form-material"], [1, "form-group"], [1, "col-md-12"], ["type", "text", "placeholder", "Johnathan Doe", 1, "form-control", "form-control-line"], ["for", "example-email", 1, "col-md-12"], ["type", "email", "placeholder", "johnathan@admin.com", "name", "example-email", "id", "example-email", 1, "form-control", "form-control-line"], ["type", "password", "value", "password", 1, "form-control", "form-control-line"], ["type", "text", "placeholder", "123 456 7890", 1, "form-control", "form-control-line"], ["rows", "5", 1, "form-control", "form-control-line"], [1, "col-sm-12"], [1, "form-control", "form-control-line"], [1, "btn", "btn-success"]],
      template: function MyPerfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "hannagover@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+91 654 784 547");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "71 Pilgrim Avenue Chevy Chase, MD 20815");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "iframe", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Social Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "assign a new task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Design weblayout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "2 comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " 5 Love");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Design weblayout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2 comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " 5 Love");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2 comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " 5 Love");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "5 minutes ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "blockquote", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Nombres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Apellidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Telefono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Colegio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Skill Set");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Wordpress ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "50% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "HTML 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "50% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "jQuery ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "50% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Photoshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "70%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "50% Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "form", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Phone No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "textarea", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "select", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "London");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Usa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Canada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Thailand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Update Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.usuario.imagenUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.frace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.nombres);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.apellidos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.school);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.description);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyPerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myperfil',
          templateUrl: './myperfil.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=child-routes-module-es5.js.map