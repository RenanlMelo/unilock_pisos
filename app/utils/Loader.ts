const var_listImages = {
    'dark_logo-50': 'public/image_dark_logo-50.png',
    'dark_logo': 'public/image_dark_logo.png',
    'form_bg': 'public/image_form_bg.png',
    'inicio_bg': 'public/image_inicio_bg.jpeg',
    'intertravado1': 'public/image_intertravado1.jpg',
    'intertravado2': 'public/image_intertravado2.jpg',
    'main_logo': 'public/image_main_logo.png',
    'piso_grama': 'public/image_pisoGrama.jpg',
    'texture': 'public/image_texture.png',
    'yellow_logo': 'public/image_yellow_logo.png',
}

type ImageNames = keyof typeof var_listImages;

export async function Loader(imageName: ImageNames) {


    const imageUrl = var_listImages[imageName];
    

    if (imageUrl) {
        const response = await fetch(imageUrl)

        const imageBlob = await response.blob()
        
        console.log("Blob", URL.createObjectURL(imageBlob));

        return URL.createObjectURL(imageBlob)
    }
}
