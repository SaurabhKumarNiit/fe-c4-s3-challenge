export type Note = {
        id?: number;
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: any;
        confirmPassword?: any;
        gender?:string;
        age?:number;
        phone?:number;
        address?:[
            state?: string,
            city?: string,
            street?: string,
            zipcode?:number
        ]

    }
