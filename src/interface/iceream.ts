//  src/interface/icecream.ts
export interface IceCreamSales{
    flavor: IceCreamFlavor;
    sales:number;
    backgroundColor:string;
}

type IceCreamFlavor = 
                        "バニラ"|
                        "チョコ"|
                        "ストロベリー"|
                        "抹茶"|
                        "チョコミント";