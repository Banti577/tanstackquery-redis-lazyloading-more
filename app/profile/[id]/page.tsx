
import { Suspense } from 'react';
import redis from '../../../lib/redis';

interface ProfilePageProps {
  params: {
    id: string;
  };
}


interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
  coordinates: Coordinates;
}

interface Hair {
  color: string;
  type: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: "admin" | "user" | "moderator"; 
}

interface UsersResponse {
  users: User[];
}


export default async function ProfilePage({ params }: ProfilePageProps) {

  const resolvedpar = await params;
  const { id } = resolvedpar;

  const cached: string | null = await redis.get(`user`) ;
  let user;

  if (cached) {
    user = JSON.parse(cached);
  } else {
    try {
    
      const res = await fetch(`http://localhost:3000/api/user/${id}`);
    
      user = await res.json();

    } catch (err) {
      console.log('error is', err)
    }


    await redis.set(`user:${id}`, JSON.stringify(user), 'EX', 3600);
  }

  return (
  <div>
     <Suspense fallback={<p>Loading users...</p>}>
    {user && user.users && <div>
      {user.users.map((item: User) =>{
        return (
          <div key={item.id}>
            {item.firstName}
          </div>
        )
      })}
      </div>}
      </Suspense>
  </div>
   
  );
}




