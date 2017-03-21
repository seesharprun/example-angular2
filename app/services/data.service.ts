import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
    public GetData(count: number = 3): DataItem[] {
        var list = [
            new DataItem(1, "A", "Alpha"),
            new DataItem(2, "B", "Bravo"),
            new DataItem(3, "C", "Charlie"),
            new DataItem(4, "D", "Delta"),
            new DataItem(5, "E", "Echo")
        ];
        return list.slice(0, count);
    }
}

export class DataItem {
    constructor(public Id: number, public Letter: string, public Name: string) {        
    }
}