import PublicPage from '../components/public/PublicLayout';
import RecruiterPage from '../components/recruiter/RecruiterLayout';
import JobseekerPage from '../components/jobseeker/JobseekerLayout';
import Public from './public';
import recruiter from './recruiter';
import jobseeker from './jobseeker';
import Register from '../components/auth/Register.vue';
import Login from '../components/auth/Login.vue';
import Unauthorized from '../components/Unauthorized.vue'; 
const route = [
    {
        path: '/',
        component: PublicPage,
        children: Public,
        
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/Unauthorized',
        name: 'Unauthorized',
        component: Unauthorized,
    },
    {
        path: '/recruiter',
        component: RecruiterPage,
        children: recruiter,
        
    },
    {
        path: '/jobseeker',
        component: JobseekerPage,
        children: jobseeker,
       
    },
    
   
];

export default route;