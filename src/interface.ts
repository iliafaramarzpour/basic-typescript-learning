interface IStorage {
  location: string;
  save(): boolean;
  get(): string;
  clean(): boolean;
}

class FileStorage implements IStorage {
  public location: string = "system";
  constructor(location: string) {
    this.location = location;
  }
  public save(): boolean {
    return true;
  }

  public get(): string {
    return "";
  }

  public clean(): boolean {
    return false;
  }
}

class DataBaseStorage implements IStorage {
  public location: string = "database";
  constructor(location: string) {
    this.location = location;
  }
  public save(): boolean {
    return true;
  }

  public get(): string {
    return "";
  }

  public clean(): boolean {
    return false;
  }
}

function saveFile(saveHandler: IStorage): boolean {
  saveHandler.save();
  return true;
}
