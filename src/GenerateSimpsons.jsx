import  React  from  'react';

const  GenerateSimpsons = ({ selectSimpsons }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectSimpsons}>Get simpsons</button>
        </div>
    );
};

export  default  GenerateSimpsons;