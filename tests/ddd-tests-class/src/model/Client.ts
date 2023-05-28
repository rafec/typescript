export class Client {
    private id: number;
    private name: string;
    private email: string;
    private whatsapp: string;

    public constructor(id: number, name: string, email: string, whatsapp: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.whatsapp = whatsapp;
    }
}