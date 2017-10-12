import {SmartFox, SFSEvent, ConnectionEvent} from "@ohze/sfs2x";

class Main {
    private sfs: SmartFox;

    constructor() {
        this.sfs = new SmartFox({
            // host: "127.0.0.1",
            host: "dev.sandinh.com",
            port: 8443,
            debug: true,
            useSSL: true,
            zone: "sfsak"
        });
        this.sfs.addEventListener(SFSEvent.CONNECTION, this.onConnection);
        this.sfs.connect();
    }

    private onConnection = (e: ConnectionEvent): void => {
        console.log("onConnection", e);
    }
}

new Main();
