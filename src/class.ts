class Payment {
  public gateway: string;
  private apiKey: string;
  protected paymentSecretKey: string = "qwertyuiopljhgfdsazxcvbnm,./";
  constructor(gateway: string, apiKey: string) {
    this.gateway = gateway;
    this.apiKey = apiKey;
  }

  public getDetails() {
    console.log("the payment result");
  }

  getGateway() {}
  getApiKey() {}
}

const p = new Payment("zarin pal", "123qwe");
p.getDetails();

class OnlinePayment extends Payment {
  constructor(gateway: string, paymentSecretKey: string) {
    super(gateway, paymentSecretKey);
  }

  public getDetails() {
    console.log(this.gateway, this.paymentSecretKey);
  }
}

const op = new OnlinePayment("payping", "asdqwe");
op.getDetails();
