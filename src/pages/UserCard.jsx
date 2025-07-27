import Navbar from './Navbar'; 

export default function UserCard() {

    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    const { fullName: name, email } = userData;
    

  return (

    <div>
            <Navbar />

             <div className="max-w-sm mx-auto mt-6 p-4 border rounded shadow bg-white">

                   <h2 className="text-xl font-semibold">{name}</h2>
                   <p className="text-gray-600">{email}</p>
             </div>
    </div>
  
  );
}
