
// JSX

const welcome = <h1>Hello, world!</h1>;

// EJEMPLO DE USO

const name "Job";
const welcome2 = <h1>Hello,{name}</h1>;

// JSX COMO EXPRESION


function getUserName(name) {
    if (name) {
        return <h1>Hello, {formatName(nome)}.</h1>
    }
    return <h1>Hello, anonymous.</h1>
}

// ESPECIFICANDO ATRIBUTOS

const element = <div className="header" />;
const image = <img src={name.urlImage} alt={name} />;
