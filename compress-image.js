// const imagemin = require('imagemin');
// const mozjpeg = require('imagemin-mozjpeg');
// const pngquant = require('imagemin-pngquant');

// (async () => {
//     await imagemin(['src/assets/images/*.{jpg,png'], {
//         destination: 'src/assets/images/compressed',
//         plugins: [
//             mozjpeg({ quality: 75 }),
//             pngquant({ quality: [0.6, 0.8] })
//         ]
//     });
//     console.log('Images compressed');
// })