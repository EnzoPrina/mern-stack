import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProjectPage from '../pages/ProjectPage';
import ProjectsPage from '../pages/ProjectsPage';
import RegisterPage from '../pages/RegisterPage';
import UserPage from '../pages/admin/UserPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';


export default function AppRouters() {
  return (
    <Router>
      <Layout>
            <Routes>
                <Route exact path={routes.home} element={ <HomePage/> } />
                <Route exact path={routes.login} element={ <LoginPage/> } />
                <Route exact path={routes.register} element={ <RegisterPage/> } />
                <Route exact path={routes.account} element={ <AccountPage/> } />
                <Route exact path={routes.projects} element={ <PrivateRoute> <ProjectsPage/>
                  </PrivateRoute> } />
                <Route exact path={routes.project()} element={ <ProjectPage/> } />
                <Route hasRole={roles.admin} exact path={routes.admin.users} element={ <UserPage/> } />

                <Route path="*" element={NotFoundPage} />
            </Routes>

        </Layout>
    </Router>
  )
}
