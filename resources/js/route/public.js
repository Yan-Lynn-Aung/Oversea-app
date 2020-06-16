import home from '../components/public/Home/Home';
import ComponentOne from '../components/public/Home/ComponentOne';
const route = [
    {
        path: '/',
        name:'Home',
        component: home,
	},
	{
        path: '/one/:id?',
        name:'One',
        component: ComponentOne,
	}	
];

export default route;