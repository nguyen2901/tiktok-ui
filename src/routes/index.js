import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search, layout: null },
    { path: '/profile', component: Profile, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
