import React, {FC} from 'react';
import { Route, Switch } from "react-router";
import Home from './views/Home';
// import FormInputContainer from './views/FormInput/FormInputContainer'
import FormInputContainer from './views/FormInputs/FormInputContainer'
type InitRouteComponent =  {
    component?: object;
    children?: RenderProp<any>;
}

interface RenderProp<TChildrenProps, TElement = any> {
    (props: TChildrenProps): React.ReactElement<TElement>;
}

const ReactRouter : FC<InitRouteComponent> = (props) => {
    return (
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/form-input" component={FormInputContainer}/>
        </Switch>
    )
};


export default ReactRouter;





