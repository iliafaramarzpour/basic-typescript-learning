// use express : install express package
// npm : npm i express
// use express with types : install @types/express package
// npm : npm i -D @types/express
import * as express from "express";
import { Application, Request, Response } from "express";

class App {
  private app: Application;
  private port: number = 10000;
  constructor() {
    this.app = express();
    this.router();
  }

  /**
   * router
   */
  public router() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({ message: "OK" });
    });
  }

  public run() {
    this.app.listen(this.port, () => {
      console.log(
        `App is running on port : ${this.port} - http://localhost:${this.port}`
      );
    });
  }
}

const MyApp = new App();
MyApp.run();
