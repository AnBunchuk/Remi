// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
// закрытие рекламного окна tagline
import tagline from './modules/tagline.js';
tagLine();
