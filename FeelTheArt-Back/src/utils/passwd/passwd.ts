import bc from 'bcryptjs';

export class Password {
    encrypt = (passwd: string) => {
        return bc.hash(passwd, 10);
    };
    validate = (newPasswd: string, hash: string) => {
        return bc.compare(newPasswd, hash);
    };
}
