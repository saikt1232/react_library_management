import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../Users/Users';
import Books from '../Books/Books'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/users' component={Users}/>
            <Route path='/books' component={Books}/>
        </Switch>
    </main>
)

export default Main;