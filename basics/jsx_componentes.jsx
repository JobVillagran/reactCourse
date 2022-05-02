
// COMPONENTES FUNCIONALES // ESTOS SON LOS MAS USADOS

function welcome(props){
    return<h1>Hello{props.name}</h1>;
}

// COMPONENTES DE CLASE // MENOS USADOS

class Welcome extends React.Component{
    render(){
        return<h1>Hello,{this.props.name}</h1>
    }
}


// COMPONENTES FUNCIONALES // COMBINACION
        
const Container=()=> {
    return (
        <div className="container">
        <p>Hello</p>
    </div>
    );
};

