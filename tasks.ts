interface User {
    id:string;
    firstName:string;
    lastName:string;
    isOnline:boolean;
    age:number;
    role:string;
    address: {
        city:string;
        country:string;
        zip:string;
    } | null;
}

const user1: User = {
    id: "111",
    firstName: "Ivan",
    lastName: "Ivanov",
    isOnline: false,
    age: 20,
    role: "user",
    address: {
        city: "Minsk",
        country: "Belarus",
        zip: "220000",
    },
};

const user2: User = {
    id: "222",
    firstName: "Ivan",
    lastName: "Ivanov",
    isOnline: false,
    age: 20,
    role: "user",
    address: null,
};

const user3 = {
    id: "333",
    firstName: "Ivan",
    lastName: "Ivanov",
    isOnline: false,
    role: "user",
    address: null,
};

enum Role {
    Guest='guest',
    User='user',
    Admin='admin',
}
type Feature = 'catalog'| 'basket'| 'news'| 'report';
type Permission = 'NO_ACCESS' | 'READ'| 'READ_WRITE';


let role: Role = Role.Guest;

type FeaturePermission = Role.Guest|Role.User|Role.Admin;
interface Features {
    catalog: Permission,
         news: Permission,
         basket?: Permission,

         report?: Permission,

}

   // interface FeaturePermission {
   //     guest: {
   //         catalog: Permission,
   //         news: Permission,
   //     },
   //     user: {
   //         catalog: Permission,
   //         news: Permission,
   //         basket: Permission,
   //     }
   //     admin: {
   //         catalog: Permission,
   //         news: Permission,
   //         report: Permission,
   //     }
   // }


let feature: Feature = "catalog";
let permission: Permission = "READ";
const permissions: Record<FeaturePermission,Features>  = {
    guest: {
        catalog: "READ",
        news: "READ",
    },
    user: {
        catalog: "READ",
        basket: "READ_WRITE",
        news: "READ",
    },
    admin: {
        catalog: "READ_WRITE",
        news: "READ",
        report: "READ",
    },
};


// function hasPermission (user:User,features:Feature[]) {
//   const role = user.role;
//   const rolePermissions = permissions[role];
//   const featuresToCheck =
// }

// function updateUser(user: User, newValues: {isOnline?:boolean,age?:number,lastName?:string}) {
//     const
//         return { ...user, ...newValues };
// }
//
// const updatedUser = updateUser(user, { isOnline: true });
// const updatedUser2 = updateUser(user, { age: 25, lastName: "Petrov" });