/**
 * The default export of `netlify-cms` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from 'netlify-cms'

// editor preview styles
import './cms.css'

/**
 * Let's say you've created widget and preview components for a custom image
 * gallery widget in separate files:
 */
// import ImageGalleryWidget from './image-gallery-widget.js'
// import ImageGalleryPreview from './image-gallery-preview.js'

/**
 * Register the imported widget:
 */
// CMS.registerWidget(`image-gallery`, ImageGalleryWidget, ImageGalleryPreview)
