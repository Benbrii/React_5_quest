import  React  from  'react';

const  DisplaySimpsons = ({ simpsons }) => {
    return (
        <div  className="DisplaySimpsons">
            <img  src={simpsons.image}  alt="picture"  />
            <ul>
                <li>
                    quote : {simpsons.quote}
                </li>
                <li>
                    character : {simpsons.character} 
                </li>
            </ul>
        </div>
    );
};

export  default  DisplaySimpsons;