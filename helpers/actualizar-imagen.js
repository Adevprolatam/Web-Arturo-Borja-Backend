const Usuario = require('../models/usuario');
const fs = require('fs');

const Medico = require('../models/medico');
const Hospital = require('../models/hospital');
const Item = require('../models/items');
const Section = require('../models/section');
const News = require('../models/news')
const Question = require('../models/questions')
//const cloudinaryURL = " http://localhost:3000/api/"
const borrarImagen = ( path ) => {
    if ( fs.existsSync( path ) ) {
        // borrar la imagen anterior
        fs.unlinkSync( path );
    }
}


const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';
    
    switch( tipo ) {

        case 'medicos':
            const medico = await Medico.findById(id);
            if ( !medico ) {
                console.log('No es un médico por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${ medico.img }`;
            borrarImagen( pathViejo );

            medico.img = nombreArchivo;
            return true;

        break;
        
        case 'hospitales':
            const hospital = await Hospital.findById(id);
            if ( !hospital ) {
                console.log('No es un hospital por id');
                return false;
            }

            pathViejo = `./uploads/hospitales/${ hospital.img }`;
            borrarImagen( pathViejo );

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;

        break;
        
        case 'usuarios':

            const usuario = await Usuario.findById(id);
            if ( !usuario ) {
                console.log('No es un usuario por id');
                return false;
            }

            pathViejo = `./uploads/usuarios/${ usuario.img }`;
            borrarImagen( pathViejo );

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

        break;

        case 'items':

            const item = await Item.findById(id);
            if ( !item ) {
                console.log('No es un item por id');
                return false;
            }

            pathViejo = `./uploads/items/${ item.img }`;
            borrarImagen( pathViejo );

            item.img = nombreArchivo;
            await item.save();
            return true;

        break;

        case 'sections':

            const section = await Section.findById(id);
            if ( !section ) {
                console.log('No es una seccion por id');
                return false;
            }

            pathViejo = `./uploads/section/${ section.img }`;
            borrarImagen( pathViejo );

            section.img = nombreArchivo;
            await section.save();
            return true;

        break;

        case 'news':

            const news = await News.findById(id);
            if ( !news ) {
                console.log('No es una Noticia por id');
                return false;
            }

            pathViejo = `./uploads/news/${ news.img }`;
            borrarImagen( pathViejo );
            
           //`${cloudinaryURL}${nombreArchivo}`
            news.img = nombreArchivo;
            await news.save();
            console.log(news.img);
            return true;
        break;
        case 'question':

            const question = await Question.findById(id);
            if ( !question ) {
                console.log('No es una Pregunta por id');
                return false;
            }

            pathViejo = `./uploads/question/${ question.img }`;
            borrarImagen( pathViejo );

            question.img = nombreArchivo;
            await question.save();
            return true;
        break;
    
    }
    


}



module.exports = { 
    actualizarImagen
}
