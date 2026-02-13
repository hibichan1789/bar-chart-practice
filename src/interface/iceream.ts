//  src/interface/icecream.ts
export interface IceCreamSales{
    flavor: IceCreamFlavor;
    sales:number;
}

type IceCreamFlavor = 
                        "バニラ"|
                        "チョコ"|
                        "ストロベリー"|
                        "抹茶"|
                        "チョコミント";