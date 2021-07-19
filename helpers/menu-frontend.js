
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Dashboard',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Main', url: '/' },
            { titulo: 'Gráficas', url: 'grafica1' },
            { titulo: 'rxjs', url: 'rxjs' },
            { titulo: 'Promesas', url: 'promesas' },
            { titulo: 'ProgressBar', url: 'progress' },
          ]
        },
    
        {
          titulo: 'Mantenimientos',
          icono: 'mdi mdi-folder-lock-open',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Categorias', url: 'hospitales' },
            { titulo: 'Equipo', url: 'medicos' },
          ]
        },
        {
          titulo: 'Diseño',
          icono: 'mdi mdi-heart',
          submenu: [
            { titulo: 'Blog', url: 'blog' },
            { titulo: 'Galeria', url: 'photos' },
            { titulo: 'Preguntas', url: 'questions' },
          ]
        },
        {
          titulo: 'Ayuda',
          icono: 'mdi mdi-help-circle-outline',
          submenu: [
            { titulo: 'Información', url: 'information' },
            { titulo: 'API', url: 'api' },
            { titulo: 'Desarrolladores', url: 'developer' },
            //{ titulo: 'Certificados', url: 'certification' },
          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios'},
                                {titulo:'Institución', url:'school' }       );
        menu[2].submenu.unshift({ titulo: 'Noticias', url: 'news' },
                              //{ titulo: 'Personal', url: '' },
                              //{ titulo: 'Cronograma', url: 'cronograma' }
                              );
        menu[3].submenu.unshift( { titulo: 'Certificados', url: 'certification'});
        
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}
