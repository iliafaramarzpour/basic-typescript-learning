abstract class Delivery {
  abstract type: string;
  abstract send(): boolean;
}

class ExpressPost extends Delivery {
  public type: string = "express";
  public send(): boolean {
    return true;
  }
}

class Tipax extends Delivery {
  public type: string = "tipax";
  public send(): boolean {
    return true;
  }
}
