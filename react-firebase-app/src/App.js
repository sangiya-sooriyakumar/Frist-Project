// src/App.js
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Authentication/Login';
import HomeScreen from './components/MainNavigation/HomeScreen';
import ViewProfile from './components/ProfileManagement/ViewProfile';
import EditProfile from './components/ProfileManagement/EditProfile';
import BrowseEpisodes from './components/BrowseEpisodes/BrowseEpisodes';
import EpisodeDetail from './components/BrowseEpisodes/EpisodeDetail';
import Settings from './components/Settings/GeneralSettings'; // Adjust path as needed
// Import other components as needed

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={HomeScreen} />
      <Route path="/profile" component={ViewProfile} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/browse-episodes" component={BrowseEpisodes} />
      <Route path="/episode/:id" component={EpisodeDetail} />
      <Route path="/settings" component={Settings} />
      {/* Add other routes as needed */}
      <Route path="*" render={() => <h1>404: Page Not Found</h1>} />
    </Switch>
  );
};

export default App;
